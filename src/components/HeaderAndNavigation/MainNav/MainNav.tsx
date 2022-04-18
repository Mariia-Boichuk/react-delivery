import {
  MY_PROFILE,
  SIGN_IN,
  REGISTER,
  CREATE_TRUCK,
  CREATE_LOAD,
} from "../../../utils/routes";
import WidthWrapper from "../../WidthWrapper/WidthWrapper";
import LinkItem from "../LinkItem/LinkItem";
import HeaderGreeting from "../HeaderGreeting/HeaderGreeting";
import LogOutButton from "../LogOutButton/LogOutButton";
import ListOfNavLinks from "../ListOfNavLinks/ListOfNaLinks";
import { UserType } from "../../../reduxFeatures/reducers/authReducer";

type MainNavProps = {
  user: UserType;
  setUserData: (param: null | UserType) => void;
};

const MainNav: React.FC<MainNavProps> = ({ user, setUserData }) => {
  return (
    <WidthWrapper>
      <nav>
        <ListOfNavLinks>
          {user ? (
            <>
              {user?.role === "SHIPPER" && (
                <LinkItem to={CREATE_LOAD} text="new load" />
              )}
              {user?.role === "DRIVER" && (
                <LinkItem to={CREATE_TRUCK} text="new truck" />
              )}
              <LinkItem to={MY_PROFILE} text="Profile" />

              <HeaderGreeting user={user} />
              <LogOutButton setUserData={setUserData} />
            </>
          ) : (
            <>
              <LinkItem to={SIGN_IN} text="Login" />
              <LinkItem to={REGISTER} text="Register" />
            </>
          )}
        </ListOfNavLinks>
      </nav>
    </WidthWrapper>
  );
};

export default MainNav;
