import React from "react";
import styles from "./BelowHeader.module.css";
import SubNav from "../SubNav/SubNav";
import WidthWrapper from "../../WidthWrapper/WidthWrapper";
import NavLogo from "../NavLogo/NavLogo";
import Line from "../../Line/Line";
import { UserType } from "../../../reduxFeatures/reducers/authReducer";

type BelowHeaderProps = {
  user: UserType | null;
};

const BelowHeader: React.FC<BelowHeaderProps> = ({ user }) => {
  return (
    <div className={styles.white}>
      <div className={styles.belowHeader}>
        <WidthWrapper>
          <div className={styles.belowHeaderTop}>
            <NavLogo />
            <div>
              <span className={styles.info}> 394034-4994-77</span>
            </div>
          </div>
        </WidthWrapper>
        <Line />
        {user && <SubNav />}
      </div>
    </div>
  );
};

export default BelowHeader;
