import React, { useEffect, useState } from "react";
import axiosConfig from "../../helpers/axios.config";
import EventModal from "../Modals/EventModal";

const EventsTable = () => {
  const [cargarEventos, setcargarEventos] = useState([]);
  const [selectedEvento, setSelectedEvento] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const handleEdit = (evento) => {
    setSelectedEvento(evento);
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    try {
      const response = await axiosConfig.delete(
        `/eventos/eliminarEvento/${id}`
      );
      alert(response.data.msg);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateEventoDB = (updatedEvento) => {
    setcargarEventos((prevEventos) =>
      prevEventos.map((evento) =>
        evento._id === updatedEvento._id ? updatedEvento : evento
      )
    );
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedEvento(null);
  };
  return (
    <>
      <div className="overflow-x-auto  ">
        <table className="table bg-[#1a1b2d] w-[75%] mx-auto text-white text-sm font-semibold shadow-xl shadow-indigo-500/50 hover:shadow-2xl">
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
                  <td>
                    <button
                      className="btn bg-blue-600 mr-2 "
                      onClick={() => handleEdit(evento)}
                    >
                      Editar
                    </button>
                    <button
                      className="btn bg-red-600"
                      onClick={() => handleDelete(evento._id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {selectedEvento && (
        <EventModal
          evento={selectedEvento}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onUpdate={handleUpdateEventoDB}
        />
      )}
    </>
  );
};

export default EventsTable;
