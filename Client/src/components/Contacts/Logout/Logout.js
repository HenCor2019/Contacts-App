import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

// CONTEXT
import UserContext from "../../../context/UserContext";

// CSS FILES
import "./Logout.css";

// ICONS
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Logout() {
  const { userToken } = useContext(UserContext);
  const history = useHistory();

  const handlerOnLogout = (e) => {
    e.preventDefault();
    userToken(null);
    window.localStorage.clear();
    history.push("/");
  };

  return (
    <button className="btn-logout" onClick={handlerOnLogout}>
      Salir
      <FontAwesomeIcon icon={faArrowRight} className="logout-arrow-right" />
    </button>
  );
}
