import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import App404 from "../pages/App404";
import AboutPage from "../pages/AboutPage";
import LoginPage from "../pages/registros/LoginPage";
import RegisterPage from "../pages/registros/RegisterPage";

const RoutesViews = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<App404 />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
};

export default RoutesViews;
