import React, { Fragment, useState } from "react";

// COMPONENTS
import Register from "../../components/SignUp/Register/Register";
import RequestPasswordForm from "../../components/RequestPasswordForm/RequestPasswordForm";
import ScreenSplitLeft from "../../components/ScreenSplit/ScreenSplitLeft/ScreenSplitLeft";
import ScreenSplitRight from "../../components/ScreenSplit/ScreenSplitRight/ScreenSplitRight";

// CSS FILES
import "./RequestPassword.css";

// SERVICES
import { requestPassword } from "../../services/Services";

const MESSAGE_SEND = {
  header: "Enviado",
  body:
    "Ingresa a tu correo electrónico y sigue las indicaciones para obtener una nueva contraseña",
};
export default function RequestPassword() {
  const [data, setData] = useState("");
  const [status, setStatus] = useState({
    send: false,
    error: false,
    message: "",
    loading: false,
  });

  const handlerOnSubmit = async (field) => {
    await requestPassword(field)
      .then((response) => {
        if (!response.error) {
          setStatus({ ...status, send: true, loading: false });
          return;
        }

        setStatus({
          ...status,
          send: false,
          error: true,
          message: response.message,
          loading: false,
        });
      })
      .catch((error) => {
        setStatus({
          ...status,
          send: false,
          error: true,
          message: "Algo ha fallado",
          loading: false,
        });
        console.error(error);
      });
  };
  return (
    <Fragment>
      {status.send ? (
        <Register header={MESSAGE_SEND.header} body={MESSAGE_SEND.body} />
      ) : (
        <div className="request-password-container">
          <ScreenSplitLeft />
          <RequestPasswordForm
            data={data}
            setData={setData}
            status={status}
            setStatus={setStatus}
            handlerOnSubmit={handlerOnSubmit}
          />
          <ScreenSplitRight />
        </div>
      )}
    </Fragment>
  );
}
