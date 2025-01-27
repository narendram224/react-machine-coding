export interface FolderConfigProps {
  type: "folder" | "file";
  name: string;
  children: FolderConfigProps[];
}

export const folderConfig: FolderConfigProps[] = [
  {
    type: "folder",
    name: "node_modules",
    children: [
      {
        type: "folder",
        name: "@types",
        children: [
          {
            type: "file",
            name: "react.d.ts",
            children: [],
          },
        ],
      },
      {
        type: "folder",
        name: "react",
        children: [
          {
            type: "file",
            name: "index.d.ts",
            children: [],
          },
        ],
      },
    ],
  },
  {
    type: "folder",
    name: "src",
    children: [
      {
        type: "file",
        name: "index.tsx",
        children: [],
      },
      {
        type: "file",
        name: "App.tsx",
        children: [],
      },
      {
        type: "file",
        name: "App.test.tsx",
        children: [],
      },
      {
        type: "file",
        name: "App.css",
        children: [],
      },
      {
        type: "file",
        name: "logo.svg",
        children: [],
      },

      {
        type: "folder",
        name: "components",
        children: [
          {
            type: "folder",
            name: "Folder",
            children: [
              {
                type: "file",
                name: "Folder.tsx",
                children: [],
              },
              {
                type: "file",
                name: "Folder.test.tsx",
                children: [],
              },
              {
                type: "file",
                name: "Folder.css",
                children: [],
              },
              {
                type: "file",
                name: "Folder.d.ts",
                children: [],
              },
            ],
          },
          {
            type: "folder",
            name: "Input",
            children: [
              {
                type: "file",
                name: "Input.tsx",
                children: [],
              },
            ],
          },
          {
            type: "folder",
            name: "Button",
            children: [
              {
                type: "file",
                name: "Button.tsx",
                children: [],
              },
            ],
          },
          {
            type: "folder",
            name: "Select",
            children: [
              {
                type: "file",
                name: "Select.tsx",
                children: [],
              },
            ],
          },
          {
            type: "folder",
            name: "Switch",
            children: [
              {
                type: "file",
                name: "Switch.tsx",
                children: [],
              },
            ],
          },
          {
            type: "folder",
            name: "Radio",
            children: [
              {
                type: "file",
                name: "Radio.tsx",
                children: [],
              },
            ],
          },
          {
            type: "folder",
            name: "Checkbox",
            children: [
              {
                type: "file",
                name: "Checkbox.tsx",
                children: [],
              },
            ],
          },
          {
            type: "folder",
            name: "Tabs",
            children: [
              {
                type: "file",
                name: "Tabs.tsx",
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    type: "file",
    name: "package.json",
    children: [],
  },
  {
    type: "file",
    name: "tsconfig.json",
    children: [],
  },
  {
    type: "file",
    name: "vite.config.ts",
    children: [],
  },
  {
    type: "file",
    name: "README.md",
    children: [],
  },
];
