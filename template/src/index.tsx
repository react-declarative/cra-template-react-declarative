import ReactDOM from "react-dom";

import App from './components/App';

import worker from './mocks';

// if (isDevelopment()) {
    worker.start();
// }

const wrappedApp = (
    <App />
);

ReactDOM.render(wrappedApp, document.getElementById("root"));
