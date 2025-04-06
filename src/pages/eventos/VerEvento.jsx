import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import axiosConfig from "../../helpers/axios.config";

const VerEvento = () => {
  const [evento, setEvento] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const obtenerEvento = async () => {
      try {
        setLoading(true);
        const response = await axiosConfig.get(
          `/eventos/obtenerEventoPorId/${id}`
        );
        setEvento(response.data);
        setLoading(false);
      } catch (error) {
        setError("No se pudo cargar el evento");
        setLoading(false);
      }
    };

    obtenerEvento();
  }, [id]);

  if (loading) return <div className="text-center p-10">Cargando...</div>;
  if (error)
    return <div className="text-center p-10 text-red-500">{error}</div>;
  if (!evento)
    return <div className="text-center p-10">Evento no encontrado</div>;

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <div className=" rounded-lg shadow-lg overflow-hidden">
        <div className="h-144 w-full overflow-hidden">
          <img
            src={evento.imagen}
            alt={evento.titulo}
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {evento.titulo}
          </h1>

          <div className="flex items-center mb-4">
            <FaLocationDot className="text-lg text-gray-600 mr-2" />
            <span className="text-gray-600">{evento.lugar}</span>
          </div>

          <div className="mb-4">
            <p className="text-gray-700 font-semibold">Fecha:</p>
            <p className="text-gray-700 font-semibold">
              {new Date(evento.fecha).toLocaleDateString("es-AR", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>

          <div className="mb-6">
            <p className="text-gray-700 font-semibold">Descripción:</p>
            <p className="text-gray-600 mt-2">{evento.descripcion}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerEvento;
