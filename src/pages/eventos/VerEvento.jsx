import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
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

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );

  if (error)
    return (
      <div className="text-center p-10 bg-red-50 rounded-lg">
        <p className="text-red-600 font-semibold text-xl">{error}</p>
      </div>
    );

  if (!evento)
    return (
      <div className="text-center p-10 bg-yellow-50 rounded-lg">
        <p className="text-yellow-600 font-semibold text-xl">
          Evento no encontrado
        </p>
      </div>
    );

  const fechaEvento = new Date(evento.fecha);
  const fechaFormateada = fechaEvento.toLocaleDateString("es-AR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const horaFormateada = evento.hora
    ? new Date(`2000-01-01T${evento.hora}`).toLocaleTimeString("es-AR", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      })
    : null;

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <div className=" rounded-xl shadow-xl overflow-hidden">
        {/* Grid principal que divide contenido e imagen */}
        <div className="grid md:grid-cols-2 gap-15">
          {/* Columna izquierda - Información del evento */}
          <div className="bg-white p-6 md:p-8 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {evento.titulo}
              </h1>

              {/* Ubicación */}
              <div className="flex items-center mb-4">
                <FaLocationDot className="text-xl text-rose-600 mr-2" />
                <span className="text-xl text-gray-700">{evento.lugar}</span>
              </div>

              {/* Fecha */}
              <div className="flex items-center mb-4">
                <FaCalendarAlt className="text-xl text-indigo-600 mr-2" />
                <span className="text-lg text-gray-700 capitalize">
                  {fechaFormateada}
                </span>
              </div>

              {/* Hora*/}
              {horaFormateada && (
                <div className="flex items-center mb-4">
                  <FaClock className="text-xl text-green-600 mr-2" />
                  <span className="text-lg text-gray-700">
                    {horaFormateada}
                  </span>
                </div>
              )}

              <div className="border-b border-gray-400"></div>

              {/* Descripción */}
              <div className="mt-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  Descripción
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {evento.descripcion}
                </p>
              </div>
            </div>

            <div className="border-b border-gray-400 mt-6"></div>
          </div>

          {/* Columna derecha - Imagen */}
          <div className="h-full object-cover">
            <div className=" w-full">
              <img
                src={evento.imagen || "/placeholder.svg"}
                alt={evento.titulo}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="bg-white p-6 md:p-8 flex flex-col justify-between">
              {/* Botones de acción (si los necesitas) */}
              <div className="mt-8 flex flex-wrap gap-3">
                {evento.precio && (
                  <div className="bg-green-50 px-4 py-2 rounded-lg">
                    <span className="text-green-800 font-semibold">
                      Precio: ${evento.precio}
                    </span>
                  </div>
                )}
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300">
                  Inscribirse
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Cantidad de personas: {evento.cantidad}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerEvento;
