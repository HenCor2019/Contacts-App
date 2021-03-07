import React from "react";

// CSS FILES
import "./Input.css";

export default function Input({
  id,
  title,
  type,
  value,
  onChange,
  placeholder,
}) {
  return (
    <div className="form__group field">
      <input
        type={type}
        className="form__field"
        placeholder={placeholder}
        htmlFor={id}
        id={id}
        value={value}
        onChange={onChange}
        required
      />
      <label htmlFor={id} className="form__label">
        {title}
      </label>
    </div>
  );
}
