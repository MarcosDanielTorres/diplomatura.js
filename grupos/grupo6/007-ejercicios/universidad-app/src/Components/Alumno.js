import React from "react";

const alumno = (props) => {
  return (
    <div className="Alumno">
      <p onClick={props.onClick}>{props.nombre}</p>
    </div>
  );
};

export default alumno;
