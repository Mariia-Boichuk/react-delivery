import React, { Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import ProfilePage from "../../pages/ProfilePage/ProfilePage";
import { LoginPage } from "../../pages/LoginPage/LoginPage";
import { Registration } from "../../pages/Registration/Registration";
import { MY_PROFILE, SIGN_IN, REGISTER } from "../../utils/routes";
import { useSelector } from "react-redux";
import { PendingView } from "../PendingView/PendingView";
import Modal from "../Modal/Modal";

import LoadsPage from "../../pages/LoadsPage/LoadsPage";
import { ONE_LOAD } from "../../utils/routes";

import LoadsView from "../../pages/LoadsView/LoadsView";
import SingleLoad from "../../pages/SingleLoadPage/SingleLoad/SingleLoad";
import { State } from "../../reduxFeatures/reducers/requestReducer";

const MyRouter: React.FC = () => {
  const { loading, message, status } = useSelector(
    (state: State) => state.request
  );
  const user = useSelector((state: State) => state.auth.user);

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
      <Suspense fallback={<PendingView />}>
        <Routes>
          {user ? (
            <>
              <Route path={MY_PROFILE} element={<ProfilePage />} />
              <Route path={"loads/:status"} element={<LoadsView />} />
              <Route path={`${ONE_LOAD}/:id`} element={<SingleLoad />} />
              <Route path="/*" element={<Navigate replace to={MY_PROFILE} />} />
            </>
          ) : (
            <>
              <Route path={SIGN_IN} element={<LoginPage />} />
              <Route path={REGISTER} element={<Registration />} />
              <Route path="/*" element={<Navigate replace to={SIGN_IN} />} />
            </>
          )}
        </Routes>
      </Suspense>
    </main>
  );
};

export default MyRouter;
