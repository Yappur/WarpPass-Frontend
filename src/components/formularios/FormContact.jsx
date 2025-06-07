import React from "react";

const FormContact = () => {
  return (
    <>
      <div className="container ml-auto mr-auto flex items-center justify-center ">
        <div className="w-full md:w-1/2">
          <form className="bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-10">
            <div className="mb-4">
              <label
                htmlFor="email"
                className=" text-gray-700 text-sm font-bold mb-2 flex "
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Escribi tu mail"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="asunto"
                className=" text-gray-700 text-sm font-bold mb-2 flex "
              >
                Asunto
              </label>
              <textarea
                type="text"
                name="asunto"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Escribi tu asunto y nos cotactaremos"
                required
              />
              <p className="text-gray-600 text-xs italic">
                Escribinos un mensaje y nos pondremos en contacto pronto
              </p>
            </div>
            <button
              type="submit"
              className="bg-[#2F314E] hover:bg-[#1A1B2D] text-white font-bold py-2 px-4 rounded w-full transition-colors duration-500 cursor-pointer"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormContact;
