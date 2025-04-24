import React from "react";
import EventTables from "../../components/Tables/EventsTable";
import { cambiarTitulo } from "../../helpers/cambiarTitulos";

const PanelEvents = () => {
  cambiarTitulo("PanelEventos");
  return (
    <>
      <div>
        <div className="text-center text-3xl font-bold generalStyle p-4">
          <h1>Panel de Eventos</h1>
        </div>
        <div>
          <EventTables />
        </div>
      </div>
    </>
  );
};

export default PanelEvents;
