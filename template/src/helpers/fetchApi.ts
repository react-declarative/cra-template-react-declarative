import { fetchApi as fetchApiInternal, createLsManager, createSsManager } from 'react-declarative'
import { CC_TRACE_HEADER, CC_SESSION_HEADER } from '../config/params';

import { v4 as uuid } from 'uuid';

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

export const fetchApi = async (input: RequestInfo | URL, init?: RequestInit) => {
    const sessionId = authStorageManager.getValue() || authSessionManager.getValue();
    return fetchApiInternal(input, {
        ...init,
        headers: {
            ...init?.headers,
            [CC_TRACE_HEADER]: uuid(),
            ...sessionId && {
                [CC_SESSION_HEADER]: sessionId,
            },
        }
    })
};

export default fetchApi;
