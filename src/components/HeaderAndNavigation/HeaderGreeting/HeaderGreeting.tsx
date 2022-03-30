import React from "react";
import st from "./HeaderGreeting.module.css";
import { useSelector } from "react-redux";
import { State } from "../../../reduxFeatures/reducers/requestReducer";

const HeaderGreeting: React.FC = () => {
  const user = useSelector((state: State) => state.auth.user);
  <Text>hello! {user?.email}</Text>;
  return <div className={st.navItemHeader}>hello! {user?.email}</div>;
};

export default HeaderGreeting;
