import BelowHeader from "../BelowHeader/BelowHeader";
import MainNav from "../MainNav/MainNav";
import { UserType } from "../../../reduxFeatures/auth/authReducer";

type HeaderProps = {
  user: UserType;
  setUser: (param: null | UserType) => void;
};

const Header: React.FC<HeaderProps> = ({ user, setUser }) => {
  return (
    <header>
      <MainNav user={user} setUser={setUser} />
      <BelowHeader user={user} />
    </header>
  );
};

export default Header;
