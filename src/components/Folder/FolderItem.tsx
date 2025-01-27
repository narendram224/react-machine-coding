import React, { useState } from "react";
import { FolderConfigProps } from "./folder.config";
import Folder from "./Folder";
import styles from "./Folder.module.css";

const FolderItem = ({ item }: { item: FolderConfigProps }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const { type, name, children } = item;
  const isFolder = type === "folder";
  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className={styles.folderItem}>
      <p
        onClick={handleExpand}
        className={isExpanded ? `${styles.isActive}` : ""}
      >
        {name}
        {isFolder ? <span>{isExpanded ? "-" : "+"}</span> : null}
      </p>
      {isFolder && isExpanded && children.length > 0 ? (
        <Folder config={children} />
      ) : null}
    </div>
  );
};

export default FolderItem;
