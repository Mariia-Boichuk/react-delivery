import React from "react";
import {
  MY_PROFILE,
  SIGN_IN,
  REGISTER,
  CREATE_TRUCK,
  CREATE_LOAD,
} from "../../../utils/routes";
import { useSelector } from "react-redux";
import { State } from "../../../reduxFeatures/reducers/reducer";
import WidthWrapper from "../../WidthWrapper/WidthWrapper";
import LinkItem from "../LinkItem/LinkItem";
import HeaderGreeting from "../HeaderGreeting/HeaderGreeting";
import LogOutButton from "../LogOutButton/LogOutButton";
import ListOfNavlinks from "../ListOfNavlinks/ListOfNavlinks";

const MainNav: React.FC = () => {
  const user = useSelector((state: State) => state.auth.user);

  return (
    <WidthWrapper>
      <nav>
        <ListOfNavlinks>
          {!user ? (
            <>
              <LinkItem to={SIGN_IN} text="Login" />
              <LinkItem to={REGISTER} text="Register" />
            </>
          ) : (
            <>
              {user?.role === "SHIPPER" && (
                <LinkItem to={CREATE_LOAD} text="new load" />
              )}
              {user?.role === "DRIVER" && (
                <LinkItem to={CREATE_TRUCK} text="new truck" />
              )}
              <LinkItem to={MY_PROFILE} text="Profile" />

              <HeaderGreeting />
              <LogOutButton />
            </>
          )}
        </ListOfNavlinks>
      </nav>
    </WidthWrapper>
  );
};

export default MainNav;
