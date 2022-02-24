import React from "react";
import st from "./InfoTable.module.css";

const InfoTable = ({ children }) => {
  return (
    <section>
      <table className={st.table}>
        <tbody> {children}</tbody>
      </table>
    </section>
  );
};

export default InfoTable;
