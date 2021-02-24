import React from "react";
import { Link } from "react-router-dom";
import "./LinkPage.css";

export default function LinkPage({ route, name }) {
  return (
    <li className="link-home">
      <Link to={route} className="redirect-link">
        {name}
      </Link>
    </li>
  );
}
