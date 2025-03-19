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
        <button className="btn bg-[#2F314E] shadow-lg shadow-indigo-500/50">
          <a href="/login">Iniciar Sesion</a>
        </button>
        <button className="btn bg-[#2F314E] shadow-lg shadow-indigo-500/50">
          <a href="/register">Registrarse</a>
        </button>
      </div>

      <button class="md:hidden text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
    </div>
  );
};

export default Navbar;
