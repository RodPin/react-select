import React, { Component } from "react";
import Select from "react-select";
import "./Filtros.css";
class Filtros extends Component {
  constructor() {
    super();
    this.state = {
      CIDADES: "",
      ESTADOS: "",
      PAISES: ""
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
        <span className="states">{string}</span>
        {this.renderSelect(vaar, state)}
      </div>
    );
  }
  render() {
    let keys = Object.keys(this.props.cadaFiltro);
    let values = Object.values(this.props.cadaFiltro);
    console.log("keys");
    console.log(keys);
    console.log("values");
    console.log(values);
    return (
      <div className="divGeral">
        <span className="titulo">Filtros</span>
        {keys.map((key, index) => {
          console.log(key, values[index]);
          return this.renderDivSelect(values[index], key, key);
          // console.log("values: " + index);
          // console.log(values[index]);
        })}

        <button
          onClick={() => {
            //imprime os valores selecionados
            console.log(this.state);
          }}
          className="button"
        >
          VERIFICAR
        </button>
      </div>
    );
  }
}

export default Filtros;
