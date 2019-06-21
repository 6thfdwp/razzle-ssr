import React from 'react';
// import { Route, Switch } from 'react-router-dom';
// import { asyncComponent } from '@jaredpalmer/after';

import DashPage from './DashPage';
import MyBasketPage from './MyBasketPage';
export default [
  {
    path: '/admin',
    exact: true,
    component: DashPage
  },
  {
    path: '/admin/mybasket',
    component: MyBasketPage
  }
];

// export default [
//   {
//     path: '/admin',
//     exact: true,
//     component: asyncComponent({
//       loader: () => import('./DashPage'),
//       Placeholder: () => <div>...LOADING...</div>
//     })
//   },
//   {
//     path: '/admin/mybasket',
//     component: asyncComponent({
//       loader: () => import('./MyBasketPage'),
//       Placeholder: () => <div>...LOADING...</div>
//     })
//   }
// ];
