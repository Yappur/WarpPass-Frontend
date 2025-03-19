import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const Card = () => {
  return (
    <a href="/verEvento">
      <div className="card bg-white shadow-lg hover:shadow-5xl transition-shadow hover:-translate-y-2 transition-transform duration-600">
        <figure>
          <img
            src="https://i0.statig.com.br/bancodeimagens/2o/yl/1v/2oyl1vo07twdwrjdmdymrns76.jpg"
            alt="Evento"
            className="w-full h-44 object-cover"
          />
        </figure>
        <div className="card-body text-black ">
          <p className="text-[#444444] flex items-center gap-1 bg-gray-100 p-2 rounded-lg w-30">
            {" "}
            <FaLocationDot className="text-lg" />
            UBICACION
          </p>
          <h2 className="card-title">Card Title</h2>
          <h3>Fecha</h3>
          {/* <div className="card-actions ">
          <button className="btn bg-[#2F314E] shadow-lg shadow-indigo-500/50">
            <a href="/about">Ver Detalles</a>
          </button>
        </div> */}
        </div>
      </div>
    </a>
  );
};

export default Card;
