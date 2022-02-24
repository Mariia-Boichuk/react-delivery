import React from "react";
import st from "./InfoRow.module.css";
const InfoRow = ({ caption, info }) => {
  return (
    <tr className={st.row}>
      <td className={st.caption}>{caption}</td>
      <td className={st.info}>{info}</td>
    </tr>
  );
};

export default InfoRow;
