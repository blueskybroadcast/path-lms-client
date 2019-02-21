import { connect } from 'react-redux';

import { currentAccountSlugSelector, currentUserIsAdmin } from '../../../selectors/authSelectors';

import CoursesFilters from './component';

const mapStateToProps = state => ({
  isAdmin: currentUserIsAdmin(state),
  slug: currentAccountSlugSelector(state)
});

export default connect(mapStateToProps)(CoursesFilters);
