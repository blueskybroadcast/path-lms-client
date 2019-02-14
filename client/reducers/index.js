import { combineReducers } from 'redux';
import authReducer from './authReducer';
import coursesReducer from './coursesReducer';
import userReducer from './stubs/usersReducer';
import adminsReducer from './stubs/adminsReducer';

export default combineReducers({
  auth: authReducer,
  courses: coursesReducer,
  users: userReducer,
  admins: adminsReducer
});
