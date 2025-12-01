import { House, KeyRound } from "lucide-react";

const navItems = [
  {
    title: "Home",
    url: "/",
    icon: House,
  },
  {
    title: "Auth",
    url: "#",
    icon: KeyRound,
    isActive: false,
    items: [
      {
        title: "Log in",
        url: "#",
      },
      {
        title: "Register",
        url: "#",
      },
    ],
  },
];

export default navItems;
