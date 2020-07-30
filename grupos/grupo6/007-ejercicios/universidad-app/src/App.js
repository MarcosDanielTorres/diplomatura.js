import React from "react";
import Alumno from "./componentes/Alumno";
import Profesor from "./componentes/Profesor";
import "./App.css";
import db from "./datos/index";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      vistaActual: "alumnos",
      idDetalleSeleccionado: -1,
      alumnos: db.alumnos,
      profesores: db.profesores,
      materias: db.materias,
      calificaciones: db.calificaciones,
    };
  }

  /**
   * Se utiliza para disparar el cambio de vista.
   * Si viene un id seleccionado, se setea como el detalle actual.
   * @param {*} vista
   * @param {*} idSeleccionado
   */
  setVistaActual(vista, idSeleccionado) {
    const newState = { vistaActual: vista };

    if (idSeleccionado) {
      newState.idDetalleSeleccionado = idSeleccionado;
    } else {
      newState.idDetalleSeleccionado = -1;
    }

    this.setState(newState);
  }

  handler() {
    if (this.state.idDetalleSeleccionado === -1) {
      return db[this.state.vistaActual].map((item) => (
        <li
          key={item.id}
          onClick={() => this.setState({ idDetalleSeleccionado: item.id })}
        >
          {item.nombre}
        </li>
      ));
    } else {
      switch (this.state.vistaActual) {
        case "alumnos":
          return (
            <Alumno
              propiedades={
                db[this.state.vistaActual][this.state.idDetalleSeleccionado - 1]
              }
            />
          );
        case "profesores":
          return (
            <Profesor
              propiedades={
                db[this.state.vistaActual][this.state.idDetalleSeleccionado - 1]
              }
            />
          );
      }
    }
  }

  render() {
    const vistaActual = (
      <div>
        <ul>{this.handler()}</ul>
      </div>
    );

    return (
      <div className="App">
        <header className="alert alert-info">Diplomatura JS</header>
        <div id="botonera">
          <button
            className="btn btn-outline-info"
            onClick={() => this.setVistaActual("alumnos")}
          >
            Alumnos
          </button>
          <button
            className="btn btn-outline-info"
            onClick={() => this.setVistaActual("profesores")}
          >
            Profesores
          </button>
          <button
            className="btn btn-outline-info"
            onClick={() => this.setVistaActual("materias")}
          >
            Materias
          </button>
          <button
            className="btn btn-outline-info"
            onClick={() => this.setVistaActual("calificaciones")}
          >
            Calificaciones
          </button>
        </div>
        <h2>{this.state.vistaActual}</h2>
        <div className="mainView">{vistaActual}</div>
      </div>
    );
  }
}

export default App;
