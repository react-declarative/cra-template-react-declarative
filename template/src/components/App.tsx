import { observer } from "mobx-react";

import { Switch, Scaffold } from "react-declarative";

import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

import UserInfo from "./common/UserInfo";

import history from "../helpers/history";

import useLoader from "../hooks/useLoader";

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

const Fragment = () => <></>;

const App = observer(() => {
  const { loader, setLoader } = useLoader();
  const handleLoadStart = () => setLoader(true);
  const handleLoadEnd = () => setLoader(false);
  return (
    // TODO: <Scaffold payload={currentUser.id}
    //                 ^^^^^^^^^^^^^^^^^^^^^^^^
    <Scaffold
      dense
      loaderLine={loader}
      options={sidemenu}
      actions={scaffoldmenu}
      Loader={Loader}
      BeforeSearch={UserInfo}
      onOptionClick={(name) => history.push(name)}
    >
      <Switch
        Loader={Fragment}
        history={history}
        items={routes}
        onLoadStart={handleLoadStart}
        onLoadEnd={handleLoadEnd}
      />
    </Scaffold>
  );
});

export default App;
