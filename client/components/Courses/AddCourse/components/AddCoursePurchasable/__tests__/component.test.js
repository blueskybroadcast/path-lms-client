import React from 'react';
import { shallow } from 'enzyme';
import AddCoursePurchasable from '../component';

import { sellableItems, selectedSellableItems } from '../../../../../../fixtures/sellableItems';

describe('AddCoursePurchasable', () => {
  const props = {
    handleChange: jest.fn(),
    handlePurchaseAvailabilityDateChange: jest.fn(),
    handleToggleSellableItem: jest.fn(),
    handleSellableItemPriceChange: jest.fn(),
    handleSellableItemLabelChange: jest.fn(),
    handleSellableItemLabelToggle: jest.fn()
  };

  test('should render AddCoursePurchasable correctly if there is no purchaseable items', () => {
    const wrapper = shallow(
      <AddCoursePurchasable
        {...props}
        sellableItems={{}}
        selectedSellableItems={{}}
        limitPurchaseAvailability={false}
        freeCleEnabled={false}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('should render AddCoursePurchasable correctly with purchaseable items and limitPurchaseAvailability + freeCleEnabled turned off', () => {
    const wrapper = shallow(
      <AddCoursePurchasable
        {...props}
        groupsIds={['4', '3']}
        sellableItems={sellableItems}
        selectedSellableItems={selectedSellableItems}
        limitPurchaseAvailability={false}
        freeCleEnabled={false}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('should render AddCoursePurchasable correctly with purchaseable items and limitPurchaseAvailability + freeCleEnabled turned on', () => {
    const wrapper = shallow(
      <AddCoursePurchasable
        {...props}
        sellableItems={sellableItems}
        selectedSellableItems={selectedSellableItems}
        limitPurchaseAvailability={false}
        freeCleEnabled={false}
        purchaseAvailabilityDate={new Date('20.03.2019')}
        groupsIds={['4', '3']}
        freeCleAmount="60"
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
