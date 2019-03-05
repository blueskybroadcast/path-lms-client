import { connect } from 'react-redux';
import CategoryFormModal from './component';

import { addingNewCategorySelector } from '../../../selectors/loadingSelectors';
import { categoriesSortedIdsSelector } from '../../../selectors/categoriesSelectors';

const mapStateToProps = state => ({
  submitting: addingNewCategorySelector(state),
  categoriesSortedList: categoriesSortedIdsSelector(state)
});

export default connect(mapStateToProps)(CategoryFormModal);
