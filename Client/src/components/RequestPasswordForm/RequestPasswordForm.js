import React from "react";

// COMPONENTS
import Input from "../Input/Input";
import Warning from "../Warning/Warning";
import ButtonForm from "../ButtonForm/ButtonForm";
import FormFooter from "../FormFooter/FormFooter";

//CSS FILES
import "./RequestPasswordForm.css";

const INSTRUCTIONS_MESSAGE =
  "Para obtener instrucciones para restablecer su contraseña, introduzca su dirección de correo electrónico o nombre de usuario a continuación";

export default function RequestPasswordForm({
  data,
  setData,
  status,
  setStatus,
  handlerOnSubmit,
}) {
  const handlerOnChange = (e, save) => {
    save(e.target.value);

    console.log({ data });
  };

  const _handlerOnSubmit = (e) => {
    e.preventDefault();
    setStatus({ ...status, error: false, message: "", loading: true });

    if (!data) {
      setStatus({
        ...status,
        error: true,
        message: "Ingresa un correo o usuario",
        loading: false,
      });
      return;
    }

    handlerOnSubmit(data);
  };

  return (
    <div className="form-wrapper-request">
      <form className="form-request" onSubmit={_handlerOnSubmit}>
        <h1 className="form-title-request">¿Olvidaste tu contraseña?</h1>
        <p className="form-message-request">{INSTRUCTIONS_MESSAGE}</p>
        <Input
          id="request"
          title="Usuario o correo"
          type="text"
          value={data}
          placeholder="Ingresa tu usuario o correo"
          onChange={(e) => handlerOnChange(e, setData)}
        />
        <ButtonForm loading={data.loading} message="Enviar solicitud" />
        <Warning error={status.error} message={status.message} />
        <FormFooter
          message="¿Olvidaste tu correo?"
          route="/"
          routeMessage="Recuperar correo"
        />
        <FormFooter
          message="¿Olvidaste tu usuario?"
          route="/"
          routeMessage="Recuperar usuario"
        />
      </form>
    </div>
  );
}
