import React, { Fragment } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";

//CSS FILES
import "./RequestPasswordHandlerForm.css";

// COMPONENTS
import Input from "../Input/Input";
import ButtonForm from "../ButtonForm/ButtonForm";
import Warning from "../Warning/Warning";

const INSTRUCTIONS_MESSAGE = "Introduce a continuación tu nueva contraseña";

export default function RequestPasswordHandlerForm(props) {
  const { password, setPassword, status, setStatus, handlerOnSubmit } = props;

  const history = useHistory();

  const { token } = useParams();

  const handlerOnChange = (e, save) => save(e.target.value);

  const _handlerOnSubmit = async (e) => {
    e.preventDefault();

    setStatus({ ...status, error: false, loading: true, message: "" });

    if (!password) {
      setStatus({
        ...status,
        error: true,
        loading: false,
        message: "Introduce tu nueva contraseña",
      });
      return;
    }

    handlerOnSubmit(password, token);
  };

  return (
    <Fragment>
      {token ? (
        <div className="form-wrapper-request">
          <form className="form-request" onSubmit={_handlerOnSubmit}>
            <h1 className="form-title-request">Recuperación de contraseña</h1>
            <p className="form-message-request">{INSTRUCTIONS_MESSAGE}</p>
            <Input
              id="password"
              title="Nueva contraseña"
              type="password"
              value={password}
              placeholder="Ingresa tu nueva contraseña"
              onChange={(e) => handlerOnChange(e, setPassword)}
            />
            <ButtonForm
              loading={status.loading}
              message="Restablecer contraseña"
            />
            <Warning error={status.error} message={status.message} />
          </form>
        </div>
      ) : (
        history.push("/")
      )}
    </Fragment>
  );
}
