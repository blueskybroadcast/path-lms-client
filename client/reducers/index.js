import { combineReducers } from 'redux';
import authReducer from './authReducer';
import categoriesReducer from './categoriesReducer';
import coursesReducer from './coursesReducer';
import userReducer from './stubs/usersReducer';
import adminsReducer from './stubs/adminsReducer';

export default combineReducers({
  auth: authReducer,
  categories: categoriesReducer,
  courses: coursesReducer,
  users: userReducer,
  admins: adminsReducer
});
