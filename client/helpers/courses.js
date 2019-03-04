export const convertGroupsToSellableItems = (groupsIds, groupsData) => {
  const sellableItems = {};
  groupsIds.forEach((id, index) => {
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

export const updateCoursesWithIcons = (courses, icons) => {
  const coursesWithIcons = { ...courses };

  icons.forEach((icon) => {
    const parsedContent = icon[0]
      .replace('", ', ' ')
      .replace(', "', ' ')
      .replace('"]', '')
      .split(' ');
    // need to replace it with regex
    const id = parsedContent[1];
    const name = parsedContent[2].toLowerCase();
    const count = icon[1];

    if (coursesWithIcons[id].permittedContent) {
      coursesWithIcons[id].permittedContent[name] = count;
    } else {
      coursesWithIcons[id].permittedContent = {
        [name]: count
      };
    }
  });

  return coursesWithIcons;
};
