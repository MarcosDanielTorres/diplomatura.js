import React from "react";

const alumnoDetalle = (props) => {
  return (
    <div className="AlumnoDetalle">
      <p>
        [{props.id}] {props.nombre} edad: {props.edad}
      </p>
    </div>
  );
};

export default alumnoDetalle;
