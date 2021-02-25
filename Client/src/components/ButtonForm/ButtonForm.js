import React from "react";

// CSS FILES
import "./ButtonForm.css";

export default function ButtonForm({ loading, message }) {
  return (
    <button
      className={loading ? "btn-disable btn-submit-form" : "btn-submit-form"}
    >
      {loading ? <div className="spin"></div> : message}
    </button>
  );
}
