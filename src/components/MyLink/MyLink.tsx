import React from "react";
import { NavLink } from "react-router-dom";
import st from "./MyLink.module.css";

type MyLinkProps = {
  to: string;
  text: string;
};

const MyLink: React.FC<MyLinkProps> = ({ to, text }) => {
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

export default MyLink;
