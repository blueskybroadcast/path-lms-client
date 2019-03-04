import App from './App';
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
        ...CoursesPage,
        path: '/:account/courses'
      }, {
        ...CategoriesPage,
        path: '/:account/categories'
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
