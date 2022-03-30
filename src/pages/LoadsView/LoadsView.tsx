import React from "react";
import LoadsPage from "../LoadsPage/LoadsPage";
import { useParams } from "react-router-dom";

const LoadsView = () => {
  const { status } = useParams();

  let statusForQuery = "";

  switch (status) {
    case "drafted":
      statusForQuery = "NEW";
      break;
    case "posted":
      statusForQuery = "POSTED";
      break;
    case "shipped":
      statusForQuery = "SHIPPED";
      break;
    default:
      statusForQuery = "";
  }

  return (
    <div>
      <LoadsPage statusForQuery={statusForQuery} />
    </div>
  );
};

export default LoadsView;
