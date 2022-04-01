import React from "react";
import styles from "./Button.module.css";

const Button = ({ text, onClick }) => {
  return (
    <button className={styles.mybutton} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
