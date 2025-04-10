import { useEffect, useState } from "react";
import Card from "../components/Card";
import { IoTicket } from "react-icons/io5";
import { FaMusic, FaCalendarAlt, FaStar } from "react-icons/fa";
import { cambiarTitulo } from "../helpers/cambiarTitulos";

const HomePage = () => {
  cambiarTitulo("HomePage");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div>
      <div className="relative overflow-hidden bg-gradient-to-b from-white to-gray-400 ">
        <div className="container mx-auto px-4 py-12 sm:py-20">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Columna de imagen */}
            <div
              className={`lg:w-1/2 transition-all duration-1000 transform ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-20 opacity-0"
              }`}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-[#2F314E]/10 rounded-lg blur-lg"></div>
                <img
                  src="https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2017/03/09112202/Los-Redondos-vieja-1920.jpg"
                  className="relative rounded-lg shadow-2xl w-full object-cover transform hover:scale-[1.02] transition-transform duration-500"
                  alt="Los Redondos"
                />
                <div className="absolute -bottom-4 -right-4 bg-[#b2b205] text-white p-3 rounded-lg shadow-lg">
                  <FaStar className="text-2xl" />
                </div>
              </div>
            </div>

            {/* Columna de contenido */}
            <div
              className={`lg:w-1/2 transition-all duration-1000 delay-300 transform ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-20 opacity-0"
              }`}
            >
              <div className="space-y-6">
                <div className="inline-block px-3 py-1 bg-[#2F314E]/10 rounded-full text-[#2F314E] font-medium text-sm mb-2">
                  ¡Vive la experiencia!
                </div>

                <h1 className="text-5xl md:text-6xl font-bold text-[#2F314E] flex items-center flex-wrap gap-3">
                  Bienvenido a
                  <span className="text-[#b2b205] relative group">
                    WarpPass
                    <span className="absolute bottom-2 left-0 w-full h-1 bg-[#b2b205]/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </span>
                  <IoTicket className="text-[#b2b205] text-5xl animate-pulse" />
                </h1>

                <p className="text-xl text-gray-600 max-w-lg">
                  Tu portal definitivo para conseguir entradas a los mejores
                  eventos musicales y culturales. ¡No te pierdas ningún
                  espectáculo!
                </p>

                <div className="flex pt-2">
                  <button className="btn bg-[#2F314E] text-white shadow-lg shadow-indigo-500/30 hover:bg-[#1A1B2D] transition-all duration-300 transform hover:-translate-y-1 px-8 py-3 rounded-lg font-medium flex items-center gap-2">
                    <FaCalendarAlt />
                    <a href="/eventos">Explorar eventos</a>
                  </button>
                </div>

                {/* Estadísticas */}
                <div className="flex flex-wrap gap-6 pt-6 text-center">
                  <div className="bg-white shadow-md rounded-lg px-4 py-3">
                    <div className="text-2xl font-bold text-[#2F314E]">
                      500+
                    </div>
                    <div className="text-sm text-gray-500">Eventos</div>
                  </div>
                  <div className="bg-white shadow-md rounded-lg px-4 py-3">
                    <div className="text-2xl font-bold text-[#2F314E]">
                      100k+
                    </div>
                    <div className="text-sm text-gray-500">Usuarios</div>
                  </div>
                  <div className="bg-white shadow-md rounded-lg px-4 py-3">
                    <div className="text-2xl font-bold text-[#2F314E]">50+</div>
                    <div className="text-sm text-gray-500">Ciudades</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decoración inferior */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2F314E] via-[#b2b205] to-[#2F314E]"></div>
      </div>

      {/* Sección de eventos disponibles */}
      <div className="py-16 px-4 container mx-auto">
        <div className="flex items-center justify-center gap-3 mb-12">
          <div className="h-0.5 w-12 bg-[#b2b205]"></div>
          <h2 className="text-5xl  uppercase  text-center relative group textStyle ">
            EVENTOS DISPONIBLES
            <span className="absolute bottom-0 left-0 w-full h-1 bg-[#b2b2057e] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </h2>
          <div className="h-0.5 w-12 bg-[#b2b205]"></div>
        </div>

        <div>
          <Card />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
