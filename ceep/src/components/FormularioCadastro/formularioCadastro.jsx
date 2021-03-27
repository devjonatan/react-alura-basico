import { Component } from "react";
import "./estilo.css";

class FormularioCadastro extends Component {

	constructor(props) {
		super(props);
		this.titulo = "";
		this.nota = "";
	}

	_handlerMudancaTitulo(evento) {
		evento.stopPropagation();
		this.titulo = evento.target.value;
	}

	_handlerMudancaNota(evento) {
		evento.stopPropagation();
		this.nota = evento.target.value;
	}

	_handlerCriarNota(evento) {
		evento.preventDefault();
		evento.stopPropagation();

		this.props.criarNota(this.titulo, this.nota);
	}

	render() {
		return (
			<form className="form-cadastro" onSubmit={this._handlerCriarNota.bind(this)}>
				<input
					type="text"
					placeholder="Título"
					className="form-cadastro_input"
					onChange={this._handlerMudancaTitulo.bind(this)}
				/>
				<textarea
					rows={15}
					placeholder="Escreva sua nota..."
					className="form-cadastro_input"
					onChange={this._handlerMudancaNota.bind(this)}
				/>
				<button className="form-cadastro_input form-cadastro_submit">
					Criar Nota
				</button>
			</form>
		)
	}
}

export default FormularioCadastro;