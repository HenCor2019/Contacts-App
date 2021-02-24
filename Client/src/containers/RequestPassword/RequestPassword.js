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
  const [data, setData] = useState({
    value: "",
    send: false,
    error: false,
    message: "",
    loading: false,
  });

  const handlerOnSubmit = async (data) => {

    await requestPassword(data).then((response) => {
      if (!response.error) {
        setData({ ...data, send: true, loading: false });
        return;
      }

      setData({
        ...data,
        send: false,
        error: true,
        message: response.message,
        loading: false,
      });

    }).catch(error => {
      setData({
        ...data,
        send: false,
        error: true,
        message: "Algo ha fallado",
        loading: false,
      });
      console.log( error )

    });
  };
  return (
    <Fragment>
      {data.send ? (
        <Register header={MESSAGE_SEND.header} body={MESSAGE_SEND.body} />
      ) : (
        <div className="request-password-container">
          <ScreenSplitLeft />
          <RequestPasswordForm
            data={data}
            setData={setData}
            handlerOnSubmit={handlerOnSubmit}
          />
          <ScreenSplitRight />
        </div>
      )}
    </Fragment>
  );
}
