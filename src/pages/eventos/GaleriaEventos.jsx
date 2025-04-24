import React from "react";
import Card from "../../components/Card";
import { cambiarTitulo } from "../../helpers/cambiarTitulos";

const GaleriaEventos = () => {
  cambiarTitulo("GaleriaEventos");
  return (
    <div>
      <Card />
    </div>
  );
};

export default GaleriaEventos;
