import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchCourses } from '../../../actions/courses';

import {
  currentAccountSlugSelector, currentUserIsAdmin, currentAccountFeaturesSelector
} from '../../../selectors/authSelectors';
import { categoriesDataSelector, categoriesIdsSelector } from '../../../selectors/categoriesSelectors';

import CoursesFilters from './component';

const mapStateToProps = state => ({
  isAdmin: currentUserIsAdmin(state),
  slug: currentAccountSlugSelector(state),
  currentAccountFeatures: currentAccountFeaturesSelector(state),
  categoriesData: categoriesDataSelector(state),
  categoriesIds: categoriesIdsSelector(state)
});

export default withRouter(
  connect(mapStateToProps, { fetchCourses })(CoursesFilters)
);
