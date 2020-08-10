import React from "react";
import datos from "../../datos";

class FormularioAlumno extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alumnos: datos.alumnos,
      nombre: "",
      edad: -1,
    };
    this.handleChangeEdad = this.handleChangeEdad.bind(this);
    this.handleChangeNombre = this.handleChangeNombre.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input
            type="text"
            placeholder="Ingrese el nombre"
            value={this.state.nombre}
            onChange={this.handleChangeNombre}
          />
        </label>
        <br></br>
        <label>
          <input
            type="text"
            placeholder="Ingrese la edad"
            value={this.state.edad}
            onChange={this.handleChangeEdad}
          />
        </label>
        <br></br>
        <input type="submit" value="Submit" />
      </form>
    );
  }

  handleChangeNombre(event) {
    const newNombre = { nombre: event.target.value };
    this.setState(newNombre);
  }
  handleChangeEdad(event) {
    const newEdad = { edad: event.target.value };
    this.setState(newEdad);
  }

  handleSubmit(event) {
    const copyAlumnos = [...this.state.alumnos];
    const newAlumno = {
      id: copyAlumnos.length + 1,
      nombre: this.state.nombre,
      edad: this.state.edad,
    };
    datos.alumnos.push(newAlumno);
    copyAlumnos.push(newAlumno);
    this.setState({alumnos: copyAlumnos});
    event.preventDefault();
  }
}

export default FormularioAlumno;
