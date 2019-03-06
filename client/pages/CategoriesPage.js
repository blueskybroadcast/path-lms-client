import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import requireAdminAuth from '../components/hocs/requireAdminAuth';
import AddCategory from '../components/categories/AddCategory';
import CategoriesList from '../components/categories/CategoriesList';
import { fetchCategories } from '../actions/categories';

class CategoriesPage extends React.Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        account: PropTypes.string.isRequired
      })
    }).isRequired
  }

  componentDidMount() {
    this.props.fetchCategories();
    document.querySelector('body').classList.add('categories-index');
  }

  componentWillUnmount() {
    document.querySelector('body').classList.remove('categories-index');
  }

  render() {
    const { match: { params: { account } } } = this.props;

    return (
      <div className="categories categories-index">
        <section className="course-categories">
          <header className="admin" id="main-container-header">
            <Link
              to={`/${account}/courses`}
              className="back"
            >
              <i className="icon icon-reply" />
            </Link>
            <hgroup>
              <h2>Categories</h2>
            </hgroup>
            <div className="header-right">
              <AddCategory />
            </div>
          </header>
          <CategoriesList />
        </section>
      </div>
    );
  }
}

export const loadData = store => (
  store.dispatch(fetchCategories())
);

export default {
  loadData,
  component: connect(null, { fetchCategories })(requireAdminAuth(CategoriesPage))
};
