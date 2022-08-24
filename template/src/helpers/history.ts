import { createWindowHistory, FetchError } from "react-declarative";

export const history = createWindowHistory();

export const handleGlobalError = (error: any) => {
    console.warn('Error caught', { error })
    if (error instanceof FetchError) {
        if (error.response?.status === 401) {
            history.push('/unauthorized-page');
            return;
        }
    }
    history.push('/error-page');
};

// window.addEventListener('error', handleGlobalError);
// window.addEventListener('unhandledrejection', handleGlobalError);

export default history;
