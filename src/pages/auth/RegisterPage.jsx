import React from "react";
import FormAuth from "../../components/formularios/FormAuth";
import { cambiarTitulo } from "../../helpers/cambiarTitulos";

const RegisterPage = () => {
  cambiarTitulo("RegisterPage");
  return (
    <div>
      <FormAuth isLogin={false} redirectPath="/login" />
    </div>
  );
};

export default RegisterPage;
