import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Folder from "./components/Folder/Folder";
import { folderConfig } from "./components/Folder/folder.config";
import styles from "./components/Folder/Folder.module.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className={styles.folderContainer}>
      <Router>
        <Routes>
          <Route path="/" element={<Folder config={folderConfig} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
