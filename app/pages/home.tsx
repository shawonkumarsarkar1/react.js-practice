import React from "react";
import type { Route } from "../+types/root";
import { SidebarInset, SidebarProvider } from "~/components/ui/sidebar";
import AppSidebar from "~/components/app-sidebar";
import SiteHeader from "~/components/site-header";

export const meta = ({}: Route.MetaArgs) => {
  return [
    { title: "React.js Practice | Home" },
    {
      name: "description",
      content: "This is the home page of react.js practice.",
    },
  ];
};

const Home = () => {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2 px-4 py-2">
            page content
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Home;
