import { IMenuGroup } from "react-declarative";

import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheckOutlined";
import PublicIcon from "@mui/icons-material/Public";
import HomeIcon from "@mui/icons-material/Home";

export const sidemenu: IMenuGroup[] = [
    {
        label: "Example Pages",
        icon: PublicIcon,
        lifted: true,
        options: [
            {
                label: "Dashboard",
                name: '/dashboard',
                icon: HomeIcon,
            },
            {
                label: "Todo list",
                name: '/todos',
                icon: PlaylistAddCheckIcon,
            },
        ]
    },
];

export default sidemenu;
