import React from "react";
import CreateContactBody from "./CreateContactBody/CreateContactBody";

// css files
import "./CreateContact.css";
import CreateContactButtons from "./CreateContactBody/CreateContactButtons/CreateContactButtons";

export default function CreateContact(props) {
  const {
    name,
    setName,
    number,
    setNumber,
    email,
    setEmail,
    handlerOnSubmit,
    status,
    setStatus,
  } = props;

  const handlerOnCancel = () => {
    setName("");
    setNumber("");
    setEmail("");
  };

  const _handlerOnSubmit = async (e) => {
    e.preventDefault();
    setStatus({ message: "", error: false, loading: false });
    handlerOnSubmit(name, number, email);
  };

  return (
    <form className="new-contact" onSubmit={_handlerOnSubmit}>
      <CreateContactBody title="Nombre" value={name} setValue={setName} />
      <CreateContactBody
        title="Número de teléfono"
        value={number}
        setValue={setNumber}
      />
      <CreateContactBody
        title="Correo electrónico"
        value={email}
        setValue={setEmail}
      />
      {name || number || email ? (
        <CreateContactButtons
          status={status}
          handlerOnCancel={handlerOnCancel}
        />
      ) : (
        <></>
      )}
    </form>
  );
}
