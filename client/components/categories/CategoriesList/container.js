import { connect } from 'react-redux';

import {
  categoriesSortedListSelector, categoriesDataSelector
} from '../../../selectors/categoriesSelectors';

import CategoriesList from './component';

const mapStateToProps = state => ({
  categoriesSortedList: categoriesSortedListSelector(state),
  categoriesData: categoriesDataSelector(state)
});

export default connect(mapStateToProps)(CategoriesList);
