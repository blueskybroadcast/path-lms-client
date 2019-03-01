import React from 'react';
import { connect } from 'react-redux';

import AddCourse from '../components/Courses/AddCourse';

import { fetchUsers } from '../actions/users';
import { fetchGroups } from '../actions/groups';

class AddCoursePage extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
    this.props.fetchGroups();
  }

  render() {
    return (
      <AddCourse />
    );
  }
}

export const loadData = (store) => {
  store.dispatch(fetchUsers());
  store.dispatch(fetchGroups());
};

export default {
  loadData,
  component: connect(null, { fetchUsers, fetchGroups })(AddCoursePage)
};
