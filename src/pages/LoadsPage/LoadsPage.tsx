import React, { useState } from "react";
import { useEffect, useCallback } from "react";
import { URLadr } from "../../utils/consts";
import Cookies from "js-cookie";
import useRequest from "../../utils/useRequest";

export type MeResponseData = {
  loads: Array<object>;
};

const LoadsPage = ({ status }) => {
  const [loads, setLoads] = useState([]);
  const { fetchData } = useRequest();

  const getLoads = useCallback(
    async (jwt) => {
      const resp = await fetchData<MeResponseData>({
        method: "get",
        url: `${URLadr}/api/loads?status=${status}`,
        headers: {
          Authorization: `Bearer ${jwt}`,
          "Content-type": "application/json",
        },
      });
      console.log(loads);
      setLoads(resp.loads);
      console.log(loads);

      console.log(resp);
    },
    [status]
  );

  useEffect(() => {
    getLoads(Cookies.get("jwt"));
  }, [status]);

  return (
    <div>
      LoadsPage {status}
      {loads.map((item) => (
        <div>{item.name}</div>
      ))}
    </div>
  );
};

export default LoadsPage;
