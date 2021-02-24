import React from "react";
import "./VerifiedSignUp.css";
import EmailVerified from "../../img/Registrado.svg";

export default function VerifiedSignUp({ username }) {
  return (
    <div className="verified-email-wrapper">
      <h1 className="verified-email-message">
        Bienvenido a HenCor contactos <br /> <span>{username}</span>
      </h1>
      <img
        className="verified-email-img"
        src={EmailVerified}
        alt="verified email"
      />
    </div>
  );
}
