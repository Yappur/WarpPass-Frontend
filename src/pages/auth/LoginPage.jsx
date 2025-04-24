import React from "react";
import FormAuth from "../../components/formularios/FormAuth";
import { cambiarTitulo } from "../../helpers/cambiarTitulos";
import { SlLogin } from "react-icons/sl";

const LoginPage = () => {
  cambiarTitulo("LoginPage");
  return (
    <div>
      <div className=" mt-10 text-center justify-center flex">
        <h1 className=" text-3xl font-bold underline uppercase flex ">
          Iniciar Sesión
          <span>
            <SlLogin className="mx-2 mt-1" />
          </span>
        </h1>
      </div>
      <div>
        <FormAuth
          isLogin={true}
          subtitulo={"¿No tenes una cuenta? "}
          ruta={"/register"}
        />
      </div>
    </div>
  );
};

export default LoginPage;
