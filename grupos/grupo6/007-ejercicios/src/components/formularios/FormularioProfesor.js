import React from "react";
import datos from "../../datos";

class FormularioProfesor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profesores: datos.profesores,
      nombre: "",
    };
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
        <input type="submit" value="Submit" />
      </form>
    );
  }

  handleChangeNombre(event) {
    const newNombre = { nombre: event.target.value };
    this.setState(newNombre);
  }

  handleSubmit(event) {
    const copyProfesor = [...this.state.profesores];
    const newProfesor = {
      id: copyProfesor.length + 1,
      nombre: this.state.nombre,
    };
    datos.profesores.push(newProfesor);
    copyProfesor.push(newProfesor);
    this.setState({profesor: copyProfesor});
    event.preventDefault();
  }
}

export default FormularioProfesor;
