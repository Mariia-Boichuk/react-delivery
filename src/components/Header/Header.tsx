import BelowHeader from "../BelowHeader/BelowHeader";
import MainNav from "../MainNav/MainNav";

const Header: React.FC = () => {
  return (
    <header>
      <MainNav />
      <BelowHeader />
    </header>
  );
};

export default Header;
