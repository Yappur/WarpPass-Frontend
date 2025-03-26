import React from "react";
import UserTables from "../../components/Tables/UserTables";

const PanelsUsers = () => {
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

export default PanelsUsers;
