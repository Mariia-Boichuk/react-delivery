import { useDispatch } from "react-redux";
import { StatusType } from "../reduxFeatures/reducers/reducer";
import { setStatus, setLoading, setMes } from "../reduxFeatures/actions/index";
import axios, { AxiosResponse, AxiosRequestConfig, AxiosError } from "axios";
import { useCallback } from "react";

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
