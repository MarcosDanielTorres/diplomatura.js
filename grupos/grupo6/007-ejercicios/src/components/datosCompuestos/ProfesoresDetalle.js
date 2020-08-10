
import React from "react";

export default function ProfesorDetalle(props) {
    return (
      <div className = "containerDetalle">
        <h5>
          [{props.id}] nombre: {props.nombre}
        </h5>
      </div>
    );
  }