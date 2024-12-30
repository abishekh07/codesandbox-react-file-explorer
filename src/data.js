export const fileTreeData = [
  {
    name: "src",
    type: "folder",
    icon: "📁",
    children: [
      {
        name: "index.ts",
        type: "file",
        icon: "🟦", // TypeScript file
      },
      {
        name: "app",
        type: "folder",
        icon: "📁",
        children: [
          {
            name: "components",
            type: "folder",
            icon: "📁",
            children: [
              {
                name: "Header.tsx",
                type: "file",
                icon: "🟦", // TypeScript JSX file
              },
              {
                name: "Footer.tsx",
                type: "file",
                icon: "🟦", // TypeScript JSX file
              },
              {
                name: "Sidebar",
                type: "folder",
                icon: "📁",
                children: [
                  {
                    name: "SidebarItem.tsx",
                    type: "file",
                    icon: "🟦", // TypeScript JSX file
                  },
                  {
                    name: "SidebarMenu.tsx",
                    type: "file",
                    icon: "🟦", // TypeScript JSX file
                  },
                ],
              },
            ],
          },
          {
            name: "app.tsx",
            type: "file",
            icon: "🟦", // TypeScript JSX file
          },
        ],
      },
      {
        name: "styles",
        type: "folder",
        icon: "📁",
        children: [
          {
            name: "global.css",
            type: "file",
            icon: "🎨", // CSS file
          },
          {
            name: "theme.css",
            type: "file",
            icon: "🎨", // CSS file
          },
          {
            name: "modules",
            type: "folder",
            icon: "📁",
            children: [
              {
                name: "buttons.css",
                type: "file",
                icon: "🎨", // CSS file
              },
              {
                name: "layout.css",
                type: "file",
                icon: "🎨", // CSS file
              },
            ],
          },
        ],
      },
      {
        name: "utils",
        type: "folder",
        icon: "📁",
        children: [
          {
            name: "utils.ts",
            type: "file",
            icon: "🟦", // TypeScript file
          },
          {
            name: "validators",
            type: "folder",
            icon: "📁",
            children: [
              {
                name: "formValidator.ts",
                type: "file",
                icon: "🟦", // TypeScript file
              },
              {
                name: "authValidator.ts",
                type: "file",
                icon: "🟦", // TypeScript file
              },
            ],
          },
        ],
      },
      {
        name: "types",
        type: "folder",
        icon: "📁",
        children: [
          {
            name: "global.d.ts",
            type: "file",
            icon: "📜", // TypeScript definition file
          },
          {
            name: "user.d.ts",
            type: "file",
            icon: "📜", // TypeScript definition file
          },
        ],
      },
    ],
  },
  {
    name: "public",
    type: "folder",
    icon: "📁",
    children: [
      {
        name: "index.html",
        type: "file",
        icon: "🌐", // HTML file
      },
      {
        name: "favicon.ico",
        type: "file",
        icon: "📷", // Icon file
      },
      {
        name: "assets",
        type: "folder",
        icon: "📁",
        children: [
          {
            name: "images",
            type: "folder",
            icon: "🖼️", // Images folder
            children: [
              {
                name: "logo.png",
                type: "file",
                icon: "🖼️", // PNG image
              },
              {
                name: "background.jpg",
                type: "file",
                icon: "🖼️", // JPG image
              },
            ],
          },
          {
            name: "fonts",
            type: "folder",
            icon: "📁",
            children: [
              {
                name: "Roboto-Regular.ttf",
                type: "file",
                icon: "🔤", // Font file
              },
              {
                name: "Roboto-Bold.ttf",
                type: "file",
                icon: "🔤", // Font file
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "README.md",
    type: "file",
    icon: "📘", // Markdown file
  },
  {
    name: ".gitignore",
    type: "file",
    icon: "🚫", // Git ignore file
  },
  {
    name: "package.json",
    type: "file",
    icon: "📦", // JSON package file
  },
  {
    name: "tsconfig.json",
    type: "file",
    icon: "🛠️", // Configuration file
  },
];
