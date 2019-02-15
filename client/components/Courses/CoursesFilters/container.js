import { connect } from 'react-redux';

import CoursesFilters from './component';

const mapStateToProps = ({ auth }) => ({
  isAdmin: auth.isAdmin
});

export default connect(mapStateToProps)(CoursesFilters);
