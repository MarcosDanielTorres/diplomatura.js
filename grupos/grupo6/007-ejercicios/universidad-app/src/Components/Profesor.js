import React from "react";

const profesor = (props) => {
  return (
    <div className="Profesor" onClick={props.onClick}>
      <p>{props.nombre}</p>
    </div>
  );
};

export default profesor;
