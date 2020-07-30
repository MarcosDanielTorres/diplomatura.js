import React from "react";

const materia = (props) => {
  return (
    <div className="Materia" onClick={props.onClick}>
      <p>{props.nombre}</p>
    </div>
  );
};

export default materia;
