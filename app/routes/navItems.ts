import { House, LogIn } from "lucide-react";

const navItems = [
  {
    title: "Home",
    url: "/",
    icon: House,
  },
  {
    title: "Auth",
    url: "#",
    icon: LogIn,
    isActive: false,
    items: [
      {
        title: "Log in",
        url: "auth/log-in",
      },
      {
        title: "Register",
        url: "auth/register",
      },
    ],
  },
];

export default navItems;
