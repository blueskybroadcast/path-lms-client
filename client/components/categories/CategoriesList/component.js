import React from 'react';
import PropTypes from 'prop-types';

import CategoriesItem from '../CategoriesItem';

const CategoriesList = ({ categoriesSortedList, categoriesData }) => (
  <section className="list">
    <ul>
      {categoriesSortedList && categoriesSortedList.map(({ id, level }) => (
        <CategoriesItem
          key={id}
          level={level}
          {...categoriesData[id]}
        />
      ))}
    </ul>
  </section>
);

CategoriesList.propTypes = {
  categoriesSortedList: PropTypes.arrayOf(PropTypes.object).isRequired,
  categoriesData: PropTypes.objectOf(PropTypes.object).isRequired
};

export default CategoriesList;
