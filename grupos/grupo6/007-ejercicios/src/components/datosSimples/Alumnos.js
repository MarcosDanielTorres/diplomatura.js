import React from "react";
import "../../styles/components.css";
export default function Alumnos(props) {
  return (
    <div className="container">
      <div className="row">
        <li className="list-group-item" onClick={props.clickDetalle}>
          Nombre: {props.nombre}
        </li>
      </div>
      <div className="column">
        <button
          className=" eliminar btn btn-outline-danger"
          onClick={props.click}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}
