import React from "react";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "./ui/sidebar";
import { ChevronRight, type LucideIcon } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { NavLink } from "react-router";

const NavMain = ({
  items,
}: {
  items: {
    title: string;
    url?: string;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}) => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {items.map(item => {
          const hasSubItems = item.items && item.items.length > 0;

          if (!hasSubItems) {
            return (
              <SidebarMenuItem key={item.title}>
                <NavLink
                  to={item.url || "#"}
                  className="block px-2 py-1 hover:bg-black/10 dark:hover:bg-white/10"
                >
                  <span>{item.title}</span>
                </NavLink>
              </SidebarMenuItem>
            );
          }

          return (
            <Collapsible
              key={item.title}
              asChild
              defaultOpen={item.isActive}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <div className="flex items-center px-2 py-1 cursor-default hover:bg-black/10 dark:hover:bg-white/10">
                    <span>{item.title}</span>
                    <ChevronRight className="size-4! ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {item.items?.map(subItem => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <NavLink
                          to={subItem.url}
                          className="block px-2 py-1 hover:bg-black/10 dark:hover:bg-white/10"
                        >
                          <span className="text-sm">{subItem.title}</span>
                        </NavLink>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
};

export default NavMain;
