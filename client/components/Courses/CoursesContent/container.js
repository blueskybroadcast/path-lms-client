import { connect } from 'react-redux';

import CoursesContent from './component';

import {
  currentAccountSlugSelector, currentAccountCurrencySelector
} from '../../../selectors/authSelectors';
import { coursesIdsSelector, coursesDataSelector } from '../../../selectors/coursesSelectors';

const mapStateToProps = state => ({
  coursesIds: coursesIdsSelector(state),
  coursesData: coursesDataSelector(state),
  slug: currentAccountSlugSelector(state),
  currency: currentAccountCurrencySelector(state)
});

export default connect(mapStateToProps)(CoursesContent);
