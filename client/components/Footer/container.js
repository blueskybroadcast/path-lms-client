import { connect } from 'react-redux';

import { currentAccountSlugSelector } from '../../selectors/authSelectors';

import Footer from './component';

const mapStateToProps = state => ({
  slug: currentAccountSlugSelector(state)
});

export default connect(mapStateToProps)(Footer);
