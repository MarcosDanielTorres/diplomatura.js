import React from "react";
import "../App.css";

import Alumno from "../Components/Alumno";
import AlumnoDetalle from "../Components/AlumnoDetalle";

import Profesor from "../Components/Profesor";
import ProfesorDetalle from "../Components/ProfesorDetalle";

import Materia from "../Components/Materia";
import MateriaDetalle from "../Components/MateriaDetalle";

import Calificacion from "../Components/Calificacion";
import CalificacionDetalle from "../Components/CalificacionDetalle";

const alumnos = (alumnos, AppThis) => {
  let vistaActual = null;
  if (AppThis.state.idDetalleSeleccionado === -1) {
    vistaActual = (
      <div>
        {alumnos.map((alumno) => {
          return (
            <Alumno
              onClick={() =>
                AppThis.setVistaActual(AppThis.state.vistaActual, alumno)
              }
              nombre={alumno.nombre}
            />
          );
        })}
      </div>
    );
  } else {
    vistaActual = (
      <div>
        <AlumnoDetalle
          id={AppThis.state.idDetalleSeleccionado.id}
          nombre={AppThis.state.idDetalleSeleccionado.nombre}
          edad={AppThis.state.idDetalleSeleccionado.edad}
        />
      </div>
    );
  }

  return vistaActual;
};

const profesores = (profesores, AppThis) => {
  let vistaActual = null;
  if (AppThis.state.idDetalleSeleccionado === -1) {
    vistaActual = (
      <div>
        {profesores.map((profesor) => {
          return (
            <Profesor
              onClick={() =>
                AppThis.setVistaActual(AppThis.state.vistaActual, profesor)
              }
              nombre={profesor.nombre}
            />
          );
        })}
      </div>
    );
  } else {
    vistaActual = (
      <div>
        <ProfesorDetalle
          id={AppThis.state.idDetalleSeleccionado.id}
          nombre={AppThis.state.idDetalleSeleccionado.nombre}
        />
      </div>
    );
  }

  return vistaActual;
};

const materias = (materias, AppThis) => {
  let vistaActual = null;
  if (AppThis.state.idDetalleSeleccionado === -1) {
    vistaActual = (
      <div>
        {materias.map((materia) => {
          return (
            <Materia
              onClick={() =>
                AppThis.setVistaActual(AppThis.state.vistaActual, materia)
              }
              nombre={materia.nombre}
            />
          );
        })}
      </div>
    );
  } else {
    vistaActual = (
      <div>
        <MateriaDetalle
          id={AppThis.state.idDetalleSeleccionado.id}
          nombre={AppThis.state.idDetalleSeleccionado.nombre}
        />
      </div>
    );
  }

  return vistaActual;
};

const calificaciones = (calificaciones, AppThis) => {
  let vistaActual = null;
  if (AppThis.state.idDetalleSeleccionado === -1) {
    vistaActual = (
      <div>
        {calificaciones.map((calificacion) => {
          return (
            <Calificacion
              onClick={() =>
                AppThis.setVistaActual(AppThis.state.vistaActual, calificacion)
              }
              nombre={calificacion.nombre}
            />
          );
        })}
      </div>
    );
  } else {
    vistaActual = (
      <div>
        <CalificacionDetalle
          id={AppThis.state.idDetalleSeleccionado.id}
          nombre={AppThis.state.idDetalleSeleccionado.nombre}
          edad={AppThis.state.idDetalleSeleccionado.edad}
        />
      </div>
    );
  }

  return vistaActual;
};

const controller = {
  alumnos,
  profesores,
  materias,
  calificaciones,
};

export default controller;
