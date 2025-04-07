import React from "react";
import UserTables from "../../components/Tables/UserTable";
import { cambiarTitulo } from "../../helpers/cambiarTitulos";

const PanelUsers = () => {
  cambiarTitulo("PanelUsuarios");
  return (
    <>
      <div className="text-center text-3xl font-bold text-[#b2b205] p-4">
        <h1>Panel de Usuarios</h1>
      </div>
      <div>
        <UserTables />
      </div>
    </>
  );
};

export default PanelUsers;
