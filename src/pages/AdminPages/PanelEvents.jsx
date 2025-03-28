import React from "react";
import EventTables from "../../components/Tables/EventsTable";

const PanelEvents = () => {
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
