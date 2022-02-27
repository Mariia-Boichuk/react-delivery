export type ActionSet = {
  type: string;
  payload?: string;
};

export const setLoadingTrue = () => {
  return {
    type: "START_LOADING",
  };
};

export const setLoadingFalse = () => {
  return {
    type: "FINISH_LOADING",
  };
};

//error red
export const setErrorMes = (mes) => {
  return {
    type: "SET_ERROR",
    payload: mes,
  };
};

export const clearErrorMes = () => {
  return {
    type: "CLEAR_ERROR",
  };
};
