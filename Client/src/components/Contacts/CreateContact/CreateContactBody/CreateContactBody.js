import React from "react";

// css files
import "./CreateContactBody.css";

export default function CreateContactBody({ title, value, setValue }) {
  const onChange = (e, save) => {
    save(e.target.value);
    console.log("estoy guardando");
  };

  return (
    <div>
      <input
        type="text"
        id={title}
        className="new-contact-body-input"
        value={value}
        onChange={(e) => onChange(e, setValue)}
      />
      <label htmlFor={title} className="new-contact-body-label">
        {title}
      </label>
    </div>
  );
}
