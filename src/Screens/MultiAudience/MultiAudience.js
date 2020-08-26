import React from "react";

import CSVReader from 'react-csv-reader';
import "./MultiAudience.css";


export default function (props) {
  const addPhones = () => {
    if (props.mphones.length > 0){
      const arr = Object.values(mphones);
       props.phones(arr) 
       
    }
    else {
      alert("Debe Seleccionar un archivo CSV valido !!");
    }
  }
  return (
    <div className="input-group">
    <CSVReader
      cssClass="react-csv-input"
      onFileLoaded={(data) =>  props.sMphones(data)}
    />
     <div className="input-group-append">
      <button className={"send-button"} onClick={addPhones}>
          Cargar
        </button>
        </div>
  </div>
  );
}
