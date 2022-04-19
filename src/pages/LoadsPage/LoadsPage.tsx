import React, { useState } from "react";
import { useEffect, useCallback } from "react";
import { DEVELOPMENT_URL } from "../../utils/consts";
import Cookies from "js-cookie";
import useRequest from "../../utils/useRequest";
import LoadShort from "../../components/LoadShort/LoadShort";

export type MeResponseData = {
  loads: Array<object>;
};

const LoadsPage = ({ statusForQuery }) => {
  const [loads, setLoads] = useState([]);
  const { fetchData } = useRequest();

  const getLoads = useCallback(
    async (jwt) => {
      const resp = await fetchData<MeResponseData>({
        method: "get",
        url: `${DEVELOPMENT_URL}/api/loads?status=${statusForQuery}`,
        headers: {
          Authorization: `Bearer ${jwt}`,
          "Content-type": "application/json",
        },
      });

      setLoads(resp.loads);
    },
    [statusForQuery]
  );

  useEffect(() => {
    getLoads(Cookies.get("jwt"));
  }, [statusForQuery]);

  return (
    <div>
      {loads.map((item) => (
        <LoadShort key={item._id} itemData={item} />
      ))}
    </div>
  );
};

export default LoadsPage;
