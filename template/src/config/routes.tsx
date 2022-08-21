import { ISwitchItem } from 'react-declarative';

import DashboardPage from '../pages/DashboardPage';
import TodoListPage from '../pages/TodoListPage';

export const routes: ISwitchItem[] = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/dashboard',
    element: DashboardPage,
  },
  {
    path: '/todos',
    element: TodoListPage,
  },
];

export default routes;
