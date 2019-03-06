import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const requireAdminAuth = (ChildComponent) => {
  class requireAdminAuth extends React.Component {
    render() {
      switch (this.props.isAdmin) {
        case false:
          return <Redirect to="/" />
        case null:
          return null;
        default:
          return <ChildComponent {...this.props} />;
      }
    }
  }

  const mapStateToProps = ({ auth }) => ({
    isAdmin: auth.currentUser.attributes.admin || false
  });

  return connect(mapStateToProps)(requireAdminAuth);
};

export default requireAdminAuth;
