# React Component Documentation

This repository contains various React components along with their documentation. Below is a list of all components available in this project. Click on any component name to jump to its documentation.

## [Live LINK🚀](https://react-machine-coding-sand.vercel.app) ✅

## Table of Contents

- [React Recursive Folder Component](#folder-component) ✅ [Live Preview 🚀](https://react-machine-coding-sand.vercel.app/folder)
- [TikTokTie Component](#tiktoktie-component) ✅ [Live Preview 🚀](https://react-machine-coding-sand.vercel.app/tiktok-tie)
- [OTP Component](#otp-component) ✅ [Live Preview 🚀](https://react-machine-coding-sand.vercel.app/otp)

- [Contributing](#contributing)

# React Recursive Folder Component

A React component that renders a folder and file structure similar to a file explorer. The folder structure is dynamically rendered based on a configuration file, and folders can be expanded or collapsed.

Features
Recursively renders folders and files from a given configuration.
Displays a "+" icon for collapsed folders and a "-" icon for expanded folders.
Allows for easy customization of folder and file structures using a configuration object.
Supports modern React with modular CSS styling.

# React Folder Structure Component

This project provides a React component that visualizes a folder structure similar to what you might see in a file explorer. The component can render both folders and files, allowing for an expandable and collapsible view of the directory.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- Recursive rendering of folders and files
- Expandable and collapsible folders
- Dynamic rendering based on configuration data

## Installation

To use this component in your React application, follow these steps:

1. **Clone the repository:**

git clone https://github.com/your-username/react-recursive-folder.git

cd react-recursive-folder

2. **Install dependencies:**

Ensure you have Node.js installed. Then run:

    npm install

3. **Start the development server:**

In the project directory, you can run:

     yarn start

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Usage

To use the `Folder` component in your application:

1.  Import the `Folder` component and the configuration data in your main application file (e.g., `App.tsx`):

```javascript
import React from "react";
import Folder from "./components/Folder/Folder";
import { folderConfig } from "./components/Folder/folder.config";
import styles from "./components/Folder/Folder.module.css";
function App() {
  return (
    <div div className={styles.folderContainer}>
      <Folder config={folderConfig} />
    </div>
  );
}

export default App;
```

2.  Ensure your `folder.config.ts` file contains the configuration data for your folder structure.

## Configuration

The folder structure is defined using a TypeScript interface `FolderConfigProps`. Here’s an example configuration:

```javascript
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
    type: "file",
    name: "README.md",
    children: [],
  },
];
```

### Customization

Styling: Modify Folder.module.css to customize the appearance of folders, files, and icons.

### Icons:

Expand/Collapse icons (+ and -) can be replaced with custom icons by editing the Folder.tsx file.
Behavior: Add additional features (e.g., file click handlers) by extending the Folder or FolderItem components.

### Folder Structure Visualization

The `Folder` component will render folders with a "+" icon when collapsed and a "-" icon when expanded. Files will be displayed without any icons.

## Folder Structure

Here's how your project directory should look:

```bash
/react-folder-structure
├── /public
│ └── index.html
├── /src
│ ├── /components
│ │ └── /Folder
│ │ ├── Folder.tsx
│ │ ├── folder.config.ts
│ │ └── Folder.module.css
│ ├── App.tsx
│ └── index.tsx
├── package.json
└── README.md
```

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Screenshots (if applicable)

<img width="604" alt="Screenshot 2025-01-27 at 2 02 54 PM" src="https://github.com/user-attachments/assets/73a205b4-831f-4339-9712-e8a6b7d4e6e2" />

## TikTokTie Component

### Overview

The **TikTokTie** component provides functionality related to TikTokToe-style features. (Provide a brief description of what this component does.)

### Features

- You can play the game with two people initally the x will play first.
- Once X win the game its should be print x winner and then you can reset the game.
- Else O win the game

### Installation

To use the TikTokTie component, follow these steps:

1. Import the `TikTokTie` component in your application:

I have imported inside my router file.

```javascript
<Route path="/ticTacToe" element={<TicTacToe />} />
```

Here is screenshot of tictactoe game

<img width="760" alt="Screenshot 2025-01-30 at 3 24 32 PM" src="https://github.com/user-attachments/assets/0675bf4f-e487-49ca-9f15-f137636b9e64" />

## OTP Component

### Overview

The **OTP Component** allows users to input a one-time password (OTP) with a specified length. It automatically moves focus between input fields as users type or delete characters.

### Props

- `length` (number): The number of input fields for the OTP.
- `onComplete` (function): A callback function that is called when the user completes entering the OTP.
- `seperator` (string, optional): A string that will be displayed between each input field.
- `inputClass` (string, optional): Custom CSS class for individual input fields.
- `inputContainerClass` (string, optional): Custom CSS class for the container holding all input fields.

### Installation

To use the OTP component, follow these steps:

1. Import the `OtpComponent` in your application:

2. Use the `OtpComponent` in your application:

```javascript
function App() {
  const handleOtpComplete = (otp) => {
    console.log("OTP entered:", otp);
  };
  return (
    <div>
      <OtpComponent length={6} onComplete={handleOtpComplete} />
    </div>
  );
}
```

### Example Usage

Here’s an example of how to use the OTP component with custom classes:

```javascript
<OtpComponent
  length={6}
  onComplete={(otp) => console.log("OTP:", otp)}
  seperator="-"
  inputClass="custom-input"
  inputContainerClass="custom-container"
/>
```

## Screenshots (if applicable)

<img width="608" alt="Screenshot 2025-01-27 at 4 40 18 PM" src="https://github.com/user-attachments/assets/eecff8b9-7f07-4881-b3bb-4d25c6d87ec3" />

<img width="534" alt="Screenshot 2025-01-27 at 4 40 31 PM" src="https://github.com/user-attachments/assets/2f5ca03c-3831-4954-b09e-c552f1117cb8" />

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
