import React from "react";
import { SidebarTrigger } from "./ui/sidebar";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { useLocation } from "react-router";
import ToggleTheme from "./toggle-theme";

const SiteHeader = () => {
  const { pathname } = useLocation();

  // Remove empty strings and build segment list
  const segments = pathname.split("/").filter(Boolean);

  // Format the segments (e.g., "sign-up" -> "Sign Up")
  const formattedSegments = segments.map(
    segment =>
      segment.charAt(0).toUpperCase() + segment.slice(1).replace(/[-_]/g, " ")
  );

  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1 cursor-pointer" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <div
          aria-label="Breadcrumb"
          className="text-sm font-medium flex items-center gap-2"
        >
          {segments.length === 0 ? (
            <span className="text-foreground">Home</span>
          ) : (
            formattedSegments.map((label, index) => {
              const isLast = index === formattedSegments.length - 1;

              return (
                <React.Fragment key={index}>
                  <span
                    className={
                      isLast ? "text-foreground" : "text-muted-foreground"
                    }
                  >
                    {label}
                  </span>
                  {!isLast && <span className="text-muted-foreground">/</span>}
                </React.Fragment>
              );
            })
          )}
        </div>
      </div>
      <div className="pr-2">
        <ToggleTheme />
      </div>
    </header>
  );
};

export default SiteHeader;
