import React from "react";
import FormAuth from "../../components/formularios/FormAuth";
import { RiAccountBoxFill, RiAccountPinBoxFill } from "react-icons/ri";
import { FaUserCog } from "react-icons/fa";
import { cambiarTitulo } from "../../helpers/cambiarTitulos";

const RegisterPage = () => {
  cambiarTitulo("RegisterPage");
  return (
    <div>
      <div className=" mt-10 text-center justify-center flex">
        <h1 className=" text-3xl font-bold underline uppercase flex ">
          Registrarse
          <span>
            <FaUserCog className="mx-2 mt-1" />
          </span>
        </h1>
      </div>
      <div>
        <FormAuth
          isLogin={false}
          redirectPath="/login"
          subtitulo={"¿Ya tenes una cuenta? "}
          ruta={"/login"}
        />
      </div>
    </div>
  );
};

export default RegisterPage;
