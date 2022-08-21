import ReactDOM from "react-dom";

import { ThemeProvider } from "@mui/styles";
import { ModalProvider } from "react-declarative";
import { SnackbarProvider } from "notistack";

import "./polyfills";

import App from "./components/App";

import worker from "./mocks";

import THEME_DARK from "./theme";

// if (isDevelopment()) {
worker.start();
// }

const wrappedApp = (
  <ThemeProvider theme={THEME_DARK}>
    <ModalProvider>
      <SnackbarProvider>
        <App />
      </SnackbarProvider>
    </ModalProvider>
  </ThemeProvider>
);
 
ReactDOM.render(wrappedApp, document.getElementById("root"));
