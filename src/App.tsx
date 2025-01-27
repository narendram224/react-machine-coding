import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Folder from "./components/Folder/Folder";
import { folderConfig } from "./components/Folder/folder.config";
import styles from "./components/Folder/Folder.module.css";

function App() {
  return (
    <div className={styles.folderContainer}>
      <Folder config={folderConfig} />
    </div>
  );
}

export default App;
