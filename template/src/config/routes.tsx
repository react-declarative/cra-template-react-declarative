import { ISwitchItem } from 'react-declarative';

import DashboardPage from '../pages/DashboardPage';

export const routes: ISwitchItem[] = [
  {
    path: '/',
    redirect: '/dashboard-page'
  },
  {
    path: '/dashboard-page',
    element: DashboardPage,
  },
];

export default routes;
