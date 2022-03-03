import { useDispatch } from "react-redux";
import { StatusType } from "../reduxFeatures/reducers/reducer";
import { setStatus, setLoading, setMes } from "../reduxFeatures/actions/index";
import axios from "axios";
import { URLadr } from "./consts";
import React, { useEffect, useState } from "react";

const useRequest = () => {
  const [responseData, setResponseData] = useState(null);
  console.log("ressponse", responseData);

  const fetchData = async (requestData) => {
    console.log("ress", requestData);
    try {
      const resp = await axios(requestData);
      setResponseData(resp.data);
    } catch (error) {
      console.log(error);
    }
  };

  return { fetchData, responseData };
};

export default useRequest;
