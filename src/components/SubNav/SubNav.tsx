import React from "react";
import { NavLink } from "react-router-dom";
import st from "../MainNav/MainNav.module.css";
import ownst from "./SubNav.module.css";

const SubNav = () => {
  return (
    <div className="wrapper">
      <nav className={ownst.subnav}>
        <ul className={st.navListHeader}>
          <li className={st.navItemHeader}>
            <NavLink to="/treate">shipped loads</NavLink>
          </li>
          <li className={st.navItemHeader}>
            <NavLink to="/truate">posted loads</NavLink>
          </li>
          <li className={st.navItemHeader}>
            <NavLink to="/trucks">active loads</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SubNav;
