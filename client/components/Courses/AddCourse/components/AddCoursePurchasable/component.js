import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DatePicker from 'react-datepicker';

import { COURSE_PRICE_PATTERN } from '../../../../../constants/courses';

const AddCoursePurchasable = ({
  sellableItems, selectedSellableItems, limitPurchaseAvailability, handleChange,
  handlePurchaseAvailabilityDateChange, groupsIds, handleToggleSellableItem,
  handleSellableItemPriceChange, handleSellableItemLabelChange,
  handleSellableItemLabelToggle, purchaseAvailabilityDate
}) => {
  const sellableItemEnabled = sellableItems[0]
    && Object.values(sellableItems).filter(item => item.sellable).length > 0;

  return (
    <fieldset className="group-pricing" data-role="group-pricing">
      <legend>
        <span>Group Pricing</span>
      </legend>
      <div className="control-group group-prices">
        <label>Purchasable</label>
        <ul className="pricings controls">
          { sellableItems[0] && groupsIds.map((id, index) => {
            const { groupName } = sellableItems[index];

            const selectedSellableItem = selectedSellableItems[index];

            const sellable = !!selectedSellableItem;
            const price = selectedSellableItem ? selectedSellableItem.pricesAttributes[0].price : '';
            const label = selectedSellableItem ? selectedSellableItem.pricesAttributes[0].label : '';
            const labelEnabled = selectedSellableItem ? selectedSellableItem.labelEnabled : false;
            const priceIsInvalid = price && price !== '' && COURSE_PRICE_PATTERN.test(price);

            return (
              <li
                key={id}
                className="group"
                data-role="price-row"
              >
                <div className="price-row-content" data-role="price-row-content">
                  <label
                    htmlFor={index}
                    className="checkbox control label-switch"
                    role="checkbox"
                    tabIndex="0"
                    aria-checked="true"
                  >
                    <input
                      onChange={() => handleToggleSellableItem(index)}
                      checked={sellable}
                      id={index}
                      type="checkbox"
                    />
                    <div className="checkbox" />
                  </label>
                  <div className="group-price">
                    <div className={classNames('group-name', labelEnabled && 'price-label-visible')}>
                      <input
                        value={groupName}
                        aria-label="Groups"
                        className="name"
                        readOnly
                        type="text"
                      />
                    </div>
                    <div
                      className={classNames('price', labelEnabled && 'price-label-visible')}
                      data-currency="$"
                    >
                      <input
                        value={price}
                        onChange={({ target }) => (
                          handleSellableItemPriceChange(index, target.value)
                        )}
                        aria-label="Price"
                        className={classNames({
                          'error-border': (sellable && !price) || priceIsInvalid,
                          'price-field': true,
                          'price-label-visible': labelEnabled
                        })}
                        type="text"
                        disabled={!sellable}
                      />
                      { labelEnabled && (
                        <input
                          value={label}
                          onChange={
                            ({ target }) => handleSellableItemLabelChange(index, target.value)
                          }
                          aria-label="Price"
                          className="price-label-field"
                          placeholder="Custom label"
                          type="text"
                        />
                      )}
                      <a
                        onClick={() => handleSellableItemLabelToggle(index)}
                        className={classNames('price-label-trigger', !sellable && 'disabled')}
                        href="#"
                        data-role="price-label-trigger"
                      >
                        <div className="controls">
                          <i className={classNames('icon', labelEnabled ? 'icon-trash' : 'icon-plus')} />
                          <i className="icon icon-tag icon-lg" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                { sellable && !price && <span className="help-inline">should be set</span> }
                { priceIsInvalid && <span className="help-inline">should be a valid dollar amount</span> }
              </li>
            );
          })}
        </ul>
        <div className="controls">
          <div className="hint-container">
            <p className="hint">Make sure you set the appropriate items in the group permissions</p>
          </div>
        </div>
      </div>
      { sellableItemEnabled && (
        <div
          className="control-group disable-purchase featured optional text"
          data-role="disable-purchase-fields"
        >
          <label htmlFor="limitPurchaseAvailability">
            Limit purchase availability
          </label>
          <div className="controls">
            <label
              className="label-switch"
              role="checkbox"
              tabIndex="0"
              htmlFor="limitPurchaseAvailability"
              aria-checked="true"
            >
              <input
                checked={limitPurchaseAvailability}
                onChange={handleChange}
                label="false"
                id="limitPurchaseAvailability"
                name="limitPurchaseAvailability"
                data-role="disable-purchase-toggler"
                className="boolean optional switcher optional"
                type="checkbox"
              />
              <div className="checkbox" />
            </label>
            <p className="help-block">This item is available to purchase until 11:59pm on...</p>
          </div>
          { limitPurchaseAvailability && (
            <div
              className="controls disable-purchase-after-date-fields"
              data-role="disable-purchase-after-date-fields"
            >
              <label
                className="label required"
                htmlFor="purchaseAvailabilityDate"
              >
                Date
              </label>
              <div className="input-wrapper">
                <DatePicker
                  selected={purchaseAvailabilityDate}
                  onChange={handlePurchaseAvailabilityDateChange}
                  id="purchaseAvailabilityDate"
                  className="disable_purchase_after_datepicker picker__input"
                />
              </div>
            </div>
          )}
        </div>
      )}
    </fieldset>
  );
};

AddCoursePurchasable.propTypes = {
  sellableItems: PropTypes.objectOf(PropTypes.object).isRequired,
  selectedSellableItems: PropTypes.objectOf(PropTypes.object).isRequired,
  limitPurchaseAvailability: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  purchaseAvailabilityDate: PropTypes.instanceOf(Date),
  handlePurchaseAvailabilityDateChange: PropTypes.func.isRequired,
  groupsIds: PropTypes.arrayOf(PropTypes.string),
  handleToggleSellableItem: PropTypes.func.isRequired,
  handleSellableItemPriceChange: PropTypes.func.isRequired,
  handleSellableItemLabelChange: PropTypes.func.isRequired,
  handleSellableItemLabelToggle: PropTypes.func.isRequired
};

AddCoursePurchasable.defaultProps = {
  groupsIds: [],
  purchaseAvailabilityDate: null
};

export default AddCoursePurchasable;
