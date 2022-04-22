import React from "react";
import styles from "./NavLogo.module.css";
import logo from "../../../assets/svgs/delivery23.svg";

const NavLogo: React.FC = () => {
  return (
    <div className={styles.logo}>
      <span className={styles.logoImg}>
        <img src={logo} alt="Logo" />
      </span>
      <span className={styles.logoText}>DELIVERY.</span>
    </div>
  );
};

export default NavLogo;
