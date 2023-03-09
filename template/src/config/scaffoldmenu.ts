import { IScaffold2Action } from "react-declarative";

import LogoutIcon from "@mui/icons-material/LogoutOutlined";

export const scaffoldactions: IScaffold2Action[] = [
  {
    action: "logout-action",
    icon: LogoutIcon,
    label: "Logout",
  },
];

export default scaffoldactions;
