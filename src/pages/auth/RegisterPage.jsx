import React from "react";
import FormAuth from "../../components/formularios/FormAuth";

const RegisterPage = () => {
  return (
    <div>
      <FormAuth
        isLogin={false}
        showNameField={true}
        submitButtonText="Registrarse"
        redirectPath="/login"
      />
    </div>
  );
};

export default RegisterPage;
