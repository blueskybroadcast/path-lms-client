import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const requireAuth = (ChildComponent) => {
  class RequireAuth extends React.Component {
    render() {
      switch (this.props.auth) {
        case false:
          return <Redirect to="/" />
        case null:
          return <div>Loading...</div>
        default:
          return <ChildComponent {...this.props} />;
      }
    }
  }

  const mapStateToProps = ({ auth }) => ({
    auth
  });

  return connect(mapStateToProps)(RequireAuth);
};

export default requireAuth;
