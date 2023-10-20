import { DocIcon } from "./icons/DocIcon";
import { HomeIcon } from "./icons/HomeIcon";
import { MediaIcon } from "./icons/MediaIcon";
import { ServerIcon } from "./icons/ServerIcon";
import { ContactIcon } from "./icons/ContactIcon";
import { SettingsIcon } from "./icons/SettingsIcon";
import { TerminalIcon } from "./icons/TerminalIcon";
import { RecycleBinIcon } from "./icons/RecycleBinIcon";
import React from "react";

export const data = [
  {
    title: "Dashboard",
    icon: <ServerIcon />,
    link: "/admin",
  },
  {
    title: "Providers",
    icon: <MediaIcon />,
    link: "/admin/providers",
  },
  {
    title: "Departments",
    icon: <TerminalIcon />,
    link: "/admin/departments",
  },
  {
    title: "Doctors",
    icon: <HomeIcon />,
    link: "/admin/doctors",
  },
];
