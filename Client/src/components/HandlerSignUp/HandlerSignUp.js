import { useParams } from "react-router";
import VerifiedSignUp from "./VerifiedSignUp";
import React, { Fragment, useState } from "react";
import { registerHandler } from "../../services/Services";

// css
import "./HandlerSignUp.css";

export default function HandlerSignUp() {
  const { token } = useParams();
  const [updated, setUpdated] = useState({
    verify: false,
    username: "",
    waiting: false,
  });

  const handlerEmail = async (e) => {
    e.preventDefault();
    setUpdated({ ...updated, waiting: true });

    if (updated.verify) return;

    const response = registerHandler(token);

    if (!response.error) {
      setUpdated({
        verify: true,
        username: response.username,
        waiting: false,
      });

      return;
    }

    setUpdated({ ...updated, waiting: false });

    return;
  };

  return (
    <Fragment>
      {!updated.verify ? (
        <div className="verify-email-wrapper">
          <h1 className="verify-email-message">
            Para verificar tu correo electrónico, por favor presiona el
            siguiente botón
          </h1>
          <button className="btn-verify-email" onClick={handlerEmail}>
            {!updated.waiting ? (
              "Verificar correo"
            ) : (
              <div className="spin"></div>
            )}
          </button>
        </div>
      ) : (
        <VerifiedSignUp username={updated.username} />
      )}
    </Fragment>
  );
}
