import React from "react";
import styles from "./LogOutButton.module.css";
import Cookies from "js-cookie";
import { SIGN_IN } from "../../../utils/routes";
import { useNavigate } from "react-router-dom";
import { UserType } from "../../../reduxFeatures/auth/authReducer";
import Button from "../../../components/Button/Button";

type LogOutButtonProps = {
  setUser: (param: null | UserType) => void;
};

const LogOutButton: React.FC<LogOutButtonProps> = ({ setUser }) => {
  const redirect = useNavigate();

  return (
    <div className={styles.navItemHeader}>
      <Button
        text="log out"
        onClick={(event) => {
          event.preventDefault();

          setUser(null);

          Cookies.remove("jwt");

          redirect(SIGN_IN);
        }}
      />
    </div>
  );
};

export default LogOutButton;
