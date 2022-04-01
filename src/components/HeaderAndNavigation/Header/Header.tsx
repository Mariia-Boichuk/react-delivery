import BelowHeader from "../BelowHeader/BelowHeader";
import MainNav from "../MainNav/MainNav";
import { UserI } from "../../../reduxFeatures/reducers/authReducer";
import { Dispatch } from "react";

type IProps = {
  user: UserI;
  dispatch: Dispatch<any>;
};

const Header: React.FC<IProps> = ({ user, dispatch }) => {
  return (
    <header>
      <MainNav user={user} dispatch={dispatch} />
      <BelowHeader user={user} />
    </header>
  );
};

export default Header;
