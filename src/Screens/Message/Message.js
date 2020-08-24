import React from "react";
import "./Message.css";
export default function (props) {
  return (
    <div className={"message"}>
      <p className={"message-step"}>Paso 1 of 3</p>
      <p className={"message-title"}>Crear Mensaje:</p>
      <p className={"message-text"}>
        Ingrese el Mensaje que te gustaria enviar.
      </p>
      <textarea
        value={props.message}
        onChange={props.change}
        className={"message-input"}
      />
      <button onClick={props.next} className={"theme-button"}>
        Siguiente
      </button>
      <button onClick={props.goBack} className={"cancel-button"}>
        Atras
      </button>
    </div>
  );
}
