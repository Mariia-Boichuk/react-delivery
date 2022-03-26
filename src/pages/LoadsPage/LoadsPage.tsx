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

      setLoads(resp.loads);
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
      <button type="button" className="button">
        <span className="button__text">Download</span>
        <span className="button__icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            aria-hidden="true"
            className="icon-button__icon"
            focusable="false"
          >
            <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"></path>
          </svg>
        </span>
      </button>
    </div>
  );
};

export default LoadsPage;
