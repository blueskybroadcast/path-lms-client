import { combineReducers } from 'redux';
import authReducer from './authReducer';
import userReducer from './stubs/usersReducer';
import adminsReducer from './stubs/adminsReducer';

export default combineReducers({
  auth: authReducer,
  users: userReducer,
  admins: adminsReducer
});
