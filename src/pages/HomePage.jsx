import React from "react";
import Card from "../components/Card";

const HomePage = () => {
  return (
    <div>
      <div className="hero text-black bg-white">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Bienvenido a WarpPass!</h1>
            <p className="py-6">Tu sitio de venta de entradas Favorito</p>
            <button className="btn btn-primary">Mira los eventos</button>
          </div>
        </div>
      </div>
      <div className="py-6 px-30">
        <h2 className="text-black text-3xl font-bold uppercase text-center">
          Eventos disponibles
        </h2>

        <div className="m-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
