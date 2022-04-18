import MyRouter from "./components/Router/MyRouter";
import { useCallback, useEffect } from "react";
import useRequest from "./utils/useRequest";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { UserType } from "./reduxFeatures/reducers/authReducer";
import Header from "./components/HeaderAndNavigation/Header/Header";
import { State } from "./reduxFeatures/reducers/requestReducer";
import { setUserData } from "./reduxFeatures/actions/authActions";
import { DEVELOPMENT_URL } from "./utils/consts";

export type MeResponseData = {
  user: UserType;
};

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { fetchData } = useRequest();

  const user = useSelector((state: State) => state.auth.user);

  const dispatchSetUserData = (param) => {
    dispatch(setUserData(param));
  };

  const getMe = useCallback(async (jwt) => {
    const resp = await fetchData<MeResponseData>({
      method: "get",
      url: `${DEVELOPMENT_URL}/api/users/me`,
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-type": "application/json",
      },
    });
    dispatch(setUserData(resp.user));
  }, []);

  useEffect(() => {
    if (Cookies.get("jwt")) {
      getMe(Cookies.get("jwt"));
    }
  }, []);

  return (
    <div>
      <Header dispatchSetUserData={dispatchSetUserData} user={user} />
      <MyRouter />
    </div>
  );
};

export default App;
