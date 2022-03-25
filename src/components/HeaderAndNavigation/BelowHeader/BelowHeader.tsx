import React from "react";
import st from "./BelowHeader.module.css";
import SubNav from "../SubNav/SubNav";
import WidthWrapper from "../../WidthWrapper/WidthWrapper";
import NavLogo from "../NavLogo/NavLogo";
import { State } from "../../../reduxFeatures/reducers/reducer";
import { useSelector } from "react-redux";

const BelowHeader: React.FC = () => {
  const user = useSelector((state: State) => state.auth.user);
  return (
    <div className={st.white}>
      <div className={st.belowHeader}>
        <WidthWrapper>
          <div className={st.belowHeaderTop}>
            <NavLogo />
            <div>
              <span className={st.info}> 394034-4994-77</span>
            </div>
          </div>
        </WidthWrapper>
        <hr className={st.hr} />
        {user && <SubNav />}
      </div>
    </div>
  );
};

export default BelowHeader;
