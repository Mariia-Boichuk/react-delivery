import { UserType } from "../reducers/authReducer";

export const setUserData = (user: UserType) => {
  return {
    type: "SET_USER",
    payload: user,
  };
};
