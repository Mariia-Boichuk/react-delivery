import MyRouter from "./components/Router/MyRouter";
import { useCallback, useEffect } from "react";
import useRequest from "./utils/useRequest";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { UserI } from "./reduxFeatures/reducers/authReducer";
import Header from "./components/HeaderAndNavigation/Header/Header";
import { State } from "./reduxFeatures/reducers/requestReducer";
import { setUserData } from "./reduxFeatures/actions/authActions";
import { URL_STRING } from "./utils/consts";

export type MeResponseData = {
  user: UserI;
};

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { fetchData } = useRequest();

  const user = useSelector((state: State) => state.auth.user);

  const getMe = useCallback(async (jwt) => {
    const resp = await fetchData<MeResponseData>({
      method: "get",
      url: `${URL_STRING}/api/users/me`,
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
      <Header dispatch={dispatch} user={user} />
      <MyRouter />
    </div>
  );
};

export default App;
