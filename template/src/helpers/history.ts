import {
  createWindowHistory,
  createRouteParamsManager,
  createRouteItemManager,
  useRouteParams as useRouteParamsInternal,
  useRouteItem as useRouteItemInternal,
  FetchError,
} from "react-declarative";

import routes from "../config/routes";

export const history = createWindowHistory();

export const handleGlobalError = (error: any) => {
  console.warn("Error caught", { error });
  if (error instanceof FetchError) {
    if (error.response?.status === 401) {
      history.push("/unauthorized-page");
      return;
    }
  }
  history.push("/error-page");
};

export const getRouteParams = createRouteParamsManager(routes, history);
export const getRouteItem = createRouteItemManager(routes, history);

export const useRouteParams = () => useRouteParamsInternal(routes, history);
export const useRouteItem = () => useRouteItemInternal(routes, history);

// window.addEventListener('error', handleGlobalError);
// window.addEventListener('unhandledrejection', handleGlobalError);

export default history;
