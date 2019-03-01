import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { Link, withRouter } from 'react-router-dom';
import queryString from 'query-string';

import AccountBanner from '../components/AccountBanner';
import CoursesHeader from '../components/Courses/CoursesHeader';
import CoursesDescription from '../components/Courses/CoursesDescription';
import CoursesFilters from '../components/Courses/CoursesFilters';
import CoursesContent from '../components/Courses/CoursesContent';

import { fetchCourses } from '../actions/courses';
import { fetchCategories } from '../actions/categories';
import { currentAccountSlugSelector, currentUserIsAdmin } from '../selectors/authSelectors';

class CoursesPage extends React.Component {
  componentDidMount() {
    const { location } = this.props;
    this.props.fetchCourses(
      queryString.parse(location.search, { arrayFormat: 'bracket' })
    );
    this.props.fetchCategories();
  }

  render() {
    const { isAdmin, route, slug } = this.props;
    return (
      <div className="courses courses-index">
        <AccountBanner
          title="Blue Sky eLearn Path LMS"
          url="https://cdn.filestackcontent.com/3vaDv4XTXmKh3K5EWnZS/convert?cache=true&fit=scale&format=jpeg&h=220&quality=100&w=1200"
        />
        <section className="library">
          <CoursesHeader />
          <CoursesDescription isAdmin={isAdmin} />
          <CoursesFilters isAdmin={isAdmin} />
          <section className="library-content">
            <div className="admin-tools">
              <Link
                className="add-course"
                to={`/${slug}/courses/add`}
                onClick={this.handleShow}
              >
                Add New Course
              </Link>
              {renderRoutes(route.routes)}
            </div>
            <CoursesContent isAdmin={isAdmin} />
          </section>
        </section>
      </div>
    );
  }
}

CoursesPage.propTypes = {
  isAdmin: PropTypes.bool.isRequired,
  slug: PropTypes.string.isRequired,
  fetchCourses: PropTypes.func.isRequired,
  fetchCategories: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isAdmin: currentUserIsAdmin(state),
  slug: currentAccountSlugSelector(state)
});

export const loadData = (store) => {
  store.dispatch(fetchCourses());
  store.dispatch(fetchCategories());
};

export default {
  loadData,
  component: withRouter(
    connect(
      mapStateToProps,
      { fetchCourses, fetchCategories }
    )(CoursesPage)
  )
};
