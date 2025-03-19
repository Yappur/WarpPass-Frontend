import React from "react";

const Card = () => {
  return (
    <div className="card bg-white shadow-lg hover:shadow-5xl transition-shadow hover:-translate-y-2 transition-transform duration-600">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
          className="w-full h-44 object-cover"
        />
      </figure>
      <div className="card-body text-black ">
        <p className="text-[#444444]">UBICACION</p>
        <h2 className="card-title">Card Title</h2>
        <h3>Fecha</h3>
        <div className="card-actions ">
          <button className="btn bg-[#2F314E] shadow-lg shadow-indigo-500/50">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
