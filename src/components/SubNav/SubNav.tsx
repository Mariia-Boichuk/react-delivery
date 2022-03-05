import React from "react";
import st from "../MainNav/MainNav.module.css";
import ownst from "./SubNav.module.css";
import WidthWrapper from "../WidthWrapper/WidthWrapper";
import MyLink from "../MyLink/MyLink";

const SubNav = () => {
  return (
    <WidthWrapper>
      <nav className={ownst.subnav}>
        <ul className={st.navListHeader}>
          <MyLink to={"newloads"} text="new loads" />
          <MyLink to={"postedloads"} text="posted loads" />
          <MyLink to={"activeloads"} text="active loads" />
        </ul>
      </nav>
    </WidthWrapper>
  );
};

export default SubNav;
