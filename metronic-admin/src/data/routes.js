export const routes = [
  {
    heading: "info.system",
    id: "pussy",
    children: [
      {
        id: "/",
        name: "pages.main",
        icon: "memory",
        href: "/",
        permissions: ["super-admin"],
      },
      {
        id: "group-users",
        name: "pages.users",
        icon: "group",
        href: null,
        permissions: ["super-admin"],
        children: [
          {
            id: "/users",
            name: "info.list",
            href: "/users",
            permissions: ["super-admin"],
          },
        ],
      },
    ]
  },
]