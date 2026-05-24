import React, { lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import { AuthPaths } from '../types';
import { Layout } from '../modules';
const Onboarding = lazy(() => import('../modules/Onboarding'));
const Dashboard = lazy(() => import('../modules/Dashboard'));

export const routes: RouteObject[] = [
  {
    path: AuthPaths.ROOT,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: AuthPaths.ONBOARDING,
        element: <Onboarding />,
      },
    ],
  },
];
