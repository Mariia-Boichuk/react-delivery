import React from "react";
import st from "./PendingView.module.css";
import spinner from "./loader.svg";

export const PendingView = () => {
  return (
    <div className={st.container}>
      <img src={spinner} alt="truck" />
    </div>
  );
};
