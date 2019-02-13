import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { fetchUsers } from '../../actions';

class UsersListPage extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const { users } = this.props;
    return (
      <>
        <Helmet>
          <title>{`${users.length} Users Loaded`}</title>
          <meta property="og:title" content="Users App" />
        </Helmet>
        <div>
          Users List:
          <ul>
            {users.map(user => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ users }) => ({
  users
});

export const loadData = store => (
  store.dispatch(fetchUsers())
);

export default {
  loadData,
  component: connect(mapStateToProps, { fetchUsers })(UsersListPage)
};
