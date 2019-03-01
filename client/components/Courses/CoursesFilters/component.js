import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import { isEmpty } from 'lodash';

import CoursesFiltersCategories from './components/CoursesFiltersCategories';
import { getCategoriesForSelect } from '../../../helpers/categories';

const initialState = {
  categories: [],
  filter: undefined,
  search: ''
};

class CoursesFilters extends React.Component {
  state = initialState

  componentDidMount() {
    const { location } = this.props;
    const options = queryString.parse(location.search, { arrayFormat: 'bracket' });
    const opts = {
      categories: options.category_ids || initialState.categories,
      filter: options.filter,
      search: options.search || initialState.search
    };
    this.setState(opts);
  }

  accountHasFeature = (feature) => {
    const { currentAccountFeatures } = this.props;
    return currentAccountFeatures.indexOf(feature) !== '-1';
  }

  fetchCourses = () => {
    const { slug, history, fetchCourses } = this.props;
    const { categories, filter, search } = this.state;

    const options = {
      category_ids: categories,
      search: search || undefined,
      filter
    };

    history.push({
      pathname: `/${slug}/courses`,
      search: queryString.stringify(options, { arrayFormat: 'bracket' })
    });

    fetchCourses(options);
  }

  handleSearchChange = ({ target: { value } }) => {
    this.setState({ search: value });

    clearTimeout(this.delayTimer);
    this.delayTimer = setTimeout(() => {
      this.fetchCourses();
    }, 1000);
  }

  handleCategorySelect = (id) => {
    const { categories } = this.state;
    if (categories.indexOf(id) === -1) {
      this.setState(
        () => ({ categories: [...categories, id] }),
        () => this.fetchCourses()
      );
    }
  }

  handleCategoryRemove = (id) => {
    const { categories } = this.state;
    categories.splice(categories.indexOf(id), 1);
    this.setState(
      () => ({ categories }),
      () => this.fetchCourses()
    );
  }

  handleCategoriesReset = () => {
    this.setState({ categories: [] });
  }

  handleFilterChange = (filter) => {
    this.setState(
      () => ({ filter }),
      () => this.fetchCourses()
    );
  }

  renderFilter = (name, id) => (
    <li>
      <a
        className={classNames('filter cursor-pointer', this.state.filter === id && 'active')}
        onClick={() => this.handleFilterChange(id)}
      >
        {name}
      </a>
    </li>
  )

  delayTimer

  render() {
    const {
      isAdmin, slug, categoriesIds, categoriesData
    } = this.props;
    const { search, categories } = this.state;

    const categoriesForSelect = getCategoriesForSelect(categoriesIds, categoriesData);
    const filtersAreAvailable = this.accountHasFeature('ecommerce')
      && this.accountHasFeature('sellable_filters');
    const accountHasFeatureFreeCle = this.accountHasFeature('free_cle');

    return (
      <div className="filtering-panel">
        <div className="filtering-controls">
          <div
            className={classNames('categories-list', isAdmin && 'with-manage-button')}
          >
            <CoursesFiltersCategories
              categories={categoriesForSelect}
              handleCategorySelect={this.handleCategorySelect}
              handleCategoriesReset={this.handleCategoriesReset}
            />

            { isAdmin && (
              <Link
                className="manage-categories tooltiped"
                to={`/${slug}/categories`}
              >
                <i className="icon icon-cog" />
              </Link>
            )}
          </div>
          <form className="search-courses-form" data-role="search-form">
            <input
              value={search}
              onChange={this.handleSearchChange}
              placeholder="Search in programs..."
              type="text"
            />
          </form>
          { filtersAreAvailable && (
            <ul className="filters-list">
              { this.renderFilter('All') }
              { !accountHasFeatureFreeCle && this.renderFilter('Free', 'free') }
              { accountHasFeatureFreeCle && this.renderFilter('Free CLE', 'free_cle') }
              { !accountHasFeatureFreeCle && (
                <>
                  { this.renderFilter('Purchased', 'purchased') }
                  { this.renderFilter('Not Purchased', 'not_purchased') }
                </>
              )}
            </ul>
          )}
        </div>
        { categories.length && !isEmpty(categoriesData) ? (
          <ul className="tags-list" data-role="chosen-categories">
            { categories.map(id => (
              <li className="tag-wrapper" key={id}>
                <a
                  onClick={() => this.handleCategoryRemove(id)}
                  className="tag-item cursor-pointer"
                >
                  {categoriesData[id].name}
                  <i className="icon icon-times" />
                </a>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    );
  }
}

export default CoursesFilters;
