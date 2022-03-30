import { UserI } from "../reducers/authReducer";

export const setUserData = (user: UserI) => {
  return {
    type: "SET_USER",
    payload: user,
  };
};
