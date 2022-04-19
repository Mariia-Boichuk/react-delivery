import React, { useState } from "react";
import st from "SingleLoad.module.css";
import LoadShort from "../../../components/LoadShort/LoadShort";
import { DEVELOPMENT_URL } from "../../../utils/consts";
import { useCallback, useEffect } from "react";
import useRequest from "../../../utils/useRequest";
import Cookies from "js-cookie";
import { useLocation, useParams } from "react-router-dom";

export type ResponseDataType = {
  load: object;
};

const SingleLoad = () => {
  const [load, setLoad] = useState(null);
  const { fetchData } = useRequest();

  const location = useLocation();
  const { id } = useParams();

  console.log(location);
  const getLoads = useCallback(async (jwt) => {
    const resp = await fetchData<ResponseDataType>({
      method: "get",
      url: `${DEVELOPMENT_URL}/api/loads/${id}`,
 headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-type": "application/json",
      },
    });

    setLoad(resp.load);
  }, []);

  useEffect(() => {
    getLoads(Cookies.get("jwt"));
  }, []);

  return (
    <div>
      <LoadShort itemData={load} />
    </div>
  );
};

export default SingleLoad;
