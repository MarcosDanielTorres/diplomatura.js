
import React from "react";

export default function CalificacionesDetalle(props) {
    return (
      <div className = "containerDetalle">
        <h5>
          [{props.id}] alumno: {props.alumno} materia: {props.materia} nota: {props.nota}
        </h5>
      </div>
    );
  }