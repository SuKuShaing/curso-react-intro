import "./TodoCounter.css";

// const estilos = {
// 	backgroundColor: "red",
// };

function TodoCounter({ completed, total }) {
	return (
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
