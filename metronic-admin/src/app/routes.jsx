import React from 'react';
import MainLayout from "@/layouts/main-layout/index.jsx";
import AuthLayout from "@/layouts/auth-layout/index.jsx";
import NotFoundPage from "@/pages/error/not-found-page/index.jsx";
import LoginPage from "@/pages/auth/login-page/index.jsx";
import HomePage from "@/pages/main/home-page/index.jsx";
import UsersPage from "@/pages/main/users-page/index.jsx";

import { createBrowserRouter } from 'react-router-dom'

export const routes = [
  {
    path: '/',
    element: <MainLayout/>,
    children: [
      {
        index: true,
        path: undefined,
        element: <HomePage/>,
        nodeRef: React.createRef(),
      },
      {
        index: false,
        path: "/users",
        element: <UsersPage/>,
        nodeRef: React.createRef(),
      },
    ]
  },
  {
    path: '/auth',
    element: <AuthLayout/>,
    children: [
      {
        index: false,
        path: "login",
        element: <LoginPage/>,
      },
    ]
  },
  {
    path: "*",
    element: <NotFoundPage/>
  }
];

const router = createBrowserRouter(routes);

export default router;
