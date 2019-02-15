import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

class CoursesFilters extends React.Component {
  componentDidMount() {

  }

  render() {
    const { isAdmin } = this.props;
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
              <ul className="dropdown-menu">
                <li>
                  <a data-option="" href="#">
                    View all
                  </a>
                </li>
                <li className="divider" />
                <li>
                  <a data-option="1902" href="#">
                    CAE (1)
                  </a>
                </li>
                <li>
                  <a data-option="1991" href="#">
                    CME (0)
                  </a>
                </li>
                <li className="dropdown-submenu">
                  <a data-option="1962" href="#">
                    Core Competency (1)
                  </a>
                  <ul className="dropdown-menu">
                    <li className="dropdown-submenu">
                      <a data-option="2444" href="#">
                        Level A (1)
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a data-option="2445" href="#">
                          Level AA (1)
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a data-option="1993" href="#">
                    CPD (0)
                  </a>
                </li>
                <li>
                  <a data-option="1995" href="#">
                    Donors (0)
                  </a>
                </li>
                <li>
                  <a data-option="227" href="#">
                    eCommerce (1)
                  </a>
                </li>
                <li>
                  <a data-option="1994" href="#">
                    NDD (0)
                  </a>
                </li>
                <li>
                  <a data-option="225" href="#">
                    Path (5)
                  </a>
                </li>
                <li>
                  <a data-option="1992" href="#">
                    Transplant (0)
                  </a>
                </li>
                <li>
                  <a data-option="226" href="#">
                    Webcasts (2)
                  </a>
                </li>
                <li>
                  <a data-option="228" href="#">
                    Webinars (2)
                  </a>
                </li>
              </ul>
            </div>
            { isAdmin &&
              <Link
                className="manage-categories tooltiped"
                to="/showroom/categories"
              >
                <i className="icon icon-cog" />
              </Link>
            }
          </div>
          <form className="search-courses-form" data-role="search-form">
            <input placeholder="Search in programs..." type="text" />
          </form>
          <ul className="filters-list">
            <li>
              <a
                className="filter active"
                data-filter="all"
                href="/showroom/courses?slug=showroom"
              >
                All
              </a>
            </li>
            <li>
              <a
                className="filter"
                data-filter="free_cle"
                href="/showroom/courses?filter=free_cle&amp;slug=showroom"
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
