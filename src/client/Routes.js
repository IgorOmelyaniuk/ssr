import React from 'react';

import App from './App';
import AdminsListPage from './pages/AdminsListPage';
import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';
import NotFoundPage from './pages/NotFoundPage';

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true,
      },
      {
        ...AdminsListPage,
        path: '/admins',
      },
      {
        ...UsersListPage,
        path: '/users',
      },
      {
        ...NotFoundPage
      }
    ]
  }
];
