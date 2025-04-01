import React, { useState, useEffect } from "react";

const Navbar = () => {
  // Estado para controlar si el usuario está autenticado y su rol
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null); // 'user', 'producer', 'admin'
  const [menuOpen, setMenuOpen] = useState(false);

  // Simulación de verificación de autenticación - En una app real, esto vendría de tu contexto o estado global
  useEffect(() => {
    // Aquí deberías verificar la autenticación desde localStorage, sessionStorage o tu estado global
    // Por ejemplo, podrías usar localStorage:
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("userRole");

    if (token) {
      setIsAuthenticated(true);
      setUserRole(role || "user"); // Por defecto, si no hay rol, asumimos 'user'
    }
  }, []);

  // Función para cerrar sesión
  const handleLogout = () => {
    // Eliminar token y datos de sesión
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");
    setIsAuthenticated(false);
    setUserRole(null);
    // Redirigir a inicio
    window.location.href = "/";
  };

  // Función para toggle del menú móvil
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Enlaces de navegación según el rol
  const getNavLinks = () => {
    // Enlaces comunes para todos
    const commonLinks = [
      { name: "Inicio", path: "/" },
      { name: "Eventos", path: "/eventos" },
      { name: "Contacto", path: "/contacto" },
      { name: "Sobre Nosotros", path: "/about" },
    ];

    // Enlaces adicionales según el rol
    if (userRole === "admin") {
      return [
        ...commonLinks,
        { name: "Panel Admin", path: "/admin/dashboard" },
        { name: "Gestionar Usuarios", path: "/admin/usuarios" },
        { name: "Gestionar Eventos", path: "/admin/eventos" },
      ];
    } else if (userRole === "producer") {
      return [
        ...commonLinks,
        { name: "Mis Producciones", path: "/producer/events" },
        { name: "Crear Evento", path: "/producer/create" },
      ];
    } else {
      return commonLinks;
    }
  };

  return (
    <div className="navbar bg-[#2f314e] shadow-sm">
      <div className="navbar-start">
        <a className="" href="/">
          <figure className="flex">
            <img
              src="/warp.png"
              alt="logo"
              className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] lg:w-[90px] lg:h-[90px]"
            />
          </figure>
        </a>
      </div>

      {/* Menú para pantallas grandes */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {getNavLinks().map((link, index) => (
            <li key={index}>
              <a href={link.path}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-end gap-2">
        {isAuthenticated ? (
          <>
            {/* Mostrar información del usuario y botón de cerrar sesión cuando está autenticado */}
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className="btn bg-[#2F314E] shadow-lg shadow-indigo-500/50 hover:bg-[#1A1B2D]"
              >
                Mi Cuenta
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-[#2F314E] rounded-box w-52 mt-2"
              >
                <li>
                  <a
                    href={
                      userRole === "admin"
                        ? "/admin/profile"
                        : userRole === "producer"
                        ? "/producer/profile"
                        : "/user/profile"
                    }
                  >
                    Perfil
                  </a>
                </li>
                {userRole === "user" && (
                  <li>
                    <a href="/user/tickets">Mis Boletos</a>
                  </li>
                )}
                {userRole === "producer" && (
                  <li>
                    <a href="/producer/stats">Estadísticas</a>
                  </li>
                )}
                {userRole === "admin" && (
                  <li>
                    <a href="/admin/reports">Reportes</a>
                  </li>
                )}
                <li>
                  <a onClick={handleLogout}>Cerrar Sesión</a>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <>
            {/* Mostrar botones de inicio de sesión y registro cuando no está autenticado */}
            <button className="btn bg-[#2F314E] shadow-lg shadow-indigo-500/50 hover:bg-[#1A1B2D] transition-colors duration-300">
              <a href="/login">Iniciar Sesión</a>
            </button>
            <button className="btn bg-[#2F314E] shadow-lg shadow-indigo-500/50 hover:bg-[#1A1B2D] transition-colors duration-300">
              <a href="/register">Registrarse</a>
            </button>
          </>
        )}
      </div>

      {/* Botón del menú móvil */}
      <button className="md:hidden text-white ml-2" onClick={toggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Menú móvil desplegable */}
      {menuOpen && (
        <div className="md:hidden absolute top-[90px] right-0 left-0 bg-[#2f314e] z-50 p-4">
          <ul className="menu menu-vertical w-full">
            {getNavLinks().map((link, index) => (
              <li key={index}>
                <a href={link.path} onClick={toggleMenu}>
                  {link.name}
                </a>
              </li>
            ))}
            {isAuthenticated ? (
              <li>
                <a onClick={handleLogout}>Cerrar Sesión</a>
              </li>
            ) : (
              <>
                <li>
                  <a href="/login" onClick={toggleMenu}>
                    Iniciar Sesión
                  </a>
                </li>
                <li>
                  <a href="/register" onClick={toggleMenu}>
                    Registrarse
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
