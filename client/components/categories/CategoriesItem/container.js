import { connect } from 'react-redux';

import CategoriesItem from './component';

import { editCategory, deleteCategory } from '../../../actions/categories';

export default connect(null, { editCategory, deleteCategory })(CategoriesItem);
