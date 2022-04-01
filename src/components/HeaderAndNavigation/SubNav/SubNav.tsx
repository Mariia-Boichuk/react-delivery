import React from "react";
import styles from "./SubNav.module.css";
import WidthWrapper from "../../WidthWrapper/WidthWrapper";
import LinkItem from "../LinkItem/LinkItem";
import {
  POSTED_LOADS,
  SHIPPED_LOADS,
  DRAFTED_LOADS,
} from "../../../utils/routes";
import ListOfNavLinks from "../ListOfNavLinks/ListOfNaLinks";

const SubNav: React.FC = () => {
  return (
    <WidthWrapper>
      <nav className={styles.subnav}>
        <ListOfNavLinks>
          <LinkItem to={DRAFTED_LOADS} text="drafted loads" />
          <LinkItem to={POSTED_LOADS} text="posted loads" />
          <LinkItem to={SHIPPED_LOADS} text="shipped loads" />
        </ListOfNavLinks>
      </nav>
    </WidthWrapper>
  );
};

export default SubNav;
