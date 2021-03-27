import { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas";
import "./assets/app.css";
import "./assets/index.css";

class App extends Component {

  constructor(){
    super();
    this.state = {
      notas: []
    };
  }

  criarNota(titulo, texto){
    this.state.notas.push({
      titulo,
      texto
    });

    this.setState({
      notas: this.state.notas
    });
  }

  render(){
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        <ListaDeNotas notas={this.state.notas}/>
      </section>
    );
  }
}

export default App;
