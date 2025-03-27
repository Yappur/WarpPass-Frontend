import React from "react";
import FormAuth from "../../components/formularios/FormAuth";

const LoginPage = () => {
  return (
    <>
      <FormAuth
        isLogin={true}
        showNameField={false}
        submitButtonText="Iniciar Sesión"
        redirectPath="/"
      />
    </>
  );
};

export default LoginPage;
