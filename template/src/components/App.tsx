import { useState } from "react";

import { Switch, Scaffold } from "react-declarative";

import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

import UserInfo from "./common/UserInfo";

import history from "../helpers/history";

import routes from "../config/routes";
import sidemenu from "../config/sidemenu";
import scaffoldmenu from "../config/scaffoldmenu";

const Loader = () => (
  <Box
    sx={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      height: "100vh",
      width: "100vw",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 9999,
      background: (theme) => theme.palette.background.paper,
    }}
  >
    <CircularProgress />
  </Box>
);

const App = () => {
  const [loading, setLoading] = useState(0);
  const handleLoadStart = () => setLoading((loading) => loading + 1);
  const handleLoadEnd = () => setLoading((loading) => loading - 1);
  return (
    <Scaffold
      loaderLine={!!loading}
      options={sidemenu}
      actions={scaffoldmenu}
      Loader={Loader}
      BeforeSearch={UserInfo}
      onOptionClick={(name) => history.push(name)}
    >
      <Switch
        Loader={Loader}
        history={history}
        items={routes}
        onLoadStart={handleLoadStart}
        onLoadEnd={handleLoadEnd}
      />
    </Scaffold>
  );
};

export default App;
