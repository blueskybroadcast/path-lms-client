import React from 'react';
import PropTypes from 'prop-types';

const AccountBanner = ({ bannerUrl, bannerRedirectUrl, bannerAltText }) => {
  if (bannerUrl) {
    return (
      <section className="account-banner">
        <div className="wrapper">
          <a
            href={bannerRedirectUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt={bannerAltText}
              src={bannerUrl}
            />
          </a>
        </div>
      </section>
    );
  }
  return null;
};

AccountBanner.propTypes = {
  bannerUrl: PropTypes.string,
  bannerRedirectUrl: PropTypes.string,
  bannerAltText: PropTypes.string
};

AccountBanner.defaultProps = {
  bannerUrl: null,
  bannerRedirectUrl: null,
  bannerAltText: null
};

export default AccountBanner;
