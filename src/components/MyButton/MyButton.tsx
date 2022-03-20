import React from "react";
import st from "./MyButton.module.css";
const MyButton = ({ text, onClick }) => {
  return (
    <button className={st.mybutton} onClick={onClick}>
      {text}
    </button>
  );
};

export default MyButton;
