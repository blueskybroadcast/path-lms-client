import App from './App';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import CoursesPage from './pages/CoursesPage';
import CategoriesPage from './pages/CategoriesPage';

import UsersListPage from './pages/stubs/UsersListPage';
import AdminsListPage from './pages/stubs/AdminsListPage';

const routes = [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true
      }, {
        ...CoursesPage,
        path: '/showroom/courses'
      }, {
        ...CategoriesPage,
        path: '/showroom/categories'
      }, {
        ...UsersListPage,
        path: '/users'
      }, {
        ...AdminsListPage,
        path: '/admins'
      }, {
        ...NotFoundPage
      }
    ]
  }
];

export default routes;
