import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import HeaderNavDropdown from './components/HeaderNavDropdown';

const Header = ({ currentUser: { guest, admin, firstName }, slug, accountName }) => (
  <header className="account">
    <nav>
      <div className="pull-left logo">
        <div className="item" />
        <div className="item">
          <h1>
            <a className="home" href={`/${slug}`}>
              <i className="icon icon-home" />
              &nbsp;
              {accountName}
            </a>
          </h1>
        </div>
        <div className="item toggle-nav">
          <button
            className="toggle-header-nav transparent"
            title="Toggle navigation menu"
            type="button"
          >
            <i className="icon icon-reorder" />
          </button>
        </div>
      </div>
      <div className="pull-left flexible">
        { admin && (
          <div className="item admin-edit-account">
            <a
              className="settings"
              title="Admin Settings"
              href={`/${slug}/account/edit`}
            >
              <i className="icon icon-wrench" />
              <span className="admin-text">&nbsp;Admin</span>
            </a>
          </div>
        )}
        <HeaderNavDropdown />
        <div className="item">
          <a
            className="courses"
            title="Programs"
            href={`/${slug}/courses`}
          >
            <i className="icon icon-course" />
            &nbsp;Courses
          </a>
        </div>
        <div className="item">
          <NavLink
            className="content-library"
            title="Video Go"
            to={`/${slug}/library`}
          >
            <i className="icon icon-library" />
            &nbsp;Content Library
          </NavLink>
        </div>
        <div className="item">
          <a
            className="product-bundles"
            title="Product Bundles"
            href={`/${slug}/product_bundles`}
          >
            <i className="icon icon-product-bundle" />
            &nbsp;Product Bundles
          </a>
        </div>
        <div className="item search">
          <a
            className="searches"
            title="Search"
            href={`/${slug}/searches`}
          >
            <i className="icon icon-search" />
            <span className="search-text">Search</span>
          </a>
        </div>
      </div>
      <div className="pull-right flexible">
        <div className="item global-searching">
          <form
            className="search"
          >
            <input type="text" name="query" id="global-search-field" defaultValue="" className="global-search" placeholder="Search..." aria-label="Search" />
            <button
              aria-label="Submit search form"
              id="search-submit"
              title="Submit search form"
              type="button"
            >
              <i className="icon icon-search" />
            </button>
          </form>
        </div>
        <div className="item cart">
          <a
            title="Cart"
            href={`/${slug}/cart`}
          >
            <i className="icon icon-shopping-cart" />
            <span className="cart-text">&nbsp;Cart&nbsp;</span>
            <span className="filled" data-role="cart-total">0</span>
          </a>
        </div>
        { guest
          ? (
            <>
              <div className="item">
                <a href={`/${slug}/sign_up`}>
                  <i className="icon icon-asterisk" />
                  &nbsp;Sign Up
                </a>
              </div>
              <div className="item">
                <a data-role="login" href={`/${slug}/sign_in`}>
                  <i className="icon icon-sign-in" />
                  &nbsp;Sign In
                </a>
              </div>
            </>
          ) : (
            <>
              <div className="item avatar-wrapper">
                <a
                  title="Profile Settings"
                  href={`/${slug}/profile`}
                >
                  <i className="icon icon-user" />
                  <span className="profile-text">
                    &nbsp;
                    {firstName}
                  </span>
                </a>
              </div>
              <div className="item sign-out-wrapper">
                <a
                  title="Sign Out"
                  href={`/${slug}/sign_out`}
                >
                  <i className="icon icon-sign-out" />
                  <span className="sign-out-text">
                    &nbsp;Sign Out
                  </span>
                </a>
              </div>
            </>
          )
        }
      </div>
    </nav>
  </header>
);

Header.propTypes = {
  currentUser: PropTypes.shape({
    guest: PropTypes.bool.isRequired,
    admin: PropTypes.bool.isRequired,
    firstName: PropTypes.string.isRequired
  }).isRequired,
  slug: PropTypes.string.isRequired,
  accountName: PropTypes.string.isRequired
};

export default Header;
