import { connect } from 'react-redux';

import { loadingCategoriesSelector } from '../../../selectors/loadingSelectors';
import {
  categoriesSortedIdsSelector, categoriesDataSelector
} from '../../../selectors/categoriesSelectors';

import CategoriesList from './component';

const mapStateToProps = state => ({
  loading: loadingCategoriesSelector(state),
  categoriesSortedList: categoriesSortedIdsSelector(state),
  categoriesData: categoriesDataSelector(state)
});

export default connect(mapStateToProps)(CategoriesList);
