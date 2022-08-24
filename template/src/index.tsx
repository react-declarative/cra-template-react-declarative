import ReactDOM from "react-dom";

import { ThemeProvider } from "@mui/styles";
import { ModalProvider } from "react-declarative";
import { ErrorBoundary } from "react-declarative";
import { SnackbarProvider } from "notistack";
import { LoaderProvider } from "./hooks/useLoader";

import "./polyfills";

import App from "./components/App";

import worker from "./mocks";

import THEME_DARK from "./config/theme";

import history, { handleGlobalError } from './helpers/history';

// if (isDevelopment()) {
worker.start();
// }

const wrappedApp = (
  <ErrorBoundary history={history} onError={handleGlobalError}>
    <ThemeProvider theme={THEME_DARK}>
      <ModalProvider>
        <SnackbarProvider>
          <LoaderProvider>
            <App />
          </LoaderProvider>
        </SnackbarProvider>
      </ModalProvider>
    </ThemeProvider>
  </ErrorBoundary>
);

ReactDOM.render(wrappedApp, document.getElementById("root"));
