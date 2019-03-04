import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

import AccountBanner from '../components/AccountBanner';
import CoursesHeader from '../components/Courses/CoursesHeader';
import CoursesDescription from '../components/Courses/CoursesDescription';
import CoursesFilters from '../components/Courses/CoursesFilters';
import AddCourse from '../components/Courses/AddCourse';
import CoursesContent from '../components/Courses/CoursesContent';

import { fetchCourses } from '../actions/courses';
import { fetchCategories } from '../actions/categories';
import { currentUserIsAdmin } from '../selectors/authSelectors';

class CoursesPage extends React.Component {
  state = { show: false }

  componentDidMount() {
    const { location } = this.props;
    this.props.fetchCourses(
      queryString.parse(location.search, { arrayFormat: 'bracket' })
    );
    this.props.fetchCategories();
  }

  handleShow = () => this.setState({ show: true })

  handleClose = () => this.setState({ show: false })

  render() {
    const { isAdmin, route } = this.props;
    const { show } = this.state;

    return (
      <div className="courses courses-index">
        <AccountBanner />
        <section className="library">
          <CoursesHeader />
          <CoursesDescription isAdmin={isAdmin} />
          <CoursesFilters isAdmin={isAdmin} />
          <section className="library-content">
            <div className="admin-tools">
              <a
                className="add-course cursor-pointer"
                onClick={this.handleShow}
              >
                Add New Course
              </a>
              <AddCourse
                show={show}
                handleClose={this.handleClose}
              />
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
  fetchCourses: PropTypes.func.isRequired,
  fetchCategories: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isAdmin: currentUserIsAdmin(state)
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
