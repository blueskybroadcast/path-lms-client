import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import HeaderNavDropdown from './components/HeaderNavDropdown';

const Header = ({ auth }) => {
  const authButton = auth ? (
    <a href="/api/logout">Logout</a>
  ) : (
    <a href="/api/auth/google">Login</a>
  );

  return (
    <header className="account">
      <nav aria-expanded="false">
        <div className="pull-left logo">
          <div className="item" />
          <div className="item">
            <h1>
              <a className="home" title="Showroom" href="/showroom">
                <i className="icon icon-home" />
                &nbsp;Showroom
              </a>
            </h1>
          </div>
          <div className="item toggle-nav">
            <button
              aria-expanded="false"
              className="toggle-header-nav transparent"
              title="Toggle navigation menu"
              type="button"
            >
              <i className="icon icon-reorder" />
            </button>
          </div>
        </div>
        <div className="pull-left flexible">
          <HeaderNavDropdown />
          <div className="item">
            <a
              className="courses"
              title="Programs"
              href="/showroom/courses"
            >
              <i className="icon icon-course" />
              &nbsp;Programs
            </a>
          </div>
          <div className="item">
            <NavLink
              className="content-library"
              title="Video Go"
              to="/showroom/library"
            >
              <i className="icon icon-library" />
              &nbsp;Video Go
            </NavLink>
          </div>
          <div className="item">
            <a
              className="product-bundles"
              title="Product Bundles"
              href="/showroom/product_bundles"
            >
              <i className="icon icon-product-bundle" />
              &nbsp;Product Bundles
            </a>
          </div>
          <div className="item search">
            <a
              className="searches"
              title="Search"
              href="/showroom/searches"
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
              action="/showroom/searches"
              acceptCharset="UTF-8"
              method="post"
            >
              <input name="utf8" type="hidden" defaultValue="✓" />
              <input type="hidden" name="authenticity_token" defaultValue="hqQ9S/zT5lejZ/Ui5q6tAlnCQ38HHA8gSh8EZ/hszsxaUMjKZ1yMKiq6/cUvRlzw6N77nu37Nas4d6scc7dT1Q==" />
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
            <a title="Cart" href="/showroom/cart">
              <i className="icon icon-shopping-cart" />
              <span className="cart-text">&nbsp;Cart&nbsp;</span>
              <span className="filled" data-role="cart-total">0</span>
            </a>
          </div>
          <div className="item">
            <a data-role="sign-up" id="sign-up-link" href="/showroom/sign_up">
              <i className="icon icon-asterisk" />
              &nbsp;Sign Up
            </a>
          </div>
          <div className="item">
            <a data-role="login" href="/showroom/sign_in">
              <i className="icon icon-sign-in" />
              &nbsp;Sign In
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

const mapStateToProps = ({ auth }) => ({
  auth
});

export default connect(mapStateToProps)(Header);
