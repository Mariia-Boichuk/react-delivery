import React from "react";
import { NavLink } from "react-router-dom";
import Text from "../../Text/Text";
import styles from "./LinkItem.module.css";

type LinkItemProps = {
  to: string;
  text: string;
};

const LinkItem: React.FC<LinkItemProps> = ({ to, text }) => {
  return (
    <li className={styles.navItemHeader}>
      <NavLink
        to={to}
        className={({ isActive }) => (isActive ? styles.forActive : "")}
      >
        {text}
      </NavLink>
    </li>
  );
};

export default LinkItem;
