import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import App404 from "../pages/App404";
import AboutPage from "../pages/staticPages/AboutPage";
import ContactPage from "../pages/staticPages/ContactPage";
import LoginPage from "../pages/registros/LoginPage";
import RegisterPage from "../pages/registros/RegisterPage";
import GaleriaEventos from "../pages/eventos/GaleriaEventos";
import VerEvento from "../pages/eventos/VerEvento";
import CrearEvento from "../pages/eventos/CrearEvento";
import HomeAdmin from "../pages/AdminPages/HomeAdmin";
import PanelUsers from "../pages/AdminPages/PanelUsers";
import PanelEvents from "../pages/AdminPages/PanelEvents";

const RoutesViews = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<App404 />} />
        <Route path="/admin" element={<HomeAdmin />} />
        <Route path="/admin/panelUsers" element={<PanelUsers />} />
        <Route path="/admin/panelEvents" element={<PanelEvents />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="contacto" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        {/* <Route path="/eventos" element={<GaleriaEventos />} /> */}
        {/* <Route path="/ver/evento" element={<VerEvento />} /> */}
        <Route path="/eventos" element={<CrearEvento />} />
      </Routes>
    </>
  );
};

export default RoutesViews;
