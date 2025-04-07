import axios from "axios";

const getToken = () => {
  return sessionStorage.getItem("token");
};

const axiosConfig = axios.create({
  baseURL: "http://localhost:4000",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosConfig.interceptors.request.use(
  (config) => {
    const token = getToken();

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosConfig.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 400:
          console.error("Error de solicitud:", error.response.data);
          break;
        case 401:
          console.error("No autorizado. Por favor, inicie sesión nuevamente.");
          break;
        case 403:
          console.error("Acceso prohibido");
          break;
        case 404:
          console.error("Recurso no encontrado");
          break;
        case 500:
          console.error("Error interno del servidor");
          break;
        default:
          console.error("Error desconocido:", error.message);
      }
    } else if (error.request) {
      console.error("No se recibió respuesta del servidor");
    } else {
      console.error("Error al configurar la solicitud:", error.message);
    }

    return Promise.reject(error);
  }
);

export default axiosConfig;
