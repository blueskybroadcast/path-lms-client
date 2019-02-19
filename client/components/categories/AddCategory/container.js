import { connect } from 'react-redux';

import AddCategory from './component';

import { addCategory } from '../../../actions/categories';

export default connect(null, { addCategory })(AddCategory);
