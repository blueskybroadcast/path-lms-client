import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { addCourse } from '../../../actions/courses';

import { categoriesSortedIdsSelector } from '../../../selectors/categoriesSelectors';
import { usersIdsSelector, usersDataSelector } from '../../../selectors/usersSelectors';
import { currentAccountSlugSelector } from '../../../selectors/authSelectors';

import AddCourse from './component';

const mapStateToProps = (state) => {
  const categories = categoriesSortedIdsSelector(state);
  return {
    visibleCategories: categories.filter(cat => !cat.hidden),
    hiddenCategories: categories.filter(cat => cat.hidden),
    usersIds: usersIdsSelector(state),
    usersData: usersDataSelector(state),
    slug: currentAccountSlugSelector(state)
  };
};

export default withRouter(connect(mapStateToProps, { addCourse })(AddCourse));
