import React from "react";
import Select from "react";
import datos from "../../datos";

class FormularioMateria extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      profesores: datos.profesores,
      materias: datos.materias,
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
        <Select
          multiple={true}
          options={[
            {value: datos["profesores"][0].nombre, label: datos["profesores"][0].nombre},
            {value: datos["profesores"][1].nombre, label: datos["profesores"][1].nombre},
            {value: datos["profesores"][2].nombre, label: datos["profesores"][2].nombre},
        ]}
          placeholder="Seleccionar profesor"
          isSearcheble
          isMultli
          onChange={this.handleChangeProfe}
        />
        <br></br>
        <input type="submit" value="Submit" />
      </form>
    );
  }

  handleChangeNombre(event) {
    const newNombre = { nombre: event.target.value };
    this.setState(newNombre);
  }
  handleChangeProfe(event) {
    const newNombre = { nombre: event.target.value };
    this.setState(newNombre);
  }


  handleSubmit(event) {
    const copyMateria = [...this.state.materias];
    const newMateria = {
      id: copyMateria.length + 1,
      nombre: this.state.nombre,
    };
    datos.materias.push(newMateria);
    copyMateria.push(newMateria);
    this.setState({ profesores: copyMateria });
    event.preventDefault();
  }
}

export default FormularioMateria;
