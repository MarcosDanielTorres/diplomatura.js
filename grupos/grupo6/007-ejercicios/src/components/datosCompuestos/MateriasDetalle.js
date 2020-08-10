import React from "react";

export default function MateriasDetalle(props) {
  return (
    <div className = "containerDetalle">
      <h5>
        [{props.id}] nombre: {props.nombre} profesores: [{props.profesores}]
      </h5>
    </div>
  );
}
