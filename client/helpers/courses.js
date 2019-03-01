export const convertGroupsToSellableItems = (groupsIds, groupsData) => {
  const sellableItems = {};
  groupsIds.map((id, index) => {
    const group = groupsData[id];
    sellableItems[index] = {
      sellable: true,
      groupId: group.id,
      groupName: group.name,
      labelEnabled: false,
      pricesAttributes: {
        0: {
          currency: 'usd',
          price: '',
          label: ''
        }
      }
    };
  });
  return sellableItems;
};
