export const getParentListLevelOne = (categories) => {
  const parentsLevelOne = categories.filter(cat => cat.level === 0 && cat.childCount > 0);
  return parentsLevelOne.map(({ name, id }) => ({
    name,
    list: categories.filter(cat => cat.parentId === id)
  }));
};

export const getSortedCategories = (categoriesIds, categoriesData) => {
  const categories = [];

  categoriesIds.forEach((id) => {
    const data = categoriesData[id];
    if (!data.parent.id) {
      categories.push({
        id,
        level: 0,
        name: data.name,
        childCount: 0,
        hidden: data.hidden
      });
    }
  });

  const nextCategories = [...categories];
  let nextAddedCategoriesCount = 0;

  categories.forEach((cat, index) => {
    categoriesIds.forEach((id) => {
      const data = categoriesData[id];
      const parentId = data.parent.id;

      if (cat.id === parentId) {
        nextCategories.splice(
          index + 1 + nextAddedCategoriesCount,
          0,
          {
            id,
            level: 1,
            name: data.name,
            childCount: 0,
            parentId,
            hidden: data.hidden
          }
        );
        categories[index].childCount += 1;
        nextAddedCategoriesCount += 1;
      }
    });
  });

  const finalCategories = [...nextCategories];
  let finalAddedCategoriesCount = 0;

  nextCategories.forEach((cat, index) => {
    if (cat.level === 1) {
      categoriesIds.forEach((id) => {
        const data = categoriesData[id];
        if (cat.id === data.parent.id) {
          finalCategories.splice(
            index + 1 + finalAddedCategoriesCount,
            0,
            {
              id,
              level: 2,
              name: data.name,
              hidden: data.hidden
            }
          );
          nextCategories[index].childCount += 1;
          finalAddedCategoriesCount += 1;
        }
      });
    }
  });

  return finalCategories;
};
