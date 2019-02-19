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
    if (!categoriesData[id].parent.id) {
      categories.push({
        id,
        level: 0,
        name: categoriesData[id].name,
        childCount: 0
      });
    }
  });

  const nextCategories = [...categories];
  let nextAddedCategoriesCount = 0;

  categories.forEach((cat, index) => {
    categoriesIds.forEach((id) => {
      const parentId = categoriesData[id].parent.id;

      if (cat.id === parentId) {
        nextCategories.splice(
          index + 1 + nextAddedCategoriesCount,
          0,
          {
            id,
            level: 1,
            name: categoriesData[id].name,
            childCount: 0,
            parentId
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
        if (cat.id === categoriesData[id].parent.id) {
          finalCategories.splice(
            index + 1 + finalAddedCategoriesCount,
            0,
            { id, level: 2, name: categoriesData[id].name }
          );
          nextCategories[index].childCount += 1;
          finalAddedCategoriesCount += 1;
        }
      });
    }
  });

  return finalCategories;
};
