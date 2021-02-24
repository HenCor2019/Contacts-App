import React, { Fragment } from "react";
import "./Banner.css";
import NavBar from "../NavBar/NavBar";
import Logo from "../Logo/Logo";
import Slogan from "../Slogan/Slogan";

export default function Banner() {
  return (
    <Fragment>
      <Logo title="HenCor" />
      <NavBar />
      <Slogan slogan="Lleva tus contactos al siguiente nivel" />
    </Fragment>
  );
}
