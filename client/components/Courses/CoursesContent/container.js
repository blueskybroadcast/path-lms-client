import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import CoursesContent from './component';

import { sortCourses } from '../../../actions/courses';

import { loadingCoursesSelector } from '../../../selectors/loadingSelectors';
import {
  currentAccountSlugSelector, currentAccountCurrencySelector, currentUserIsAdmin
} from '../../../selectors/authSelectors';
import { coursesIdsSelector, coursesDataSelector } from '../../../selectors/coursesSelectors';

const mapStateToProps = state => ({
  isAdmin: currentUserIsAdmin(state),
  loading: loadingCoursesSelector(state),
  coursesIds: coursesIdsSelector(state),
  coursesData: coursesDataSelector(state),
  slug: currentAccountSlugSelector(state),
  currency: currentAccountCurrencySelector(state)
});

export default withRouter(
  connect(mapStateToProps, { sortCourses })(CoursesContent)
);
