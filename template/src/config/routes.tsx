import { ISwitchItem } from "react-declarative";

import DashboardPage from "../pages/DashboardPage";
import TodoListPage from "../pages/TodoListPage";
import TodoOnePage from "../pages/TodoOnePage";
import TodoCardPage from "../pages/TodoCardPage";
import TodoRecordPage from "../pages/TodoRecordPage";

import ErrorPage from "../pages/ErrorPage";

interface IRouteItem extends ISwitchItem {
  sideMenu: string;
}

export const routes: IRouteItem[] = [
  {
    path: "/",
    sideMenu: "root.example_pages.dashboard",
    redirect: "/dashboard",
  },
  {
    path: "/dashboard",
    sideMenu: "root.example_pages.dashboard",
    element: DashboardPage,
  },
  {
    path: "/todos_list",
    sideMenu: "root.example_pages.todos_list",
    element: TodoListPage,
  },
  {
    path: "/todos_list/:id",
    sideMenu: "root.example_pages.todos_list",
    element: TodoOnePage,
  },
  {
    path: "/todos_card",
    sideMenu: "root.example_pages.todos_card",
    element: TodoCardPage,
  },
  {
    path: "/todos_card/:id",
    sideMenu: "root.example_pages.todos_card",
    element: TodoRecordPage,
  },
  {
    path: "/error-page",
    sideMenu: "",
    element: ErrorPage,
  },
  {
    path: "/unauthorized-page",
    sideMenu: "",
    element: ErrorPage,
  },
];

export const sideMenuClickMap: Record<string, string> = {
  "root.example_pages.todos_list": "/todos_list",
  "root.example_pages.todos_card": "/todos_card",
  "root.example_pages.dashboard": "/dashboard",
};

export default routes;
