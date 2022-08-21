import { ISwitchItem } from 'react-declarative';

import DashboardPage from '../pages/DashboardPage';
import TodoListPage from '../pages/TodoListPage';
import TodoOnePage from '../pages/TodoOnePage';

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
  {
    path: '/todos/:id',
    element: TodoOnePage,
  },
];

export default routes;
