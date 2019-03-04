import { connect } from 'react-redux';

import AccountBanner from './component';

import { accountBannerSelector } from '../../selectors/coursesSelectors';

const mapStateToProps = (state) => {
  const { bannerUrl, bannerRedirectUrl, bannerAltText } = accountBannerSelector(state);
  return { bannerUrl, bannerRedirectUrl, bannerAltText };
};

export default connect(mapStateToProps)(AccountBanner);
