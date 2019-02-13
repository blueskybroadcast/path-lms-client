import React from 'react';
import PropTypes from 'prop-types';

const NotFoundPage = ({ staticContext = {} }) => {
  const context = staticContext;
  context.notFound = true;

  return (
    <h1>Oops, page not found.</h1>
  );
};

NotFoundPage.propTypes = {
  staticContext: PropTypes.shape({})
};

NotFoundPage.defaultProps = {
  staticContext: {}
};

export default {
  component: NotFoundPage
};
