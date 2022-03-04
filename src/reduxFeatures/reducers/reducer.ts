import { UserI } from "./authReducer";
export type ActionSet = {
  type: string;
  payload?: { message?: string; isLoading?: boolean; newStatus?: StatusType };
};
export enum StatusType {
  error = "error",
  success = "success",
  warning = "warning",
  noStatus = "noStatus",
}

export interface State {
  request: { loading: boolean; message: string; status: StatusType };
  auth: {
    jwt: string;
    user: UserI | null;
  };
}

const requestReducer = (
  state = { loading: false, status: StatusType.noStatus, message: "" },
  action: ActionSet
) => {
  switch (action.type) {
    case "SET_MESSAGE":
      return { ...state, message: action.payload.message };

    case "SET_STATUS":
      return { ...state, status: action.payload.newStatus };

    case "SET_LOADING":
      return { ...state, loading: action.payload.isLoading };

    default:
      return state;
  }
};

export default requestReducer;
