import React from "react";

// COMPONENTS
import ContactBody from "./ContactBody/ContactBody";

// CSS FILES
import "./Contact.css";

export default function Contact({ name, number, email }) {
  return (
    <div className="contact-container">
      <div className="principal-contact">
        <h1>{name}</h1>
        <p>Contacto</p>
      </div>
      <ContactBody title="Teléfono:" value={number} />
      <ContactBody title="Correo:" value={email} />
    </div>
  );
}
