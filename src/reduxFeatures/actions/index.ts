import { StatusType } from "../reducers/reducer";
import { UserI } from "../reducers/authReducer";

export const setLoading = (isLoading: boolean) => {
  return {
    type: "SET_LOADING",
    payload: { isLoading },
  };
};

export const setMes = (message: string) => {
  return {
    type: "SET_MESSAGE",
    payload: { message },
  };
};

export const setStatus = (newStatus: StatusType) => {
  return {
    type: "SET_STATUS",
    payload: { newStatus },
  };
};

export const clearStatus = () => {
  return {
    type: "CLEAR_STATUS",
  };
};

export const setUserData = (user: UserI) => {
  return {
    type: "SET_USER",
    payload: user,
  };
};
