import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAdmins } from '../../actions';
import requireAuth from '../../components/hocs/requireAuth';

class AdminsListPage extends Component {
  componentDidMount() {
    this.props.fetchAdmins();
  }

  render() {
    const { admins } = this.props;
    return (
      <div>
        <h3>Protected list of admins</h3>
        <ul>
          {admins.map(admin => (
            <li key={admin.id}>{admin.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ admins }) => ({
  admins
});

export default {
  component: connect(mapStateToProps, { fetchAdmins })(
    requireAuth(AdminsListPage)
  ),
  loadData: ({ dispatch }) => dispatch(fetchAdmins())
};
