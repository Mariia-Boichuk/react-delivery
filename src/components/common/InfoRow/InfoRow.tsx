import React from "react";
import st from "./InfoRow.module.css";

type InfoRowP = { caption: string; info: unknown };

const InfoRow: React.FC<InfoRowP> = ({ caption, info }) => {
  return (
    <div className={st.row}>
      <div className={st.caption}>{caption}</div>
      <div className={st.info}>{info}</div>
    </div>
  );
};

export default InfoRow;
