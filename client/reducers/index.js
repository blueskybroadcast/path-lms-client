import { combineReducers } from 'redux';

import authReducer from './authReducer';
import loadingReducer from './loadingReducer';

import categoriesReducer from './categoriesReducer';
import coursesReducer from './coursesReducer';
import groupsReducer from './groupsReducer';
import usersReducer from './usersReducer';

import adminsReducer from './stubs/adminsReducer';

export default combineReducers({
  auth: authReducer,
  loading: loadingReducer,

  categories: categoriesReducer,
  courses: coursesReducer,
  groups: groupsReducer,
  users: usersReducer,

  admins: adminsReducer
});
