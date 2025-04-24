import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import App404 from "../pages/App404";
// import AboutPage from "../pages/staticPages/AboutPage";
import ContactPage from "../pages/staticPages/ContactPage";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import GoogleAuth from "../pages/auth/GoogleAuth";
import GaleriaEventos from "../pages/eventos/GaleriaEventos";
import VerEvento from "../pages/eventos/VerEvento";
import CrearEvento from "../pages/eventos/CrearEvento";
import HomeAdmin from "../pages/AdminPages/HomeAdmin";
import PanelUsers from "../pages/AdminPages/PanelUsers";
import PanelEvents from "../pages/AdminPages/PanelEvents";
import MiPerfil from "../pages/userPages/MiPerfil";
import MisEventos from "../pages/eventos/MisEventos";

const RutaProtegida = ({ children, RolesPermitidos }) => {
  const token = sessionStorage.getItem("token");
  const userRole = sessionStorage.getItem("rol");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (RolesPermitidos && !RolesPermitidos.includes(userRole)) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

const RoutesViews = () => {
  return (
    <Routes>
      {/* Rutas públicas */}
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/about" element={<AboutPage />} /> */}
      <Route path="/contacto" element={<ContactPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/auth/google" element={<GoogleAuth />} />
      <Route path="/eventos" element={<GaleriaEventos />} />
      <Route path="/ver/evento/:id" element={<VerEvento />} />

      {/* Rutas de usuario */}
      <Route
        path="/perfil"
        element={
          <RutaProtegida RolesPermitidos={["usuario", "productor", "admin"]}>
            <MiPerfil />
          </RutaProtegida>
        }
      />

      {/* Rutas de productor */}
      <Route
        path="/eventos/crearEvento"
        element={
          <RutaProtegida RolesPermitidos={["productor", "admin"]}>
            <CrearEvento />
          </RutaProtegida>
        }
      />
      <Route
        path="/eventos/misEventos"
        element={
          <RutaProtegida RolesPermitidos={["productor", "admin"]}>
            <MisEventos />
          </RutaProtegida>
        }
      />

      {/* Rutas de administrador */}
      <Route
        path="/admin"
        element={
          <RutaProtegida RolesPermitidos={["admin"]}>
            <HomeAdmin />
          </RutaProtegida>
        }
      />
      <Route
        path="/admin/panelUsers"
        element={
          <RutaProtegida RolesPermitidos={["admin"]}>
            <PanelUsers />
          </RutaProtegida>
        }
      />
      <Route
        path="/admin/panelEvents"
        element={
          <RutaProtegida RolesPermitidos={["admin"]}>
            <PanelEvents />
          </RutaProtegida>
        }
      />

      {/* Ruta 404 al final */}
      <Route path="*" element={<App404 />} />
    </Routes>
  );
};

export default RoutesViews;
