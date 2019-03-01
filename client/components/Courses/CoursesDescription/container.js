import { connect } from 'react-redux';

import CoursesDescription from './component';

import { editCourseDescription } from '../../../actions/courses';

import { coursesDescriptionTextSelector } from '../../../selectors/coursesSelectors';

const mapStateToProps = state => ({
  description: coursesDescriptionTextSelector(state)
});

export default connect(mapStateToProps, { editCourseDescription })(CoursesDescription);
