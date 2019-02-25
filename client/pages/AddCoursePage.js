import React from 'react';
import { connect } from 'react-redux';

import AddCourse from '../components/Courses/AddCourse';

import { fetchUsers } from '../actions/users';

class AddCoursePage extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    return (
      <AddCourse />
    );
  }
}

export const loadData = store => (
  store.dispatch(fetchUsers())
);

export default {
  loadData,
  component: connect(null, { fetchUsers })(AddCoursePage)
};
