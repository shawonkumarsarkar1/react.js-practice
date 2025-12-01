import * as React from "react";

import { NavUser } from "~/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarRail,
} from "~/components/ui/sidebar";
import NavMenuItem from "./nav-menu-item";
import navItems from "~/routes/navItems";
import { Link } from "react-router";

const data = {
  user: {
    name: "Shawon Kumar Sarkar",
    email: "shawonkumarsarkar10@gmail.com",
    avatar: "/android-chrome-512x512.png",
  },
};

const AppSidebar = ({ ...props }: React.ComponentProps<typeof Sidebar>) => {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <Link to="/">
          <SidebarMenuButton size="lg">
            <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
              <img src="../android-chrome-512x512.png" alt="error" />
            </div>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium">React.js</span>
              <span className="truncate text-xs md:texts">Practice</span>
            </div>
          </SidebarMenuButton>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Practices</SidebarGroupLabel>
          <SidebarMenu>
            {navItems.map(item => (
              <NavMenuItem key={item.title} item={item} />
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
};

export default AppSidebar;
