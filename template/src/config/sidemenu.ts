import { IScaffold2Group } from "react-declarative";

import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheckOutlined";
import PublicIcon from "@mui/icons-material/Public";
import HomeIcon from "@mui/icons-material/Home";

export const sidemenu: IScaffold2Group[] = [
  {
    id: "example_pages",
    label: "Example Pages",
    icon: PublicIcon,
    children: [
      {
        label: "Dashboard",
        id: "dashboard",
        icon: HomeIcon,
      },
      {
        label: "Todo list",
        id: "todos",
        icon: PlaylistAddCheckIcon,
      },
    ],
  },
];

export default sidemenu;
