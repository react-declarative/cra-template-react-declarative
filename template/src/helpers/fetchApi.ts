import {
  fetchApi as fetchApiInternal,
  createLsManager,
  createSsManager,
} from "react-declarative";
import { CC_TRACE_HEADER, CC_SESSION_HEADER } from "../config/params";

import { handleGlobalError } from "./history";

import { v4 as uuid } from "uuid";

const authStorageManager = createLsManager<string>(CC_SESSION_HEADER);
const authSessionManager = createSsManager<string>(CC_SESSION_HEADER);

export const login = (sessionId: string, keepSignIn = true) => {
  logout();
  if (keepSignIn) {
    authStorageManager.setValue(sessionId);
  } else {
    authSessionManager.setValue(sessionId);
  }
};

export const logout = () => {
  authStorageManager.setValue("");
  authSessionManager.setValue("");
};

export const fetchApi = async <T = any>(
  input: RequestInfo | URL,
  init?: RequestInit
) => {
  const sessionId =
    authStorageManager.getValue() || authSessionManager.getValue();
  try {
    return await fetchApiInternal<T>(input, {
      ...init,
      headers: {
        ...init?.headers,
        [CC_TRACE_HEADER]: uuid(),
        ...(sessionId && {
          [CC_SESSION_HEADER]: sessionId,
        }),
      },
    });
  } catch (error: any) {
    handleGlobalError(error);
    throw error;
  }
};

export default fetchApi;
