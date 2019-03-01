import { combineReducers } from 'redux';
import authReducer from './authReducer';
import categoriesReducer from './categoriesReducer';
import coursesReducer from './coursesReducer';
import usersReducer from './usersReducer';
import groupsReducer from './groupsReducer';
import adminsReducer from './stubs/adminsReducer';

export default combineReducers({
  auth: authReducer,
  categories: categoriesReducer,
  courses: coursesReducer,
  users: usersReducer,
  groups: groupsReducer,
  admins: adminsReducer
});
