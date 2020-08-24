import React, { useState } from "react";
import "./Audience.css";
import plus from "./plus.svg";
import MultiAudience from "../MultiAudience/MultiAudience";


export default function Audience(props) {
  const [phones, setPhones] = useState([]);
  const [mphones, setMphones] = useState([]);
  

  const addPhone = () => {
    const arr = [];
    setPhones([...phones, arr]);
  };

  const inputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    let newArr = [...phones];
    newArr[name] = value;
    setPhones(newArr);
    
  };

  const removeField = (index) => {
    const arr = [...phones];
    arr.splice(index, 1);
    setPhones(arr);
  };

  const sendMessage = () => {
    const numbers = Object.values(phones);
    props.send(numbers);
    props.end();
  };

  return (
    <div>
      <div className={"audience"}>
        <p className={"audience-step"}>Paso 2 de 3</p>
        <p className="audience-title">Crear Grupo de Números teléfonicos</p>
        <p className="audience-description">
          Agrega los Números de teléfono con el formato Internacional e.j +58
          04140000000
        </p>
       
        <MultiAudience mphones={mphones} sMphones={setMphones} phones={setPhones}/>
        {phones.map((item, index) => (
          <div className="audience-numbers" key={index}>
            <input
              className={"audience-input"}
              name={index}
              value={phones[index] || ""}
              onChange={inputChange}
              type="text"
            />
            <span
              className={"audience-input-text"}
              onClick={() => removeField(index)}
            >
              Eliminar
            </span>
          </div>
        ))}

        <p className={"audience-add-phone"}>
          <img
            src={plus}
            onClick={addPhone}
            className={"audience-plus-button"}
            alt={"plus button"}
          />
          <span>Agregue Número Telefónico</span>
        </p>

        <button className={"audience-send-button"} onClick={sendMessage}>
          Enviar Mensaje
        </button>

        <button onClick={props.goBack} className={"cancel-button"}>
          Atras
        </button>
      </div>
    </div>
  );
}
