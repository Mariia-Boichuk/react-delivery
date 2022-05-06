import { useDispatch } from "react-redux";
import { StatusType } from "../reduxFeatures/request/requestReducer";
import {
  setStatus,
  setLoading,
  setMes,
} from "../reduxFeatures/request/requestActions";
import axios, { AxiosResponse, AxiosRequestConfig, AxiosError } from "axios";
import { useCallback } from "react";

// export const fetchColorData = () => {
//   const colorPromise = fetchColor();
//   return {
//     color: wrapPromise(colorPromise),
//   };
// };

// const wrapPromise = (promise) => {
//   let status = "pending";
//   let result;
//   let suspender = promise.then(
//     (res) => {
//       status = "success";
//       result = res;
//     },
//     (err) => {
//       status = "error";
//       result = err;
//     }
//   );
//   return {
//     read() {
//       if (status === "pending") {
//         throw suspender;
//       } else if (status === "error") {
//         throw result;
//       } else if (status === "success") {
//         return result;
//       }
//     },
//   };
// };

const useRequest = () => {
  const dispatch = useDispatch();

  const fetchData = useCallback(
    async <T>(requestData: AxiosRequestConfig): Promise<T> => {
      dispatch(setLoading(true));
      try {
        const resp: AxiosResponse = await axios(requestData);
        dispatch(setLoading(false));

        return resp.data;
      } catch (err) {
        const error = err as AxiosError;
        dispatch(setStatus(StatusType.error));

        if (error.response?.data?.message) {
          dispatch(setMes(error.response.data.message));
        } else {
          dispatch(setMes("something gone wrong"));
        }

        dispatch(setLoading(false));
      }
    },
    []
  );

  return { fetchData };
};

export default useRequest;
