import React from 'react';
import PropTypes from 'prop-types';

const AddCourseCategoriesList = ({ categories, categoryIds, handleCategoryToggle }) => (
  <ul>
    {categories.map((category) => {
      const catId = category.id;
      const catIndex = categoryIds.indexOf(catId);
      const isChecked = catIndex !== -1;
      return (
        <li
          className={`level-${category.level}`}
          key={catId}
        >
          <label>
            <input
              checked={isChecked}
              onChange={() => handleCategoryToggle(catId, catIndex, isChecked)}
              type="checkbox"
            />
            {category.name}
          </label>
        </li>
      );
    })}
  </ul>
);

AddCourseCategoriesList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  categoryIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleCategoryToggle: PropTypes.func.isRequired
};

export default AddCourseCategoriesList;
