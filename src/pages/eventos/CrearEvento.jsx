import React from "react";
import FormEvents from "../../components/formularios/FormEvents";
import { cambiarTitulo } from "../../helpers/cambiarTitulos";

const CrearEvento = () => {
  cambiarTitulo("CrearEvento");
  return (
    <div>
      <FormEvents ruta={"/eventos/misEventos"} />
    </div>
  );
};

export default CrearEvento;
