import React, { useState } from "react";
import axiosConfig from "../../helpers/axios.config";

const EventModal = ({ evento, isOpen, onClose, onUpdate }) => {
  const [formData, setFormData] = useState({
    titulo: evento.titulo || "",
    descripcion: evento.descripcion || "",
    lugar: evento.lugar || "",
    fecha: evento.fecha || "",
    hora: evento.hora || "",
    precio: evento.precio || "",
    cantidad: evento.cantidad || "",
    imagen: evento.imagen || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosConfig.put(
        `/eventos/editarEvento/${evento._id}`,
        formData
      );
      onUpdate(response.data);
      onClose();
    } catch (error) {
      console.error("Error updating event:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50 overflow-y-auto">
      <div className="bg-white p-6 rounded-lg w-full max-w-md m-4">
        <h2 className="text-2xl mb-4 textStyle">Editar Evento</h2>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <input
              type="text"
              name="titulo"
              value={formData.titulo}
              onChange={(e) => handleChange("titulo", e.target.value)}
              placeholder="Título"
              className="input input-bordered w-full"
              required
            />
            <textarea
              name="descripcion"
              value={formData.descripcion}
              onChange={(e) => handleChange("descripcion", e.target.value)}
              placeholder="Descripción"
              className="textarea textarea-bordered w-full"
              required
            />
            <input
              type="text"
              name="lugar"
              value={formData.lugar}
              onChange={(e) => handleChange("lugar", e.target.value)}
              placeholder="Lugar"
              className="input input-bordered w-full"
              required
            />
            <input
              type="date"
              name="fecha"
              value={formData.fecha}
              onChange={(e) => handleChange("fecha", e.target.value)}
              className="input input-bordered w-full"
              required
            />
            <input
              type="time"
              name="hora"
              value={formData.hora}
              onChange={(e) => handleChange("hora", e.target.value)}
              className="input input-bordered w-full"
              required
            />
            <input
              type="number"
              name="precio"
              value={formData.precio}
              onChange={(e) => handleChange("precio", e.target.value)}
              placeholder="Precio"
              className="input input-bordered w-full"
              required
            />
            <input
              type="number"
              name="cantidad"
              value={formData.cantidad}
              onChange={(e) => handleChange("cantidad", e.target.value)}
              placeholder="Cantidad"
              className="input input-bordered w-full"
              required
            />
            <input
              type="text"
              name="imagen"
              value={formData.imagen}
              onChange={(e) => handleChange("", e.target.value)}
              placeholder="URL de Imagen"
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex justify-end mt-6 space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="btn  btn-primary textStyle"
            >
              Cancelar
            </button>
            <button type="submit" className="btn  btn-primary textStyle">
              Guardar Cambios
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventModal;
