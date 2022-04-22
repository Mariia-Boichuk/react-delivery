import React from "react";
import styles from "./HeaderGreeting.module.css";
import { UserType } from "../../../reduxFeatures/auth/authReducer";
import Text from "../../../components/Text/Text";

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
