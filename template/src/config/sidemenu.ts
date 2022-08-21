import { IMenuGroup } from "react-declarative";

import PublicIcon from "@mui/icons-material/Public";
import HomeIcon from "@mui/icons-material/Home";

export const sidemenu: IMenuGroup[] = [
    {
        label: "Example Pages",
        icon: PublicIcon,
        options: [
            {
                label: "Dashboard",
                name: '/dashboard-page',
                icon: HomeIcon,
            },
        ]
    },
];

export default sidemenu;
