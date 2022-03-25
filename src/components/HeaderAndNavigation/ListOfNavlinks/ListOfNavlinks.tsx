import st from "./ListOfNavlinks.module.css";

const ListOfNavlinks: React.FC = ({ children }) => {
  return <ul className={st.navListHeader}>{children}</ul>;
};

export default ListOfNavlinks;
