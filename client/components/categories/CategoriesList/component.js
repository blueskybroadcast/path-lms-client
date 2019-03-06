import React from 'react';
import PropTypes from 'prop-types';

import CategoriesItem from '../CategoriesItem';

const CategoriesList = ({ loading, categoriesSortedList, categoriesData }) => (
  <section className="list">
    { loading ? (
      <div className="bsb-loader-container" data-role="courses-container">
        <div className="bsb-loader">
          <div className="loader-wrapper">
            <div className="spinner">
              <i className="icon icon-spinner icon-spin icon-large" />
            </div>
          </div>
        </div>
      </div>
    ) : (
      <ul>
        {categoriesSortedList && categoriesSortedList.map(({ id, level }) => (
          <CategoriesItem
            key={id}
            level={level}
            {...categoriesData[id]}
          />
        ))}
      </ul>
    )}
  </section>
);

CategoriesList.propTypes = {
  loading: PropTypes.bool.isRequired,
  categoriesSortedList: PropTypes.arrayOf(PropTypes.object).isRequired,
  categoriesData: PropTypes.objectOf(PropTypes.object)
};

CategoriesList.defaultProps = {
  categoriesData: {}
};

export default CategoriesList;
