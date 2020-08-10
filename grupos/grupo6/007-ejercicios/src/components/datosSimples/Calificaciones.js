import React from "react";

export default function Calificaciones(props) {
  return (
    <div className = "container">
      <div className = "row">
      <li className="list-group-item" onClick={props.clickDetalle}>
        Id: {props.id}
      </li>
      </div>
      <div className = "column">
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
