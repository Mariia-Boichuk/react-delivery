import React from "react";
import Text from "../Text/Text";
import styles from "./Button.module.css";

type ButtonProps = {
  text: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <Text> {text}</Text>
    </button>
  );
};

export default Button;
