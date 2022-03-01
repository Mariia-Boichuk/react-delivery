import { StatusType } from "../reducers/reducer";
export type ActionSet = {
  type: string;
  payload?: { message?: string; isLoading?: boolean; newStatus?: StatusType };
};

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
