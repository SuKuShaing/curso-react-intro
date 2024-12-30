import "./TodoCounter.css";

// const estilos = {
// 	backgroundColor: "red",
// };

function TodoCounter({ completed, total, loading }) {
	return (
		loading ? 
		<h1>
			Cargando Todos
		</h1>
		:
			completed === total
			? <h1>
				Has completado todos los TODOs
			</h1>
			: <h1>
				Has completado {completed} de {total} TODOs
			</h1>
	);
}

export { TodoCounter };
