import React, { Component } from "react";
import Select from "react-select";

const PAISES = ["BRAZIL", "ARGENTINA", "URUGUAI"];
const ESTADOS = ["RJ", "SP", "MG", "ES"];
const CIDADES = ["RIO DE JANEIRO", "SAO PAULO", "BELO HORIZONTE", "VITORIA"];
//RECUPERAR O THIS.STATE DO COMPONENTE PARA RECUPERAR OS VALORES SELECIONADOS
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
  handleChangeMulti(selectedOption, key) {
    let valoresSelecionados = [...selectedOption];
    this.setState({ [key]: valoresSelecionados });
  }

  renderSelect(options, nome) {
    return (
      <Select
        name={nome}
        onChange={selectedOption =>
          this.handleChangeMulti(selectedOption, nome)
        }
        options={this.arrayToJson(options)}
        className="selectAdd"
        isMulti
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
            //imprime os valores selecionados
            console.log(this.state);
          }}
        >
          VERIFICAR
        </button>
      </div>
    );
  }
}

export default App;
