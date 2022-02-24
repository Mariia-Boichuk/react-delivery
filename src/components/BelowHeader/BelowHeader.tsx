import React from "react";
import st from "./BelowHeader.module.css";
import SubNav from "../SubNav/SubNav";

const BelowHeader = () => {
  return (
    <div className={st.white}>
      <div className={st.belowHeader}>
        <div className="wrapper">
          <div className={st.belowHeaderTop}>
            <div className={st.logo}>
              <span className={st.logoImg}></span>
              <span className={st.logoText}>DELIVERY.</span>
            </div>
            <div>
              <span className={st.info}> 394034-4994-77</span>
            </div>
          </div>
        </div>
        <hr className={st.hr} />
        <SubNav />
      </div>
    </div>
  );
};

export default BelowHeader;
