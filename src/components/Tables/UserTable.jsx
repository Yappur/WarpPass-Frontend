import React, { useEffect, useState } from "react";
import axiosConfig from "../../helpers/axios.config";

const UserTables = () => {
  const [cargarUsuarios, setcargarUsuarios] = useState([]);
  const [usuarioEditando, setUsuarioEditando] = useState(null);
  const [rolSeleccionado, setRolSeleccionado] = useState("");

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

  const handleDelete = async (id) => {
    try {
      const response = await axiosConfig.delete(
        `/usuarios/eliminarUsuario/${id}`
      );
      alert(response.data.msg);
      listaUsuarios();
    } catch (error) {
      console.log(error);
    }
  };

  const cambiarRol = async (id, nuevoRol) => {
    try {
      await axiosConfig.put(`/usuarios/cambiarRol/${id}`, { rol: nuevoRol });
      listaUsuarios();
    } catch (error) {
      console.log(error);
      alert("Error al cambiar el rol");
    }
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-[75%] mx-auto text-white text-sm font-semibold shadow-xl shadow-indigo-500/50 hover:shadow-2xl bg-[#1a1b2d]">
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
                  <td>
                    <select
                      value={usuario.rol}
                      onChange={(e) => cambiarRol(usuario._id, e.target.value)}
                      className="select select-sm bg-gray-700 text-white shadow-lg shadow-indigo-500/50 hover:shadow-xl"
                    >
                      <option value="usuario">Usuario</option>
                      <option value="productor">Productor</option>
                      <option value="admin">Admin</option>
                    </select>
                  </td>
                  <td>
                    <button
                      className="btn bg-red-600 hover:bg-red-800 text-white shadow-lg shadow-indigo-500/50 hover:shadow-xl active:scale-95 transition-all duration-300"
                      onClick={() => handleDelete(usuario._id)}
                    >
                      Eliminar
                    </button>
                  </td>
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
