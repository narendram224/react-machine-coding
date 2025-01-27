import { FolderConfigProps } from "./folder.config";
import FolderItem from "./FolderItem";
import styles from "./Folder.module.css";

const Folder = ({
  config,
  className,
}: {
  config: FolderConfigProps[];
  className?: string;
}) => {
  return (
    <div className={`${styles.folder} ${className}`}>
      {config.map((item) => {
        return <FolderItem key={item.name} item={item} />;
      })}
    </div>
  );
};

export default Folder;
