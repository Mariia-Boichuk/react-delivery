import React from "react";
import st from "./PageTitle.module.css";

const PageTitle = ({ title }) => {
  return <h2 className={st.title}>{title}</h2>;
};

export default PageTitle;
