import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Dropdown } from 'semantic-ui-react';

const CoursesFiltersCategories = ({
  categories, handleCategorySelect, handleCategoriesReset
}) => {
  const DropdownCategory = ({ category, children }) => (
    <li
      className={classNames({
        italic: category.hidden,
        'dropdown-submenu': category.children.length
      })}
    >
      <a onClick={() => handleCategorySelect(category.id)}>
        {category.name}
      </a>
      { children }
    </li>
  );

  return (
    <Dropdown
      text="Browse..."
      className="category-filter-trigger dropdown-trigger"
    >
      <Dropdown.Menu>
        <ul className="dropdown-menu">
          <li>
            <a onClick={handleCategoriesReset}>
              View all
            </a>
          </li>
          <li className="divider" />
          { categories.map(levelZero => (
            <DropdownCategory category={levelZero} key={levelZero.id}>
              { levelZero.children.length ? (
                <ul className="dropdown-menu">
                  { levelZero.children.map(levelOne => (
                    <DropdownCategory category={levelOne} key={levelOne.id}>
                      { levelOne.children.length ? (
                        <ul className="dropdown-menu">
                          { levelOne.children.map(levelTwo => (
                            <DropdownCategory category={levelTwo} key={levelTwo.id} />
                          ))}
                        </ul>
                      ) : null }
                    </DropdownCategory>
                  ))}
                </ul>
              ) : null}
            </DropdownCategory>
          ))}
        </ul>
      </Dropdown.Menu>
    </Dropdown>
  );
};

CoursesFiltersCategories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleCategorySelect: PropTypes.func.isRequired,
  handleCategoriesReset: PropTypes.func.isRequired
};

export default CoursesFiltersCategories;
