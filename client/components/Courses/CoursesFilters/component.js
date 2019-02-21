import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

class CoursesFilters extends React.Component {
  componentDidMount() {

  }

  render() {
    const { isAdmin, slug } = this.props;
    return (
      <div className="filtering-panel">
        <div className="filtering-controls">
          <div
            className={classNames('categories-list', isAdmin && 'with-manage-button')}
          >
            <div className="dropdown" data-role="categories-dropdown">
              <a
                className="dropdown-trigger"
                data-submenu=""
                data-toggle="dropdown"
                href="#"
                aria-expanded="false"
              >
                Browse...
              </a>
            </div>
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
            <input placeholder="Search in programs..." type="text" />
          </form>
          <ul className="filters-list">
            <li>
              <a
                className="filter active"
                data-filter="all"
                href={`/${slug}/courses`}
              >
                All
              </a>
            </li>
            <li>
              <a
                className="filter"
                data-filter="free_cle"
                href={`/${slug}/courses`}
              >
                Free CLE
              </a>
            </li>
          </ul>
        </div>
        <ul className="empty tags-list" data-role="chosen-categories" />
      </div>
    );
  }
}

export default CoursesFilters;
