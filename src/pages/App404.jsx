import React from "react";
import { cambiarTitulo } from "../helpers/cambiarTitulos";

const App404 = () => {
  cambiarTitulo("Pagina no encontrada :(");
  return <div>App404</div>;
};

export default App404;
