import "./Submit.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Submit({ loading }) {
  return (
    <div className="submit-wrapper">
      <button className="btn-submit">
        {loading ? <div className="spin"></div> : "Entrar"}
      </button>
      <Link to="/request-password" className="recover-password-link">
        ¿Olvidaste tu contraseña?
      </Link>
    </div>
  );
}
