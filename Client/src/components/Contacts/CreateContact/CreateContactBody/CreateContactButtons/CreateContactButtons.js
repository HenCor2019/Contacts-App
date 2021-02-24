import React, { Fragment } from "react";
import Warning from "../../../../Warning/Warning";

// css files
import "./CreateContactButtons.css";

export default function CreateContactButtons({ status, handlerOnCancel }) {
  return (
    <Fragment>
      <div className="create-buttons-flex">
        <button
          className="btn-cancel-contact btn-create"
          onClick={handlerOnCancel}
        >
          Cancelar
        </button>
        <button className="btn-create-contact btn-create">Crear</button>
      </div>
      <Warning {...status} />
    </Fragment>
  );
}
