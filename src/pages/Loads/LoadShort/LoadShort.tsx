import React from "react";
import InfoTable from "../../../components/InfoTable/InfoTable";
import InfoRow from "../../../components/InfoRow/InfoRow";
import Line from "../../../components/Line/Line";

import { Link } from "react-router-dom";
import { ONE_LOAD } from "../../../utils/routes";

const LoadShort = ({ itemData }) => {
  return !itemData ? (
    <div>ff</div>
  ) : (
    <div>
      <InfoTable>
        <InfoRow caption="name" info={itemData.name} />
        <InfoRow caption="status" info={itemData.status} />

        <InfoRow
          caption="Date created"
          info={new Date(itemData.created_date).toLocaleString()}
        />
        <Link to={`${ONE_LOAD}/${itemData._id}`}>
          <button type="button" className="button">
            <span className="button__text">see more</span>
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
        </Link>

        <Line />
      </InfoTable>
    </div>
  );
};

export default LoadShort;
