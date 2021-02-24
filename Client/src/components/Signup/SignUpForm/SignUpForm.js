import React from "react";

// COMPONENTS
import Input from "../../Input/Input";
import Warning from "../../Warning/Warning";
import ButtonForm from "../../ButtonForm/ButtonForm";
import FormFooter from "../../FormFooter/FormFooter";

//CSS FILES
import "./SignUpForm.css";

export default function SignUpForm(props) {
  const {
    email,
    password,
    username,
    setEmail,
    setUsername,
    setPassword,
    handlerOnSubmit,
    register,
    setRegister,
  } = props;

  const handlerOnChange = (e, setProp) => {
    const value = e.target.value;
    setProp(value);
  };

  const _handlerOnSubmit = async (e) => {
    e.preventDefault();

    setRegister({ ...register, message: "", loading: true, error: true });
    handlerOnSubmit(email, username, password);
  };

  return (
    <div className="form-wrapper-signup">
      <form className="form-body-signup" onSubmit={_handlerOnSubmit}>
        <h1 className="form-title-signup">Registrarse</h1>
        <Input
          id="email"
          title="Correo"
          type="email"
          value={email}
          placeholder="Ingresa tu correo"
          onChange={(e) => handlerOnChange(e, setEmail)}
        />
        <Input
          id="username"
          title="Nombre de usuario"
          type="text"
          value={username}
          placeholder="Ingresa tu nombre de usuario"
          onChange={(e) => handlerOnChange(e, setUsername)}
        />
        <Input
          id="password"
          title="Contraseña"
          type="password"
          value={password}
          placeholder="Ingresa una contraseña"
          onChange={(e) => handlerOnChange(e, setPassword)}
        />
        <ButtonForm loading={register.loading} message="Registrarse" />
        <Warning error={register.error} message={register.message} />
        <FormFooter
          message="¿Ya posees una cuenta?"
          route="/signIn"
          routeMessage="Ingresa"
        />
      </form>
    </div>
  );
}
