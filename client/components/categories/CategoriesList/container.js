import { connect } from 'react-redux';

import {
  categoriesSortedIdsSelector, categoriesDataSelector
} from '../../../selectors/categoriesSelectors';

import CategoriesList from './component';

const mapStateToProps = state => ({
  categoriesSortedList: categoriesSortedIdsSelector(state),
  categoriesData: categoriesDataSelector(state)
});

export default connect(mapStateToProps)(CategoriesList);
