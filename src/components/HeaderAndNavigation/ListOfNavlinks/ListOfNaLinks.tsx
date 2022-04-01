import styles from "./ListOfNavLinks.module.css";

const ListOfNavLinks: React.FC = ({ children }) => {
  return <ul className={styles.navListHeader}>{children}</ul>;
};

export default ListOfNavLinks;
