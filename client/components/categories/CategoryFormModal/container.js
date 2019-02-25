import { connect } from 'react-redux';
import CategoryFormModal from './component';

import { categoriesSortedIdsSelector } from '../../../selectors/categoriesSelectors';

const mapStateToProps = state => ({
  categoriesSortedList: categoriesSortedIdsSelector(state)
});

export default connect(mapStateToProps)(CategoryFormModal);
