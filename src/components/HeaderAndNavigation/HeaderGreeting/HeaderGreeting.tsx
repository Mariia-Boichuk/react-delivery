import React from "react";
import styles from "./HeaderGreeting.module.css";
import CommonText from "../../CommonText/CommonText";
import { UserI } from "../../../reduxFeatures/reducers/authReducer";

type IProps = {
  user: UserI;
};

const HeaderGreeting: React.FC<IProps> = ({ user }) => {
  return (
    <div className={styles.navItemHeader}>
      <CommonText>hello! {user?.email}</CommonText>
    </div>
  );
};

export default HeaderGreeting;
