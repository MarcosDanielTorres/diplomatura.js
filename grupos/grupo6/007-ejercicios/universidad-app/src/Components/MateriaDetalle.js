import React from "react";

const materiaDetalle = (props) => {
  return (
    <div className="MateriaDetalle" onClick={props.onClick}>
      <p>
        [{props.id}] {props.nombre} TODO: profesores.
      </p>
    </div>
  );
};

export default materiaDetalle;
