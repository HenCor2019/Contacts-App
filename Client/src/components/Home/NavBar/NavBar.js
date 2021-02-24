import "./NavBar.css";
import React from "react";
import LinkPage from "../LinkPage/LinkPage";

export default function NavBar() {
  return (
    <ul className="links-home">
      <LinkPage route="/" name="inicio" />
      <LinkPage route="/who-are" name="¿Quienes somos?" />
      <LinkPage route="/SignUp" name="Registrarse" />
      <LinkPage route="/SignIn" name="Iniciar Sesión" />
    </ul>
  );
}
