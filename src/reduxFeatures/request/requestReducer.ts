import { UserType } from "./authReducer";

export type ActionSet = {
  type: string;
  payload?: { message?: string; isLoading?: boolean; newStatus?: StatusType };
};

interface StatusAction {
  type: string;
  payload: { newStatus: StatusType };
}

interface MessageAction {
  type: string;
  payload: { message: string };
}

interface LoadingAction {
  type: string;
  payload: { isLoading: boolean };
}

interface ClearAction {
  type: string;
}

export enum StatusType {
  error = "error",
  success = "success",
  warning = "warning",
}

interface RequestI {
  loading: boolean;
  message: string;
  status?: StatusType;
}
export interface State {
  auth: {
    jwt: string;
    user: UserType | null;
  };
  request: RequestI;
}

const requestReducer = (
  state: RequestI = { loading: false, message: "" },
  action: ActionSet //MessageAction | StatusAction | LoadingAction | ClearAction
) => {
  switch (action.type) {
    case "SET_MESSAGE":
      return { ...state, message: action.payload.message };

    case "SET_STATUS":
      return { ...state, status: action.payload.newStatus };

    case "CLEAR_STATUS":
      const { status, ...fields } = state;
      return { ...fields };

    case "SET_LOADING":
      return { ...state, loading: action.payload.isLoading };

    default:
      return state;
  }
};

export default requestReducer;
