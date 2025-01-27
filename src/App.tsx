import "./App.css";
import ComponentPath from "./ComponentPath";
import Folder from "./components/Folder/Folder";
import { folderConfig } from "./components/Folder/folder.config";
import styles from "./components/Folder/Folder.module.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<ComponentPath />} />
          <Route
            path="/folder"
            element={
              <div className={styles.folderContainer}>
                <Folder config={folderConfig} className={styles.folder} />
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
