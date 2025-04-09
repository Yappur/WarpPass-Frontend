import React from "react";
import FormAuth from "../../components/formularios/FormAuth";
import { cambiarTitulo } from "../../helpers/cambiarTitulos";

const LoginPage = () => {
  cambiarTitulo("LoginPage");
  return (
    <>
      <FormAuth
        isLogin={true}
        subtitulo={"¿No tenes una cuenta? "}
        ruta={"/register"}
      />
    </>
  );
};

export default LoginPage;
