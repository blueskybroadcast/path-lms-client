import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { addCourse } from '../../../actions/courses';
import { fetchUsers } from '../../../actions/users';
import { fetchGroups } from '../../../actions/groups';

import { categoriesSortedIdsSelector } from '../../../selectors/categoriesSelectors';
import { usersIdsSelector, usersDataSelector } from '../../../selectors/usersSelectors';
import {
  currentAccountSlugSelector, currentAccountFeaturesSelector
} from '../../../selectors/authSelectors';
import { groupsIdsSelector, groupsDataSelector } from '../../../selectors/groupsSelectors';

import { convertGroupsToSellableItems } from '../../../helpers/courses';

import AddCourse from './component';

const mapStateToProps = (state) => {
  const categories = categoriesSortedIdsSelector(state);
  const groupsIds = groupsIdsSelector(state);
  const groupsData = groupsDataSelector(state);
  const sellableItems = convertGroupsToSellableItems(groupsIds, groupsData);
  return {
    visibleCategories: categories.filter(cat => !cat.hidden),
    hiddenCategories: categories.filter(cat => cat.hidden),
    usersIds: usersIdsSelector(state),
    usersData: usersDataSelector(state),
    groupsIds,
    sellableItems,
    slug: currentAccountSlugSelector(state),
    startEndDateFeatureEnabled:
      currentAccountFeaturesSelector(state).indexOf('course_start_and_end_dates') > -1
  };
};

export default withRouter(
  connect(mapStateToProps, { addCourse, fetchUsers, fetchGroups })(AddCourse)
);
