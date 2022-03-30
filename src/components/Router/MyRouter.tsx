import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import ProfilePage from "../../pages/ProfilePage/ProfilePage";
import { LoginPage } from "../../pages/LoginPage/LoginPage";
import { Registration } from "../../pages/Registration/Registration";
import {
  MY_PROFILE,
  SIGN_IN,
  REGISTER,
  POSTED_LOADS,
} from "../../utils/routes";
import { useSelector } from "react-redux";
import { PendingView } from "../PendingView/PendingView";
import Modal from "../Modal/Modal";
import { State } from "../../reduxFeatures/reducers/requestReducer";
import LoadsPage from "../../pages/LoadsPage/LoadsPage";
import { SHIPPED_LOADS, DRAFTED_LOADS, ONE_LOAD } from "../../utils/routes";
import SingleLoad from "../../pages/SingleLoadPage/SingleLoad/SingleLoad";
import LoadsView from "../../pages/LoadsView/LoadsView";

const MyRouter: React.FC = () => {
  const { loading, message, status } = useSelector(
    (state: State) => state.request
  );
  const user = useSelector((state: State) => state.auth.user);
  // if (loading) {
  //   return (
  //     <main>
  //       <Routes>
  //         <Route path="/*" element={<PendingView />} />
  //       </Routes>
  //     </main>
  //   );
  // }

  if (status === "error") {
    return (
      <main>
        <Routes>
          <Route path="/*" element={<Modal mes={message} />} />
        </Routes>
      </main>
    );
  }

  return (
    <main>
      {loading && <PendingView />}
      <Routes>
        {user ? (
          <>
            <Route path={MY_PROFILE} element={<ProfilePage />} />
            {/* <Route path={DRAFTED_LOADS} element={<LoadsPage status="NEW" />} />
            <Route
              path={POSTED_LOADS}
              element={<LoadsPage status="POSTED" />}
            />
            <Route
              path={SHIPPED_LOADS}
              element={<LoadsPage status="SHIPPED" />}
            /> */}
            <Route path={"loads/:status"} element={<LoadsView />} />
            <Route path="/*" element={<Navigate replace to={MY_PROFILE} />} />
            <Route path={`${ONE_LOAD}/:id`} element={<SingleLoad />} />
          </>
        ) : (
          <>
            <Route path={SIGN_IN} element={<LoginPage />} />
            <Route path={REGISTER} element={<Registration />} />
            <Route path="/*" element={<Navigate replace to={SIGN_IN} />} />
          </>
        )}
      </Routes>
    </main>
  );
};

export default MyRouter;
