import React, { Component } from "react";
import { render } from "react-dom";
import Select from "react-select";

const PAISES = ["BRAZIL", "ARGENTINA", "URUGUAI"];
const ESTADOS = ["RJ", "SP", "MG", "ES"];

const CIDADES = ["RIO DE JANEIRO", "SAO PAULO", "BELO HORIZONTE", "VITORIA"];

class App extends Component {
  constructor() {
    super();
    this.state = {
      cidade: "",
      estado: "",
      pais: ""
    };
  }
  arrayToJson(array) {
    return array.map(x => {
      return { value: x, label: x };
    });
  }
  handleChange(selectedOption, key) {
    this.setState({ [key]: selectedOption.value });
  }

  renderSelect(options, nome) {
    return (
      <Select
        name={nome}
        onChange={selectedOption => this.handleChange(selectedOption, nome)}
        options={this.arrayToJson(options)}
        className="selectAdd"
      />
    );
  }

  renderDivSelect(vaar, state, string) {
    return (
      <div>
        <span className="spanNames">{string}</span>
        {this.renderSelect(vaar, state)}
      </div>
    );
  }
  render() {
    return (
      <div>
        {this.renderDivSelect(PAISES, "pais", "PAIS")}
        {this.renderDivSelect(CIDADES, "cidade", "CIDADE")}
        {this.renderDivSelect(ESTADOS, "estado", "ESTADO")}
        <button
          onClick={() => {
            alert(
              this.state.pais +
                " " +
                this.state.cidade +
                " " +
                this.state.estado
            );
          }}
        >
          VERIFICAR
        </button>
      </div>
    );
  }
}

export default App;
