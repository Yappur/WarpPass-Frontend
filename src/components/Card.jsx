import React, { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import axiosConfig from "../helpers/axios.config";

const Card = () => {
  const [cargarEventos, setcargarEventos] = useState([]);
  const navigate = useNavigate();
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

  const handleCardClick = (eventoId) => {
    navigate(`/ver/evento/${eventoId}`);
  };

  return (
    <div className="m-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {cargarEventos.map((evento) => {
        return (
          <div
            key={evento._id}
            onClick={() => handleCardClick(evento._id)}
            className="cursor-pointer block h-full"
          >
            <div className="card bg-white shadow-lg hover:shadow-xl transition-shadow hover:-translate-y-2 transition-transform duration-300 h-full flex flex-col">
              <div className="h-44 w-full overflow-hidden">
                <img
                  src={evento.imagen}
                  alt="Evento"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="card-body text-black p-4 flex flex-col flex-grow">
                <div>
                  <p className="text-[#444444] inline-flex items-center gap-1 bg-gray-100 p-2 rounded-lg">
                    <FaLocationDot className="text-lg flex-shrink-0" />
                    <span className="truncate">{evento.lugar}</span>
                  </p>
                </div>
                <h2 className="card-title text-lg font-semibold mt-2 line-clamp-2">
                  {evento.titulo}
                </h2>
                <h2 className="text-sm mt-1">
                  {new Date(evento.fecha).toLocaleDateString("es-AR")}
                </h2>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
