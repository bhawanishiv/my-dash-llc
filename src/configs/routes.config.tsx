import { Navigate, RouteObject } from 'react-router-dom'
import React from 'react'

import CreateAccount from '../routes/CreateAccount/CreateAccount'
import Home from '../routes/Home'

const routes: RouteObject[] = [
  {
    path: '/',
    children: [
      {
        index: true,
        element: <Navigate to='/create-account' />,
      },
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/create-account',
        element: <CreateAccount />,
      },
    ],
  },
]

export default routes
