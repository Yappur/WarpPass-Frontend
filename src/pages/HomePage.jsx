import React from "react";
import Card from "../components/Card";
import { IoTicket } from "react-icons/io5";
import { cambiarTitulo } from "../helpers/cambiarTitulos";

const HomePage = () => {
  cambiarTitulo("HomePage");
  return (
    <div>
      <div className="hero text-black bg-white">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2017/03/09112202/Los-Redondos-vieja-1920.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold flex">
              Bienvenido a WarpPass! <IoTicket className="text-[#b2b205]" />
            </h1>
            <p className="py-6">Tu sitio de venta de entradas Favorito</p>
            <button className="btn bg-[#2F314E] shadow-lg shadow-indigo-500/50 hover:bg-[#1A1B2D] transition-colors duration-300">
              <a href="/eventos">Mira los eventos</a>
            </button>
          </div>
        </div>
      </div>
      <div className="py-6 px-30">
        <h2 className="text-black text-3xl font-bold uppercase text-center">
          Eventos disponibles
        </h2>

        <div>
          <Card />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
