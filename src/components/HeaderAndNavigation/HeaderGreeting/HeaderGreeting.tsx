import React from "react";
import styles from "./HeaderGreeting.module.css";
import Text from "../../Text/Text";
import { UserType } from "../../../reduxFeatures/reducers/authReducer";

type HeaderGreetingProps = {
  user: UserType;
};

const HeaderGreeting: React.FC<HeaderGreetingProps> = ({ user }) => {
  return (
    <div className={styles.navItemHeader}>
      <Text>hello! {user?.email}</Text>
    </div>
  );
};

export default HeaderGreeting;
