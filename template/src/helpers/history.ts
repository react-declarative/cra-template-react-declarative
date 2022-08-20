import { createWindowHistory, FetchError } from "react-declarative";

export const history = createWindowHistory();

const handleGlobalError = (error: any) => {
    if (error instanceof FetchError) {
        history.push('/error-page');
    }
};

window.addEventListener('error', handleGlobalError);
window.addEventListener('unhandledrejection', handleGlobalError);

export default history;
