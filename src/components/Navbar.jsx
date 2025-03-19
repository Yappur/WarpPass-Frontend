import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-[#2f314e] shadow-sm">
      <div className="navbar-start">
        <a className="" href="/">
          <figure>
            <img
              src="/warp.png"
              alt="logo"
              className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] lg:w-[90px] lg:h-[90px]"
            />
          </figure>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a>Eventos</a>
          </li>
          <li>
            <a href="/contacto">Contacto</a>
          </li>
          <li>
            <a href="/about">Sobre Nosotros</a>
          </li>
        </ul>
      </div>

      <div className="navbar-end gap-2">
        <a className="btn">Iniciar Sesion</a>
        <a className="btn">Registrarse</a>
      </div>
    </div>
  );
};

export default Navbar;
