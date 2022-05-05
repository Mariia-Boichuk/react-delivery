import React from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  text: string;
  type: "button" | "submit" | "reset";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  svgPath?: string;
};

const Button: React.FC<ButtonProps> = ({ text, type, onClick, svgPath }) => {
  return (
    <button
      className={`${styles.button} ${type === "submit" ? styles.submit : ""}`}
      onClick={onClick}
      type={type}
    >
      <span> {text} </span>
      {svgPath && (
        <span className={styles.svgWrapper}>
          <img src={svgPath} alt="icon" />
        </span>
      )}
    </button>
  );
};

export default Button;
