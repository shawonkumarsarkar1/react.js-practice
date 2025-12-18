import { BadgeDollarSign } from "lucide-react";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: BadgeDollarSign,
    },
    {
      title: "Lifecycle",
      url: "#",
      icon: BadgeDollarSign,
    },
    {
      title: "Analytics",
      url: "#",
      icon: BadgeDollarSign,
    },
    {
      title: "Projects",
      url: "#",
      icon: BadgeDollarSign,
    },
    {
      title: "Team",
      url: "#",
      icon: BadgeDollarSign,
    },
  ],
  navClouds: [
    {
      title: "Capture",
      icon: BadgeDollarSign,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Proposal",
      icon: BadgeDollarSign,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Prompts",
      icon: BadgeDollarSign,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: BadgeDollarSign,
    },
    {
      title: "Get Help",
      url: "#",
      icon: BadgeDollarSign,
    },
    {
      title: "Search",
      url: "#",
      icon: BadgeDollarSign,
    },
  ],
  documents: [
    {
      name: "Data Library",
      url: "#",
      icon: BadgeDollarSign,
    },
    {
      name: "Reports",
      url: "#",
      icon: BadgeDollarSign,
    },
    {
      name: "Word Assistant",
      url: "#",
      icon: BadgeDollarSign,
    },
  ],
};

export default data;
