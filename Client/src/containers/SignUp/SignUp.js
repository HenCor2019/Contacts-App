import React, { Fragment, useState } from "react";

// COMPONENTS
import Register from "../../components/SignUp/Register/Register";
import SignUpForm from "../../components/SignUp/SignUpForm/SignUpForm";
import ScreenSplitLeft from "../../components/ScreenSplit/ScreenSplitLeft/ScreenSplitLeft";
import ScreenSplitRight from "../../components/ScreenSplit/ScreenSplitRight/ScreenSplitRight";

// CSS FILES
import "./SignUp.css";

// SERVICES
import { registerUser } from "../../services/Services";

const MESSAGE_SEND = {
  header: "Enviado",
  body:
    "Ingresa a tu dirección de correo electrónico y sigue las instrucciones",
};

export default function SignUp() {
  const [register, setRegister] = useState({
    message: "",
    error: false,
    loading: false,
    success: false,
  });
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handlerOnSubmit = async (email, username, password) => {
    await registerUser(email, username, password)
      .then((response) => {
        if (!response.error) {
          setRegister({ ...register, loading: false, success: true });
          return;
        }

        setRegister({
          ...register,
          message: response.message,
          success: false,
          error: true,
          loading: false,
        });
        return;
      })
      .catch((error) => {
        setRegister({
          ...register,
          success: false,
          message: error.message,
          error: true,
          loading: false,
        });
      });
  };

  return (
    <Fragment>
      {!register.success ? (
        <div className="sign-up-wrapper">
          <ScreenSplitLeft />
          <SignUpForm
            email={email}
            username={username}
            password={password}
            setEmail={setEmail}
            setUsername={setUsername}
            setPassword={setPassword}
            handlerOnSubmit={handlerOnSubmit}
            register={register}
            setRegister={setRegister}
          />
          <ScreenSplitRight />
        </div>
      ) : (
        <Register {...MESSAGE_SEND} />
      )}
    </Fragment>
  );
}
