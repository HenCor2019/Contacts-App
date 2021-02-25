import React from "react";
import { Link } from "react-router-dom";

// COMPONENTS
import Input from "../../Input/Input";
import FormFooter from "../../FormFooter/FormFooter";
import Warning from "../../Warning/Warning";

// CSS FILES
import "./SignInForm.css";

export default function SignInForm(props) {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handlerOnSubmit,
    login,
    setLogin,
  } = props;

  const handlerOnChange = (e, save) => save(e.target.value);

  const _handlerOnSubmit = (e) => {
    e.preventDefault();
    setLogin({ loading: true, message: "", error: false });
    if (!email || !password) {
      setLogin({
        loading: false,
        message: "Ingresa tus credenciales",
        error: true,
      });
      return;
    }

    handlerOnSubmit(email, password);
  };

  return (
    <div className="form-wrapper">
      <h1 className="form-title">
        Bienvenido a<br />
        <span>
          HenCor <span>contactos</span>
        </span>
      </h1>
      <form className="form-body" onSubmit={_handlerOnSubmit}>
        <Input
          id="email"
          type="email"
          title="Correo"
          value={email}
          placeholder="Ingresa tu correo"
          onChange={(e) => handlerOnChange(e, setEmail)}
        />
        <Input
          id="password"
          type="password"
          title="Contraseña"
          value={password}
          placeholder="Ingresa tu contraseña"
          onChange={(e) => handlerOnChange(e, setPassword)}
        />
        <div className="submit-wrapper">
          <button className="btn-submit">
            {login.loading ? <div className="spin"></div> : "Entrar"}
          </button>
          <Link to="/request-password" className="recover-password-link">
            ¿Olvidaste tu contraseña?
          </Link>
        </div>
        <Warning {...login} />
        <FormFooter
          message="¿No posees una cuenta?"
          route="/signUp"
          routeMessage="Registrarse"
        />
        <FormFooter
          message="¿Olvidaste tu correo?"
          route="/request-password"
          routeMessage="Recuperar correo"
        />
      </form>
    </div>
  );
}
