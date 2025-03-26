import React, { useEffect, useState } from "react";
import axiosConfig from "../../helpers/axios.config";

const EventsTable = () => {
  const [cargarEventos, setcargarEventos] = useState([]);
  const listaEventos = async () => {
    try {
      const response = await axiosConfig.get("/eventos/obtenerEventos");
      setcargarEventos(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    listaEventos();
  }, []);
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table ">
          <thead>
            <tr className="text-[#b2b205] uppercase">
              <th>titulo</th>
              <th>descripcion</th>
              <th>lugar</th>
              <th>fecha</th>
              <th>hora</th>
              <th>precio</th>
              <th>cantidad</th>
              <th>imagen</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {cargarEventos.map((evento) => {
              return (
                <tr key={evento._id}>
                  <td>{evento.titulo}</td>
                  <td>{evento.descripcion}</td>
                  <td>{evento.lugar}</td>
                  <td>{evento.fecha}</td>
                  <td>{evento.hora}</td>
                  <td>{evento.precio}</td>
                  <td>{evento.cantidad}</td>
                  <td>{evento.imagen}</td>
                  <td></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default EventsTable;
