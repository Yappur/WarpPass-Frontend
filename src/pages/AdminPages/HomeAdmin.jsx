import React from "react";
import { useNavigate } from "react-router-dom";
import { cambiarTitulo } from "../../helpers/cambiarTitulos";

const HomeAdmin = () => {
  cambiarTitulo("HomeAdminPage");
  const navigate = useNavigate();

  const handlePanelUsers = () => {
    navigate("/admin/panelUsers");
  };

  const handlePanelEvents = () => {
    navigate("/admin/panelEvents");
  };
  return (
    <div>
      <div>
        <h1 className="text-center text-4xl font-bold text-[#b2b205] p-4">
          Panel de Administracion
        </h1>
      </div>
      <div className="flex justify-center gap-4 p-4 ">
        <button
          onClick={handlePanelUsers}
          className="btn bg-[#2F314E] shadow-lg shadow-indigo-500/50 hover:bg-[#1A1B2D] transition-colors duration-300 active:scale-95 transition-all duration-300"
        >
          Panel de usuarios
        </button>
        <button
          onClick={handlePanelEvents}
          className="btn bg-[#2F314E] shadow-lg shadow-indigo-500/50 hover:bg-[#1A1B2D] transition-colors duration-300 active:scale-95 transition-all duration-300"
        >
          Panel de Eventos
        </button>
      </div>
    </div>
  );
};

export default HomeAdmin;
