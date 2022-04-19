import BelowHeader from "../BelowHeader/BelowHeader";
import MainNav from "../MainNav/MainNav";
import { UserType } from "../../../reduxFeatures/reducers/authReducer";

type HeaderProps = {
  user: UserType;
  setUserData: (param: null | UserType) => void;
};

const Header: React.FC<HeaderProps> = ({ user, setUserData }) => {
  return (
    <header>
      <MainNav user={user} setUserData={setUserData} />
      <BelowHeader user={user} />
    </header>
  );
};

export default Header;
