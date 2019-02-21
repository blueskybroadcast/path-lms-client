import { connect } from 'react-redux';

import {
  currentUserAttributesSelector, currentAccountSlugSelector, currentAccountNameSelector
} from '../../selectors/authSelectors';

import Header from './component';

const mapStateToProps = state => ({
  currentUser: currentUserAttributesSelector(state),
  slug: currentAccountSlugSelector(state),
  accountName: currentAccountNameSelector(state)
});

export default connect(mapStateToProps)(Header);
