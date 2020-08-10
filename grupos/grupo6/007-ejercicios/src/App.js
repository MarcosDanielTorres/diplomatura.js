import React from "react";
import "./styles/App.css";
import datos from "./datos";
import Alumnos from "./components/datosSimples/Alumnos";
import AlumnosDetalle from "./components/datosCompuestos/AlumnosDetalle";
import Profesores from "./components/datosSimples/Profesores";
import ProfesoresDetalle from "./components/datosCompuestos/ProfesoresDetalle";
import Materias from "./components/datosSimples/Materias";
import MateriasDetalle from "./components/datosCompuestos/MateriasDetalle";
import Calificaciones from "./components/datosSimples/Calificaciones";
import CalificacionesDetalle from "./components/datosCompuestos/CalificacionesDetalle";
import FormularioAlumno from "./components/formularios/FormularioAlumno";
import FormularioProfesor from "./components/formularios/FormularioProfesor";
import FormularioMateria from "./components/formularios/FormularioMateria";
import FormularioCalif from "./components/formularios/FormularioCalif";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vistaActual: "",
      idDetalleSeleccionado: -1,
      alumnos: datos.alumnos,
      profesores: datos.profesores,
      materias: datos.materias,
      calificaciones: datos.calificaciones,
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
  render() {
    let vista = "";
    switch (this.state.vistaActual) {
      case "alumnos":
        vista = (
          <div>
            <button
              className="btn btn-outline-secondary"
              onClick={() => this.setVistaActual("formulario Alumnos")}
            >
              Add element
            </button>
            <ul>{this.showDatosAlumno()}</ul>
          </div>
        );
        break;
      case "profesores":
        vista = (
          <div>
            <button
              className="btn btn-outline-secondary"
              onClick={() => this.setVistaActual("formulario Profesores")}
            >
              Add element
            </button>
            <ul>{this.showDatosProfesor()}</ul>
          </div>
        );
        break;
      case "materias":
        vista = (
          <div>
            <button
              className="btn btn-outline-secondary"
              onClick={() => this.setVistaActual("formulario Materias")}
            >
              Add element
            </button>
            <ul>{this.showDatosMateria()}</ul>
          </div>
        );
        break;
      case "calificaciones":
        vista = (
          <div>
            <button
              className="btn btn-outline-secondary"
              onClick={() => this.setVistaActual("formulario Calificaciones")}
            >
              Add element
            </button>
            <ul>{this.showDatosCalif()}</ul>
          </div>
        );
        break;
      case "formulario Alumnos":
        vista = <div>{this.addElementAlumno()}</div>;
        break;
      case "formulario Profesores":
        vista = <div>{this.addElementProfesor()}</div>;
        break;
      case "formulario Materias":
        vista = <div>{this.addElementMateria()}</div>;
        break;
      case "formulario Calificaciones":
        vista = <div>{this.addElementCalif()}</div>;
        break;
      default:
        vista = "";
    }
    return (
      <div className="App">
        <header className="alert alert-info">Diplomatura JS</header>
        <div id="botonera">
          <button
            className="btn btn-danger"
            onClick={() => this.setVistaActual("alumnos")}
          >
            Alumnos
          </button>
          <button
            className="btn btn-danger"
            onClick={() => this.setVistaActual("profesores")}
          >
            Profesores
          </button>
          <button
            className="btn btn-danger"
            onClick={() => this.setVistaActual("materias")}
          >
            Materias
          </button>
          <button
            className="btn btn-danger"
            onClick={() => this.setVistaActual("calificaciones")}
          >
            Calificaciones
          </button>
        </div>
        <h2 className="titulo ">{this.state.vistaActual.toUpperCase()}</h2>
        <div className="container">{vista}</div>
      </div>
    );
  }

  addElementAlumno = () => {
    return <FormularioAlumno />;
  };
  addElementProfesor = () => {
    return <FormularioProfesor />;
  };
  addElementMateria = () => {
    return <FormularioMateria />;
  };
  addElementCalif = () => {
    return <FormularioCalif />;
  };

  showDatosAlumno = () => {
    if (this.state.idDetalleSeleccionado === -1) {
      return this.state.alumnos.map((alumno, index) => (
        <Alumnos
          key={alumno.id}
          clickDetalle={() =>
            this.setState({ idDetalleSeleccionado: alumno.id })
          }
          nombre={alumno.nombre}
          click={() => this.deleteAlumno(index)}
        />
      ));
    } else {
      return (
        <AlumnosDetalle
          id={
            datos[this.state.vistaActual][this.state.idDetalleSeleccionado - 1]
              .id
          }
          nombre={
            datos[this.state.vistaActual][this.state.idDetalleSeleccionado - 1]
              .nombre
          }
          edad={
            datos[this.state.vistaActual][this.state.idDetalleSeleccionado - 1]
              .edad
          }
        />
      );
    }
  };

  showDatosProfesor = () => {
    if (this.state.idDetalleSeleccionado === -1) {
      return this.state.profesores.map((profesor, index) => (
        <Profesores
          key={profesor.id}
          clickDetalle={() =>
            this.setState({ idDetalleSeleccionado: profesor.id })
          }
          nombre={profesor.nombre}
          click={() => this.deleteProfesor(index)}
        />
      ));
    } else {
      return (
        <ProfesoresDetalle
          id={
            datos[this.state.vistaActual][this.state.idDetalleSeleccionado - 1]
              .id
          }
          nombre={
            datos[this.state.vistaActual][this.state.idDetalleSeleccionado - 1]
              .nombre
          }
        />
      );
    }
  };

  showDatosMateria = () => {
    if (this.state.idDetalleSeleccionado === -1) {
      return this.state.materias.map((materia, index) => (
        <Materias
          key={materia.id}
          clickDetalle={() =>
            this.setState({ idDetalleSeleccionado: materia.id })
          }
          nombre={materia.nombre}
          click={() => this.deleteMateria(index)}
        />
      ));
    } else {
      return (
        <MateriasDetalle
          id={
            datos[this.state.vistaActual][this.state.idDetalleSeleccionado - 1]
              .id
          }
          nombre={
            datos[this.state.vistaActual][this.state.idDetalleSeleccionado - 1]
              .nombre
          }
          profesores={
            datos[this.state.vistaActual][this.state.idDetalleSeleccionado - 1]
              .profesores
          }
        />
      );
    }
  };

  showDatosCalif = () => {
    if (this.state.idDetalleSeleccionado === -1) {
      return this.state.calificaciones.map((calif, index) => (
        <Calificaciones
          key={calif.id}
          clickDetalle={() =>
            this.setState({ idDetalleSeleccionado: calif.id })
          }
          id={calif.id}
          click={() => this.deleteCalif(index)}
        />
      ));
    } else {
      return (
        <CalificacionesDetalle
          id={
            datos[this.state.vistaActual][this.state.idDetalleSeleccionado - 1]
              .id
          }
          alumno={
            datos[this.state.vistaActual][this.state.idDetalleSeleccionado - 1]
              .alumno
          }
          materia={
            datos[this.state.vistaActual][this.state.idDetalleSeleccionado - 1]
              .materia
          }
          nota={
            datos[this.state.vistaActual][this.state.idDetalleSeleccionado - 1]
              .nota
          }
        />
      );
    }
  };

  deleteAlumno = (index) => {
    const copyBDAlumno = [...this.state.alumnos];
    copyBDAlumno.splice(index, 1);
    this.setState({ alumnos: copyBDAlumno });
  };

  deleteProfesor = (index) => {
    const copyBDProfesor = [...this.state.profesores];
    copyBDProfesor.splice(index, 1);
    this.setState({ profesores: copyBDProfesor });
  };

  deleteMateria = (index) => {
    const copyBDMateria = [...this.state.materias];
    copyBDMateria.splice(index, 1);
    this.setState({ materias: copyBDMateria });
  };

  deleteCalif = (index) => {
    const copyBDCalif = [...this.state.calificaciones];
    copyBDCalif.splice(index, 1);
    this.setState({ calificaciones: copyBDCalif });
  };
}
export default App;
