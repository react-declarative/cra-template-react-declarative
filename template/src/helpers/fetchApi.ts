import { fetchApi as fetchApiInternal, createLsManager } from 'react-declarative'
import { CC_TRACE_HEADER, CC_SESSION_HEADER } from '../config';

import { v4 as uuid } from 'uuid';

export const authManager = createLsManager<string>(CC_SESSION_HEADER)

export const fetchApi = async (input: RequestInfo | URL, init?: RequestInit) => {
    const sessionId = authManager.getValue();
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
