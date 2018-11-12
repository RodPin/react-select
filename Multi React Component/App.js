import React, { Component } from "react";
import Select from "react-select";
import Filtros from "./components/Filtros";

const PAISES = ["BRAZIL", "ARGENTINA", "URUGUAI"];
const ESTADOS = ["RJ", "SP", "MG", "ES"];
const CIDADES = ["RIO DE JANEIRO", "SAO PAULO", "BELO HORIZONTE", "VITORIA"];

const objFiltros = { PAISES, ESTADOS, CIDADES };

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    console.log("------------------------");
    console.log(objFiltros);
    return (
      <div>
        <Filtros cadaFiltro={objFiltros} />
      </div>
    );
  }
}

export default App;
