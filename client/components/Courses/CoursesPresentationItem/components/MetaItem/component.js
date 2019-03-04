import React from 'react';
import PropTypes from 'prop-types';

const MetaItem = ({ count, icon }) => (
  <li>
    <i className={`icon icon-${icon}`} />
    <span>{count}</span>
  </li>
);

MetaItem.propTypes = {
  count: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired
};

export default MetaItem;
