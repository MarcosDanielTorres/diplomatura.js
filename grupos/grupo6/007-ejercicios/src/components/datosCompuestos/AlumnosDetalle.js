
import React from "react";

export default function AlumnosDetalle(props) {
    return (
      <div className = "containerDetalle">
        <h5>
          [{props.id}] nombre: {props.nombre} edad: {props.edad}
        </h5>
      </div>
    );
  }