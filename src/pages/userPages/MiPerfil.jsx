import React, { useState, useEffect } from "react";
import { cambiarTitulo } from "../../helpers/cambiarTitulos";
import axiosConfig from "../../helpers/axios.config";

const MiPerfil = () => {
  cambiarTitulo("Perfil");
  const [usuario, setUsuario] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerUsuario = async () => {
      try {
        const token = sessionStorage.getItem("token");

        if (!token) {
          setUsuario(null);
          setCargando(false);
          return;
        }

        const response = await axiosConfig.get("/usuarios/perfil");
        setUsuario(response.data);
        setCargando(false);
      } catch (error) {
        console.error("Error al obtener datos del usuario:", error);
        setError("Error al cargar los datos del usuario");
        setCargando(false);
      }
    };

    obtenerUsuario();
  }, []);

  if (cargando) return <div>Cargando información del usuario...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!usuario) return <div>No se encontró información del usuario</div>;

  return (
    <div className="flex justify-center items-center m-4 ">
      <div className="bg-white p-4 text-black shadow-lg shadow-indigo-500/50 rounded-lg m-4 ">
        <h2 className="text-2xl font-bold mb-4 flex justify-center  ">
          Mi Perfil
        </h2>
        <div className="flex flex-col">
          <div className="campo-perfil">
            <strong>Nombre: </strong>
            <span>{usuario.nombre}</span>
          </div>
          <div className="campo-perfil">
            <strong>Email: </strong>
            <span>{usuario.email}</span>
          </div>
          <div className="campo-perfil">
            <strong>Rol: </strong>
            <span>{usuario.rol}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiPerfil;
