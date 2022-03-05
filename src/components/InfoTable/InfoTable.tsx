import React from "react";
import st from "./InfoTable.module.css";

type InfoTableProps = { children: React.ReactNode };

const InfoTable: React.FC<InfoTableProps> = ({ children }) => {
  return (
    <section>
      <table className={st.table}>
        <tbody> {children}</tbody>
      </table>
    </section>
  );
};

export default InfoTable;
