import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaGoogle, FaUser, FaLock } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import axiosConfig from "../../helpers/axios.config";

const ROL_ROUTES = {
  admin: "/admin",
  usuario: "/",
  productor: "/",
};

const FormRegisterLogin = ({
  isLogin = false,
  redirectPath = "/login",
  subtitulo,
  ruta,
}) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    contrasenia: "",
    repetirContrasenia: "",
  });
  const [errors, setErrors] = useState({});

  const validarEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validarContrasenia = (contrasenia) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return regex.test(contrasenia);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[`error${name.charAt(0).toUpperCase() + name.slice(1)}`]) {
      setErrors((prev) => ({
        ...prev,
        [`error${name.charAt(0).toUpperCase() + name.slice(1)}`]: false,
      }));
    }
  };

  // Validación de formulario de registro
  const validateRegisterForm = () => {
    const { nombre, email, contrasenia, repetirContrasenia } = formData;
    const newErrors = {};
    let isValid = true;

    if (!nombre || nombre.length < 3) {
      newErrors.errorNombre = "El nombre debe tener al menos 3 caracteres";
      isValid = false;
    }

    if (!email || !validarEmail(email)) {
      newErrors.errorEmail = "Por favor, ingresa un email válido";
      isValid = false;
    }

    if (!contrasenia || !validarContrasenia(contrasenia)) {
      newErrors.errorContrasenia =
        "La contraseña debe tener al menos 8 caracteres, una letra y un número";
      isValid = false;
    }

    if (!repetirContrasenia || contrasenia !== repetirContrasenia) {
      newErrors.errorRepetirContrasenia = "Las contraseñas no coinciden";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const validateLoginForm = () => {
    const { email, contrasenia } = formData;
    const newErrors = {};
    let isValid = true;

    if (!email || !validarEmail(email)) {
      newErrors.errorEmail = "Por favor, ingresa un email válido";
      isValid = false;
    }

    if (!contrasenia) {
      newErrors.errorContrasenia = "Por favor, ingresa tu contraseña";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!validateRegisterForm()) return;

    try {
      const response = await axiosConfig.post("/auth/crearUsuario", {
        nombre: formData.nombre,
        email: formData.email,
        contrasenia: formData.contrasenia,
      });

      if (response.status === 201) {
        navigate(redirectPath);
      }
    } catch (error) {
      setErrors({
        serverError: error.response?.data?.msg || "Error al crear el usuario",
      });
    }
  };

  // Manejo de inicio de sesión
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateLoginForm()) return;

    try {
      const response = await axiosConfig.post("/auth/login", {
        email: formData.email,
        contrasenia: formData.contrasenia,
      });
      if (response.data.token) {
        sessionStorage.setItem("token", response.data.token);
        sessionStorage.setItem("rol", response.data.rol);

        const routeForRol = ROL_ROUTES[response.data.rol];

        if (routeForRol) {
          navigate(routeForRol);
        } else {
          navigate("/");
          setErrors({
            serverError: "Rol no reconocido",
          });
        }
      }
    } catch (error) {
      // Manejar errores de inicio de sesión
      setErrors({
        serverError: error.response?.data?.msg || "Credenciales incorrectas",
      });
    }
  };

  return (
    <div className="container ml-auto mr-auto flex items-center justify-center mt-10">
      <div className="w-full md:w-1/2">
        <form className="bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-10">
          {/* Campos de registro */}
          {!isLogin && (
            <div className="mb-4 ">
              <label
                className=" text-gray-700 text-sm font-bold mb-2 flex "
                htmlFor="nombre"
              >
                Nombre/s Y Apellido/s <FaUser className="ml-2 w-4 h-4" />
              </label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                placeholder="Nombre (mínimo 3 caracteres)"
                value={formData.nombre}
                onChange={handleChange}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.errorNombre ? "border-red-500" : ""
                }`}
              />
              {errors.errorNombre && (
                <p className="text-red-500 text-xs italic">
                  {errors.errorNombre}
                </p>
              )}
            </div>
          )}

          {/* Email */}
          <div className="mb-4">
            <label
              className="flex text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email <IoMail className="ml-2 w-5 h-5 " />
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.errorEmail ? "border-red-500" : ""
              }`}
            />
            {errors.errorEmail && (
              <p className="text-red-500 text-xs italic">{errors.errorEmail}</p>
            )}
          </div>

          {/* Contraseña */}
          <div className="mb-4">
            <label
              className="flex text-gray-700 text-sm font-bold mb-2"
              htmlFor="contrasenia"
            >
              Contraseña <FaLock className="ml-2 w-4 h-4 " />
            </label>
            <input
              id="contrasenia"
              name="contrasenia"
              type="password"
              placeholder={
                isLogin
                  ? "Contraseña"
                  : "Contraseña (mínimo 8 caracteres, incluir letra y número)"
              }
              value={formData.contrasenia}
              onChange={handleChange}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.errorContrasenia ? "border-red-500" : ""
              }`}
            />
            {errors.errorContrasenia && (
              <p className="text-red-500 text-xs italic">
                {errors.errorContrasenia}
              </p>
            )}
          </div>

          {/* Repetir Contraseña (solo en registro) */}
          {!isLogin && (
            <div className="mb-4">
              <label
                className="flex text-gray-700 text-sm font-bold mb-2"
                htmlFor="repetirContrasenia"
              >
                Repetir Contraseña <FaLock className="ml-2 w-4 h-4 " />
              </label>
              <input
                id="repetirContrasenia"
                name="repetirContrasenia"
                type="password"
                placeholder="Repetir Contraseña"
                value={formData.repetirContrasenia}
                onChange={handleChange}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.errorRepetirContrasenia ? "border-red-500" : ""
                }`}
              />
              {errors.errorRepetirContrasenia && (
                <p className="text-red-500 text-xs italic">
                  {errors.errorRepetirContrasenia}
                </p>
              )}
            </div>
          )}

          {/* Error de servidor */}
          {errors.serverError && (
            <div className="mb-4">
              <p className="text-red-500 text-xs italic">
                {errors.serverError}
              </p>
            </div>
          )}

          {/* Botón de submit */}
          <div className="mb-4">
            <button
              type="submit"
              onClick={isLogin ? handleLogin : handleRegister}
              className="bg-[#2F314E] hover:bg-[#1A1B2D] text-white font-bold py-2 px-4 rounded w-full transition-colors duration-500"
            >
              {isLogin ? "Iniciar Sesión" : "Registrarse"}
            </button>
          </div>
          <div>
            <div className="border-b border-[#aaaaaa] my-4"></div>
            {/* Botón de Google */}
            <div className="mb-4">
              <a
                href="http://localhost:4000/auth/google"
                className="border-1 border-black hover:bg-[#d5d5d89d] text-black font-bold py-2 px-4 rounded w-full flex justify-center items-center transition-colors duration-500"
              >
                <FaGoogle className="text-black mr-2" />
                {isLogin
                  ? "Iniciar Sesión con Google"
                  : "Registrarse con Google"}
              </a>
            </div>

            <div className=" text-black  font-bold ">
              <span className="text-center flex justify-center">
                {subtitulo}
                <a
                  className="ml-2 underline hover:text-[#4b5c91b9] transition-colors duration-500"
                  href={ruta}
                >
                  Click Aquí
                </a>
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormRegisterLogin;
