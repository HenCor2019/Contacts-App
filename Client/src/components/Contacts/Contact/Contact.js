import React from "react";
import ContactBody from "./ContactBody/ContactBody";

// css files
import "./Contact.css";

export default function Contact({ name, number, email }) {
  return (
    <div className="contact-container">
      <ContactBody title="Nombre" value={name} />
      <ContactBody title="Número de teléfono" value={number} />
      <ContactBody title="Correo electrónico" value={email} />
    </div>
  );
}
