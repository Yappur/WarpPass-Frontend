import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const GoogleAuth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    if (token) {
      sessionStorage.setItem("token", token);

      const payload = JSON.parse(atob(token.split(".")[1]));
      sessionStorage.setItem("rol", payload.rol);

      const ROL_ROUTES = {
        admin: "/admin",
        usuario: "/",
        productor: "/",
      };

      const redirectPath = ROL_ROUTES[payload.rol] || "/";
      navigate(redirectPath);
    } else {
      navigate("/");
    }
  }, []);

  return <p>Autenticando con Google...</p>;
};

export default GoogleAuth;
