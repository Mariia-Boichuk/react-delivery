import React from "react";
import st from "./PageTitle.module.css";

type PageTitleProps = {
  title: string;
};

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  return <h2 className={st.title}>{title}</h2>;
};

export default PageTitle;
