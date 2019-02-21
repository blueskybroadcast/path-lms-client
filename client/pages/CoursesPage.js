import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AccountBanner from '../components/AccountBanner';
import CoursesHeader from '../components/Courses/CoursesHeader';
import CoursesDescription from '../components/Courses/CoursesDescription';
import CoursesFilters from '../components/Courses/CoursesFilters';
import CoursesContent from '../components/Courses/CoursesContent';

import { fetchCourses } from '../actions';
import { currentUserIsAdmin } from '../selectors/authSelectors';

class CoursesPage extends React.Component {
  componentDidMount() {
    this.props.fetchCourses();
  }

  render() {
    const { isAdmin } = this.props;
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
          <CoursesContent isAdmin={isAdmin} />
        </section>
      </div>
    );
  }
}

CoursesPage.propTypes = {
  isAdmin: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isAdmin: currentUserIsAdmin(state)
});

export const loadData = store => (
  store.dispatch(fetchCourses())
);

export default {
  loadData,
  component: connect(mapStateToProps, { fetchCourses })(CoursesPage)
};
