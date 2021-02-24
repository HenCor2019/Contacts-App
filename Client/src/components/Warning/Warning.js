import React from "react";

// css files
import "./Warning.css";

export default function Warning({ error, message }) {
  return <p className={!error ? "message-success" : "message-err"}>{message}</p>;
}
