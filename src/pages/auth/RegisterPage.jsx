import React from "react";
import FormAuth from "../../components/formularios/FormAuth";

const RegisterPage = () => {
  return (
    <div>
      <FormAuth isLogin={false} redirectPath="/login" />
    </div>
  );
};

export default RegisterPage;
