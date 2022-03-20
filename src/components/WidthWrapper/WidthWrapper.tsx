import React from "react";
import st from "./WidthWrapper.module.css";

type WidthWrapperProps = {
  children: React.ReactNode;
};

const WidthWrapper: React.FC<WidthWrapperProps> = ({ children }) => {
  return <div className={st.wrapper}>{children}</div>;
};

export default WidthWrapper;
