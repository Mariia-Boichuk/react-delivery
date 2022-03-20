import React from "react";
import st from "./InfoTable.module.css";

type InfoTableProps = { children: React.ReactNode };

const InfoTable: React.FC<InfoTableProps> = ({ children }) => {
  return (
    <table className={st.table}>
      <tbody> {children}</tbody>
    </table>
  );
};

export default InfoTable;
