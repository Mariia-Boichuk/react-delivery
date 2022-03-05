import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import ProfilePage from "../../pages/ProfilePage/ProfilePage";
import { LoginPage } from "../../pages/LoginPage/LoginPage";
import { Registration } from "../../pages/Registration/Registration";
import { MY_PROFILE, SIGN_IN, REGISTER } from "../../utils/routes";
import { useSelector } from "react-redux";
import { PendingView } from "../PendingView/PendingView";
import Modal from "../Modal/Modal";
import { State } from "../../reduxFeatures/reducers/reducer";

const MyRouter: React.FC = () => {
  const { loading, message, status } = useSelector(
    (state: State) => state.request
  );
  const user = useSelector((state: State) => state.auth.user);

  return (
    <>
      {status === "error" ? (
        <>
          <Modal mes={message} />
        </>
      ) : loading ? (
        <>
          <PendingView />
        </>
      ) : user ? (
        <main className="main">
          <Routes>
            <Route path={MY_PROFILE} element={<ProfilePage />} />
            <Route path="/*" element={<Navigate replace to={MY_PROFILE} />} />
          </Routes>
        </main>
      ) : (
        <main className="main">
          <Routes>
            <Route path={SIGN_IN} element={<LoginPage />} />
            <Route path={REGISTER} element={<Registration />} />
            <Route path="/*" element={<Navigate replace to={SIGN_IN} />} />
          </Routes>
        </main>
      )}
    </>
  );
};

export default MyRouter;
