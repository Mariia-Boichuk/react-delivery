import React from "react";
import styles from "./BelowHeader.module.css";
import SubNav from "../SubNav/SubNav";
import NavLogo from "../NavLogo/NavLogo";
import { UserType } from "../../../reduxFeatures/auth/authReducer";
import Line from "../../../components/common/Line/Line";
import WidthWrapper from "../../../components/common/WidthWrapper/WidthWrapper";

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
