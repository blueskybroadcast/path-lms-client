import { connect } from 'react-redux';

import CoursesContent from './component';
import { coursesIdsSelector, coursesDataSelector } from '../../../selectors/coursesSelectors';

const mapStateToProps = state => ({
  coursesIds: coursesIdsSelector(state),
  coursesData: coursesDataSelector(state)
});

export default connect(mapStateToProps)(CoursesContent);
