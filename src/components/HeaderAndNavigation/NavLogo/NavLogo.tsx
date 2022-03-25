import React from "react";
import st from "./NavLogo.module.css";

const NavLogo: React.FC = () => {
  return (
    <div className={st.logo}>
      <span className={st.logoImg}></span>
      <span className={st.logoText}>DELIVERY.</span>
    </div>
  );
};

export default NavLogo;
