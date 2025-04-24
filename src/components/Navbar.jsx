import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");
  const role = sessionStorage.getItem("rol");

  const [isLogged, setIsLogged] = useState(!!token);
  const [isOpen, setIsOpen] = useState(false);

  const cerrarSesion = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("rol");

    setIsLogged(false);
    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  useEffect(() => {
    setIsLogged(!!token);
  }, [token]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const getHomeRoute = () => {
    if (!token) return "/";
    switch (role) {
      case "usuario":
        return "/";
      case "productor":
        return "/";
      case "admin":
        return "/admin";
      default:
        return "/";
    }
  };

  return (
    <nav className="bg-[#2f314e] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between ">
          <div className="flex items-center">
            <NavLink to={getHomeRoute()} className="flex-shrink-0">
              <img
                className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] lg:w-[90px] lg:h-[90px]"
                src="/warp.png"
                alt="Logo de la empresa"
              />
            </NavLink>
          </div>

          {/* Botón del menú móvil */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-blue-700 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menú principal</span>
              {/* Icono hamburguesa */}
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Icono X */}
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Enlaces de navegación para pantalla normal */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <NavLink
              to={getHomeRoute()}
              className="text-white  hover:text-white px-3 py-2 rounded-md text-sm font-medium relative group"
            >
              <span className="absolute bottom-8 left-0 w-full h-1 bg-[#ffffff5e] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-450"></span>
              Inicio
              <span className="absolute bottom-0 left-0 w-full h-1 bg-[#ffffff5e] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-450"></span>
            </NavLink>
            <NavLink
              to="/eventos"
              className="text-white hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Eventos
            </NavLink>
            <NavLink
              to="/contacto"
              className="text-white hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Contacto
            </NavLink>
            {/* Enlaces específicos según rol */}
            {role === "admin" && (
              <>
                <NavLink
                  to="/eventos/crearEvento"
                  className="text-white hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  ¡Crear Eventos!
                </NavLink>
                <NavLink
                  to="/admin/panelUsers"
                  className="text-white hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Panel Usuarios
                </NavLink>
                <NavLink
                  to="/admin/panelEvents"
                  className="text-white hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Panel Eventos
                </NavLink>
              </>
            )}

            {role === "productor" && (
              <>
                <NavLink
                  to="/eventos/crearEvento"
                  className="text-white hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  ¡Crear Eventos!
                </NavLink>
                <NavLink
                  to="/eventos/misEventos"
                  className="text-white hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Mis Eventos
                </NavLink>
                <NavLink
                  to="/eventos/ventas"
                  className="text-white hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Ventas
                </NavLink>
              </>
            )}
            {role === "usuario" && (
              <>
                {/* <NavLink
                  to="/sobre-nosotros"
                  className="text-white hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Sobre Nosotros
                </NavLink>
                <NavLink
                  to="/contacto"
                  className="text-white hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contacto
                </NavLink> */}
              </>
            )}
            {/* Enlaces de sesión */}
            {isLogged ? (
              <div className="flex items-center space-x-4">
                <NavLink
                  to="/perfil"
                  className="text-white hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Mi Perfil
                </NavLink>
                <button
                  onClick={cerrarSesion}
                  className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Cerrar Sesión
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <NavLink
                  to="/login"
                  className="text-white hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Iniciar Sesión
                </NavLink>
                <NavLink
                  to="/register"
                  className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Registrarse
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NavLink
            to={getHomeRoute()}
            className="text-white hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            Inicio
          </NavLink>
          <NavLink
            to="/planes"
            className="text-white hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            Planes
          </NavLink>
          <NavLink
            to="/galeria"
            className="text-white hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            Galería
          </NavLink>

          {/* Enlaces específicos según rol en móvil */}
          {role === "admin" && (
            <>
              <NavLink
                to="/admin/usuarios"
                className="text-white hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Panel Usuarios
              </NavLink>
              <NavLink
                to="/admin/productos"
                className="text-white hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Panel Productos
              </NavLink>
              <NavLink
                to="/admin/turnos"
                className="text-white hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Panel Turnos
              </NavLink>
            </>
          )}

          {role === "productor" && (
            <>
              <NavLink
                to="/productor/mis-productos"
                className="text-white hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Mis Productos
              </NavLink>
              <NavLink
                to="/productor/ventas"
                className="text-white hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Ventas
              </NavLink>
            </>
          )}

          {role === "usuario" && (
            <>
              {/* <NavLink
                to="/sobre-nosotros"
                className="text-white hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Sobre Nosotros
              </NavLink>
              <NavLink
                to="/contacto"
                className="text-white hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contacto
              </NavLink> */}
            </>
          )}

          {/* Enlaces de sesión en móvil */}
          {isLogged ? (
            <>
              <NavLink
                to="/mis-turnos"
                className="text-white hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Mis Turnos
              </NavLink>
              <button
                onClick={() => {
                  cerrarSesion();
                  setIsOpen(false);
                }}
                className="w-full text-left bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-md text-base font-medium"
              >
                Cerrar Sesión
              </button>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                className="text-white hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Iniciar Sesión
              </NavLink>
              <NavLink
                to="/register"
                className="bg-green-600 hover:bg-green-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Registrarse
              </NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
