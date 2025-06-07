import React from "react";
import FormContact from "../../components/Formularios/FormContact";
import { cambiarTitulo } from "../../helpers/cambiarTitulos";

const ContactPage = () => {
  cambiarTitulo("ContactPage");
  return (
    <>
      <div>
        <div className=" mt-10 text-center justify-center flex">
          <h1 className=" text-3xl font-bold underline uppercase flex ">
            Contactanos
            <span></span>
          </h1>
        </div>
        <div className="mt-10">
          <FormContact />
        </div>
      </div>
    </>
  );
};

export default ContactPage;
