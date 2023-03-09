import { createRoot } from "react-dom/client";

import { ThemeProvider } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import { TssCacheProvider } from "tss-react";

import createCache from "@emotion/cache";

import { ModalProvider } from "react-declarative";
import { ErrorBoundary } from "react-declarative";
import { SnackbarProvider } from "notistack";
import { LoaderProvider } from "./hooks/useLoader";

import "./polyfills";

import App from "./components/App";

import worker from "./mocks";

import THEME_DARK from "./config/theme";

import history, { handleGlobalError } from "./helpers/history";

// if (isDevelopment()) {
worker.start();
// }

const container = document.getElementById("root")!;

const muiCache = createCache({
  key: "mui",
  prepend: true,
});

const tssCache = createCache({
  key: "tss",
});

const wrappedApp = (
  <ErrorBoundary history={history} onError={handleGlobalError}>
    <CacheProvider value={muiCache}>
      <TssCacheProvider value={tssCache}>
        <ThemeProvider theme={THEME_DARK}>
          <ModalProvider>
            <SnackbarProvider>
              <LoaderProvider>
                <App />
              </LoaderProvider>
            </SnackbarProvider>
          </ModalProvider>
        </ThemeProvider>
      </TssCacheProvider>
    </CacheProvider>
  </ErrorBoundary>
);

const root = createRoot(container);

root.render(wrappedApp);
