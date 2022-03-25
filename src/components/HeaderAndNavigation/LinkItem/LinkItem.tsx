import React from "react";
import { NavLink } from "react-router-dom";
import st from "./LinkItem.module.css";

type LinkItemProps = {
  to: string;
  text: string;
};

const LinkItem: React.FC<LinkItemProps> = ({ to, text }) => {
  return (
    <li className={st.navItemHeader}>
      <NavLink
        to={to}
        className={({ isActive }) => (isActive ? st.forActive : "")}
      >
        {text}
      </NavLink>
    </li>
  );
};

export default LinkItem;
