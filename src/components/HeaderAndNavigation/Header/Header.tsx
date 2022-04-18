import BelowHeader from "../BelowHeader/BelowHeader";
import MainNav from "../MainNav/MainNav";
import { UserType } from "../../../reduxFeatures/reducers/authReducer";

type HeaderProps = {
  user: UserType;
  dispatchSetUserData: (param: null | UserType) => void;
};

const Header: React.FC<HeaderProps> = ({ user, dispatchSetUserData }) => {
  return (
    <header>
      <MainNav user={user} dispatchSetUserData={dispatchSetUserData} />
      <BelowHeader user={user} />
    </header>
  );
};

export default Header;
