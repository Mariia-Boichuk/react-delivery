import React from "react";
import st from "./HeaderGreeting.module.css";
import { useSelector } from "react-redux";
import { State } from "../../../reduxFeatures/reducers/reducer";

const HeaderGreeting: React.FC = () => {
  const user = useSelector((state: State) => state.auth.user);

  return <div className={st.navItemHeader}>hello! {user?.email}</div>;
};

export default HeaderGreeting;
