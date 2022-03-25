import React from "react";
import ownst from "./SubNav.module.css";
import WidthWrapper from "../../WidthWrapper/WidthWrapper";
import LinkItem from "../LinkItem/LinkItem";
import {
  POSTED_LOADS,
  SHIPPED_LOADS,
  DRAFTED_LOADS,
} from "../../../utils/routes";
import ListOfNavlinks from "../ListOfNavlinks/ListOfNavlinks";

const SubNav: React.FC = () => {
  return (
    <WidthWrapper>
      <nav className={ownst.subnav}>
        <ListOfNavlinks>
          <LinkItem to={DRAFTED_LOADS} text="drafted loads" />
          <LinkItem to={POSTED_LOADS} text="posted loads" />
          <LinkItem to={SHIPPED_LOADS} text="shipped loads" />
        </ListOfNavlinks>
      </nav>
    </WidthWrapper>
  );
};

export default SubNav;
