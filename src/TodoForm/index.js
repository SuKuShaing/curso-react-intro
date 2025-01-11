import React from "react";
import "./TodoForm.css";

function TodoForm() {
	return (
		<form onSubmit={(event) => {
			event.preventDefault(); // evita los valores por defecto entre ellos el recargar la pagina
		}}>
			<label>Escribe tu nuevo TODO</label>
			<textarea placeholder="Escribe lo que tienes que hacer" />
			<div className="TodoForm-buttonContainer">
				<button
					type="" // submit es el valor por defecto
					className="TodoForm-button TodoForm-button--cancel">
					Cancelar
				</button>
				<button
					type=""
					className="TodoForm-button TodoForm-button--add">
					Crear TODO
				</button>
			</div>
		</form>
	);
}

export { TodoForm };
