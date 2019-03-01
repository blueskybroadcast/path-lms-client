import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';

const AddCourseExpire = ({
  expirable, repurchasable, expirationByDate, expirationDate, expirationByDays, expirationDays,
  handleChange, handleExpirationTypeChange, handleExpirationDateChange
}) => (
  <fieldset data-expirable="false" id="expirable_field">
    <legend>
      <span>Expiry Data</span>
    </legend>
    <div className="control-group featured">
      <label htmlFor="index_course_expiration_expirable">
        Expires
      </label>
      <div className="controls">
        <label
          htmlFor="index_course_expiration_expirable"
          className="label-switch"
          role="checkbox"
          tabIndex="0"
          aria-checked="true"
        >
          <input
            checked={expirable}
            onChange={handleChange}
            type="checkbox"
            name="expirable"
            id="index_course_expiration_expirable"
            data-role="expiration_expirable"
          />
          <div className="checkbox" />
        </label>
        <p className="help-block">Access to this item expires</p>
      </div>
    </div>
    { expirable && (
      <div id="expiration_strategies_fields">
        <div className="control-group featured">
          <label htmlFor="index_course_expiration_repurchasable">
            Repurchasable
          </label>
          <div className="controls">
            <label
              htmlFor="index_course_expiration_repurchasable"
              className="
              label-switch"
              role="checkbox"
              tabIndex="0"
              aria-checked="true"
            >
              <input
                checked={repurchasable}
                onChange={handleChange}
                type="checkbox"
                name="repurchasable"
                id="index_course_expiration_repurchasable"
              />
              <div className="checkbox" />
            </label>
            <p className="help-block">This item can be repurchased after expiration</p>
          </div>
        </div>
        <div className="control-group featured expiration-strategy">
          <div className="controls">
            <label
              htmlFor="index_course_expiration_expires_at_strategy"
              className="label-switch"
              role="checkbox"
              tabIndex="0"
              aria-checked="false"
            >
              <input
                checked={expirationByDate}
                onChange={handleExpirationTypeChange}
                type="checkbox"
                name="expiration[expires_at_strategy]"
                id="index_course_expiration_expires_at_strategy"
                data-role="expiration_expires_at_strategy"
              />
              <div className="checkbox" />
            </label>
            <p className="help-block">Pick the expiration date...</p>
          </div>
          { expirationByDate && (
            <div className="controls" id="expires_at_fields">
              <label htmlFor="expiration_expires_at">
                Expiration Date
              </label>
              <div className="controls">
                <DatePicker
                  selected={expirationDate}
                  onChange={handleExpirationDateChange}
                  name="expirationDate"
                  id="expiration_expires_at"
                  className="expires_at_datepicker picker__input"
                />
                <div className="picker" id="expiration_expires_at_root" aria-hidden="true" />
              </div>
            </div>
          )}
        </div>
        <div className="control-group featured expiration-strategy">
          <div className="controls">
            <label
              htmlFor="index_course_expiration_days_before_expire_strategy"
              className="label-switch"
              role="checkbox"
              tabIndex="0"
              aria-checked="true"
            >
              <input
                checked={expirationByDays}
                onChange={handleExpirationTypeChange}
                type="checkbox"
                name="expiration[days_before_expire_strategy]"
                id="index_course_expiration_days_before_expire_strategy"
                data-role="expiration_days_before_expire_strategy"
              />
              <div className="checkbox" />
            </label>
            <p className="help-block">...or select the number of days before expiration</p>
          </div>
          { expirationByDays && (
            <div className="controls" id="days_before_expire_fields">
              <label htmlFor="expiration_days_before_expire">
                Expires after
              </label>
              <div className="controls">
                <div className="expires-after-days-input-before">days</div>
                <input
                  value={expirationDays}
                  onChange={handleChange}
                  type="text"
                  name="expirationDays"
                  id="expiration_days_before_expire"
                  className="days_before_expire"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    )}
  </fieldset>
);

AddCourseExpire.propTypes = {
  expirable: PropTypes.bool.isRequired,
  repurchasable: PropTypes.bool.isRequired,
  expirationByDate: PropTypes.bool.isRequired,
  expirationDate: PropTypes.instanceOf(Date),
  expirationByDays: PropTypes.bool.isRequired,
  expirationDays: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  handleExpirationTypeChange: PropTypes.func.isRequired,
  handleExpirationDateChange: PropTypes.func.isRequired
};

AddCourseExpire.defaultProps = {
  expirationDate: (() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow;
  })(),
  expirationDays: undefined
};

export default AddCourseExpire;
