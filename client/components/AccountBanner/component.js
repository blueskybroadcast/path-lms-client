import React from 'react';
import PropTypes from 'prop-types';

const AccountBanner = ({ title, url }) => (
  <section className="account-banner">
    <div className="wrapper">
      <img
        alt={title}
        src={url}
      />
    </div>
  </section>
);

AccountBanner.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default AccountBanner;
