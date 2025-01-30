import "./App.css";
import ComponentPath from "./ComponentPath";
import Folder from "./components/Folder/Folder";
import { folderConfig } from "./components/Folder/folder.config";
import styles from "./components/Folder/Folder.module.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import OtpComponent from "./components/Otp/Otp";
import TicTacToe from "./components/ticTac/TicTac";

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
          <Route
            path="/otp"
            element={
              <OtpComponent
                length={5}
                onComplete={(otp: string) => {
                  console.log("[OTP]", otp);
                }}
                seperator={"-"}
              />
            }
          />
          <Route path="/ticTacToe" element={<TicTacToe />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
