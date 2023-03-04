import { ISwitchItem } from 'react-declarative';

import DashboardPage from '../pages/DashboardPage';
import TodoListPage from '../pages/TodoListPage';
import TodoOnePage from '../pages/TodoOnePage';

import ErrorPage from '../pages/ErrorPage';

interface IRouteItem extends ISwitchItem {
  sideMenu: string;
}

export const routes: IRouteItem[] = [
  {
    path: '/',
    sideMenu: "root.example_pages.dashboard",
    redirect: '/dashboard'
  },
  {
    path: '/dashboard',
    sideMenu: "root.example_pages.dashboard",
    element: DashboardPage,
  },
  {
    path: '/todos',
    sideMenu: "root.example_pages.todos",
    element: TodoListPage,
  },
  {
    path: '/todos/:id',
    sideMenu: "root.example_pages.todos",
    element: TodoOnePage,
  },
  {
    path: '/error-page',
    sideMenu: "",
    element: ErrorPage,
  },
  {
    path: '/unauthorized-page',
    sideMenu: "",
    element: ErrorPage,
  }
];

export const sideMenuClickMap: Record<string, string> = {
  "root.example_pages.todos": "/todos",
  "root.example_pages.dashboard": "/dashboard",
};

export default routes;
