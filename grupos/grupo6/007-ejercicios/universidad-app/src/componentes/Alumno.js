import React from "react";

export default function Alumno(props) {
  return (
    <>
      <h3>
        nombre: {props.propiedades.nombre}, edad: {props.propiedades.edad}
      </h3>
    </>
  );
}
