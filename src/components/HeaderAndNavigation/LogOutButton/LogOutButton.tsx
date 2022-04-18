import React from "react";
import styles from "./LogOutButton.module.css";
import Button from "../../Button/Button";
import Cookies from "js-cookie";
import { SIGN_IN } from "../../../utils/routes";
import { useNavigate } from "react-router-dom";
import { UserType } from "../../../reduxFeatures/reducers/authReducer";

type LogOutButtonProps = {
  dispatchSetUserData: (param: null | UserType) => void;
};

const LogOutButton: React.FC<LogOutButtonProps> = ({ dispatchSetUserData }) => {
  const redirect = useNavigate();

  return (
    <div className={styles.navItemHeader}>
      <Button
        text="log out"
        onClick={(event) => {
          event.preventDefault();

          dispatchSetUserData(null);

          Cookies.remove("jwt");

          redirect(SIGN_IN);
        }}
      />
    </div>
  );
};

export default LogOutButton;
