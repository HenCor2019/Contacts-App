import React, { Fragment, useContext, useState } from "react";
import { useHistory } from "react-router-dom";

//COMPONENTS
import LoginImg from "./../../img/contacts_login.svg";
import SignInForm from "../../components/SignIn/SignInForm/SignInForm";
import SocialMedia from "../../components/SignIn/Social-Media/SocialMedia";

// CSS FILES
import "./SignIn.css";

// SERVICES
import { login } from "../../services/Services";

//CONTEXT
import UserContext from "../../context/UserContext";

export default function SignIn() {
  const history = useHistory();
  const { tokenId, userToken } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginChecked, setLoginChecked] = useState({
    loading: false,
    message: "",
    error: false,
  });

  const handlerOnSubmit = async (email, password) => {
    await login(email, password)
      .then((response) => {
        if (!response.error) {
          setLoginChecked({ ...loginChecked, loading: false, message: "" });
          userToken(response.token);
          window.localStorage.setItem("token", response.token);
          return;
        }

        setLoginChecked({
          loading: false,
          error: true,
          message: response.message,
        });
      })
      .catch((error) => {
        setLoginChecked({
          loading: false,
          error: true,
          message: "Algo ha fallado",
        });
        console.error(error);
      });
  };

  return (
    <Fragment>
      {!tokenId ? (
        <div className="wrapper">
          <div className="left-color"></div>
          <SignInForm
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handlerOnSubmit={handlerOnSubmit}
            login={loginChecked}
            setLogin={setLoginChecked}
          />
          <div className="right-color">
            <img
              src={LoginImg}
              alt="login contacts support"
              className="right-img"
            />
            <SocialMedia />
          </div>
        </div>
      ) : (
        history.push("/my-contacts")
      )}
    </Fragment>
  );
}
