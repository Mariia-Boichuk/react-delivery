import styles from "./ListOfNavLinks.module.css";

type ListOfNavLinksProps = {
  children: React.ReactNode;
};

const ListOfNavLinks: React.FC<ListOfNavLinksProps> = ({ children }) => {
  return <ul className={styles.navListHeader}>{children}</ul>;
};

export default ListOfNavLinks;
