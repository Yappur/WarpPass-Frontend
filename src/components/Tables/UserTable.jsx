import React, { useEffect, useState } from "react";
import axiosConfig from "../../helpers/axios.config";

const UserTables = () => {
  const [cargarUsuarios, setcargarUsuarios] = useState([]);

  const listaUsuarios = async () => {
    try {
      const response = await axiosConfig.get("/usuarios/obtenerUsuarios");
      setcargarUsuarios(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    listaUsuarios();
  }, []);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="text-[#b2b205] uppercase">
              <th>Nombre</th>
              <th>Email</th>
              <th>Rol</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {cargarUsuarios.map((usuario) => {
              return (
                <tr key={usuario._id}>
                  <td>{usuario.nombre}</td>
                  <td>{usuario.email}</td>
                  <td>{usuario.rol}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      ;
    </div>
  );
};

export default UserTables;
