import App from './App';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import CoursesPage from './pages/CoursesPage';

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
