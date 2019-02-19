import { connect } from 'react-redux';
import CategoryFormModal from './component';

import { categoriesSortedListSelector } from '../../../selectors/categoriesSelectors';

const mapStateToProps = state => ({
  categoriesSortedList: categoriesSortedListSelector(state)
});

export default connect(mapStateToProps)(CategoryFormModal);
