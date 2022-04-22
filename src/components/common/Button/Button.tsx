import React from "react";
import Text from "../Text/Text";
import styles from "./Button.module.css";

type ButtonProps = {
  text: string;
  type: "button" | "submit" | "reset";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button: React.FC<ButtonProps> = ({ text, type, onClick }) => {
  return (
    <button
      className={`${styles.button} ${type === "submit" && styles.submit}`}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
