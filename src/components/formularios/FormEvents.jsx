import { useState } from "react";
import axiosConfig from "../../helpers/axios.config";

const FormEvents = () => {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [lugar, setLugar] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [precio, setPrecio] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [imagen, setImagen] = useState("");

  const [errorMsg, setErrorMsg] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      titulo === "" ||
      !descripcion ||
      !lugar ||
      !fecha ||
      !hora ||
      !precio ||
      !cantidad ||
      !imagen
    ) {
      return console.log("error");
    }
    registrarEvento(
      titulo,
      descripcion,
      lugar,
      fecha,
      hora,
      precio,
      cantidad,
      imagen
    );
  };

  const registrarEvento = async (
    titulo,
    descripcion,
    lugar,
    fecha,
    hora,
    precio,
    cantidad,
    imagen
  ) => {
    try {
      const response = await axiosConfig.post("/eventos/crearEvento", {
        titulo,
        descripcion,
        lugar,
        fecha,
        hora,
        precio,
        cantidad,
        imagen,
      });
      if (response.status === 201) {
        alert("Evento creado exitosamente");
      }
    } catch (error) {
      setErrorMsg(error.response.data.msg);
    }
  };

  return (
    <>
      <div className="container ml-auto mr-auto flex items-center justify-center mt-25">
        <div className="w-full md:w-1/2">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <div className="grid grid-flow-row sm:grid-flow-col gap-6">
                {/* Titulo */}
                <div className="sm::col-span-4 justify-center">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    for="nya"
                  >
                    Titulo
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="nya"
                    type="text"
                    required
                    placeholder="Titulo"
                    onChange={(e) => setTitulo(e.target.value)}
                  />
                </div>
                {/* lugar */}
                <div className="sm::col-span-4 justify-center">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    for="nya"
                  >
                    Lugar
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="nya"
                    type="text"
                    required
                    placeholder="Ubicacion"
                    onChange={(e) => setLugar(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="contrasenia"
              >
                Descripcion
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                required
                placeholder="Descripcion"
                onChange={(e) => setDescripcion(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <div className="grid grid-flow-row sm:grid-flow-col gap-6">
                {/* Precio */}
                <div className="sm::col-span-4 justify-center">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    for="precio"
                  >
                    Precio
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="precio"
                    type="number"
                    required
                    placeholder="Precio"
                    onChange={(e) => setPrecio(e.target.value)}
                  />
                </div>
                {/* Cantidad */}
                <div className="sm::col-span-4 justify-center">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    for="cantidad"
                  >
                    Cupos
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="cantidad"
                    type="number"
                    required
                    placeholder="Cantidad"
                    onChange={(e) => setCantidad(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="mb-4">
              <div className="grid grid-flow-row sm:grid-flow-col gap-6">
                {/* Fecha */}
                <div className="sm::col-span-4 justify-center">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    for="fecha"
                  >
                    Fecha
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="fecha"
                    type="date"
                    required
                    onChange={(e) => setFecha(e.target.value)}
                  />
                </div>
                {/* Hora */}
                <div className="sm::col-span-4 justify-center">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    for="hora"
                  >
                    Hora
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="hora"
                    type="time"
                    required
                    onChange={(e) => setHora(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="imagen"
              >
                Imagen
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="url"
                id="imagen"
                required
                placeholder="https://example.com"
                onChange={(e) => setDescripcion(e.target.value)}
              />
            </div>

            <div>
              <button
                className="bg-[#2F314E] hover:bg-[#1A1B2D] text-white font-bold py-2 px-4 rounded"
                onClick={handleSubmit}
              >
                Subir Evento
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormEvents;
