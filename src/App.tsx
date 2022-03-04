import Header from "./components/Header/Header";
import MyRouter from "./components/Router/MyRouter";
import { useCallback, useEffect } from "react";
import { URLadr } from "./utils/consts";
import useRequest from "./utils/useRequest";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "./reduxFeatures/actions/index";
import { State } from "./reduxFeatures/reducers/reducer";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { fetchData } = useRequest();

  const getMe = useCallback(async (jwt) => {
    const resp = await fetchData({
      method: "get",
      url: `${URLadr}/api/users/me`,
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
      <Header />
      <MyRouter />
    </div>
  );
};

export default App;
