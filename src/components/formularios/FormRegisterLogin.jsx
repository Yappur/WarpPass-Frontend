import { useState } from "react";
import axiosConfig from "../../helpers/axios.config";

const FormRegisterLogin = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [contrasenia, setContrasenia] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre === "" || !email || !contrasenia) {
      return console.log("error");
    }
    registrarUsuario(nombre, email, contrasenia);
  };

  const registrarUsuario = async (nombre, email, contrasenia) => {
    try {
      const response = await axiosConfig.post("/usuarios/crearUsuario", {
        nombre,
        email,
        contrasenia,
      });
      if (response.status === 201) {
        alert("Usuario creado exitosamente");
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
                {/* nombres y apellidos */}
                <div className="sm::col-span-4 justify-center">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    for="nya"
                  >
                    Nombres y Apellidos
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="nya"
                    type="text"
                    required
                    placeholder="Carlos Rodriguez"
                    onChange={(e) => setNombre(e.target.value)}
                  />
                </div>
                {/* email */}
                <div className="sm::col-span-4 justify-center">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    for="email"
                  >
                    Gmail
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    required
                    placeholder="Carlos@gmail.com"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="contrasenia"
              >
                Contraseña
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="contrasenia"
                type="password"
                required
                placeholder="********"
                onChange={(e) => setContrasenia(e.target.value)}
              />
              <p className="text-gray-500 text-sm">
                La contraseña tiene que tener 8 digitos y un numero
              </p>
            </div>
            {/* <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="contrasenia"
              >
                Repetir Contraseña
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="contrasenia"
                type="password"
                required
                placeholder="********"
                onChange={(e) => setContrasenia(e.target.value)}
              />
              <p className="text-gray-500 text-sm">
                Las contraseñas tiene que ser iguales
              </p>
            </div> */}
            <div>
              <button
                className="bg-[#2F314E] hover:bg-[#1A1B2D] text-white font-bold py-2 px-4 rounded"
                onClick={handleSubmit}
              >
                Registrarse
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormRegisterLogin;
