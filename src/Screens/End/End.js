import React from "react";
import "./End.css";
export default function End(props) {
  return (
    <div>
      <div className={"end"}>
        <h3 className={"end-title"}>Felicitaciones</h3>
        <p className="end-description">Su mensaje se envío.</p>
        <button onClick={props.home} className="end-button">
          Home
        </button>
      </div>
    </div>
  );
}
