import BotaoConclui from "./componentes/concluiTarefa.js";
import BotaoDeleta from "./componentes/deletaTarefa.js";

const criarTarefa = (evento) => {
	evento.preventDefault();
	
	const input = document.querySelector("[data-form-input]");
	const valor = input.value;

	const textoError = document.querySelector("[data-invalid-input]");

	if (valor.trim() != "") {
		textoError.classList.remove("invalido");

		const lista = document.querySelector("[data-list]");

		const tarefa = document.createElement("li");
		tarefa.classList.add("task");

		const conteudo = `<p class=content>${valor}</p>`;

		tarefa.innerHTML = conteudo;
		tarefa.appendChild(BotaoConclui());
		tarefa.appendChild(BotaoDeleta());
		lista.appendChild(tarefa);

		input.value = null;
	} else {
		textoError.classList.add("invalido");

		input.value = null;

		throw new Error("Favor definir valor no input");
	}
};

const novaTarefa = document.querySelector("[data-form-button]");

novaTarefa.addEventListener("click", criarTarefa);
