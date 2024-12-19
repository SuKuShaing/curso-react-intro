import "./TodoSearch.css";

function TodoSearch() {
	return (
		<input
			placeholder="Cortar Cebolla"
			className="input-TodoSearch"
			onChange={(event) => {
					console.log("Eventos del input");
					console.log(event);
					console.log(event.target);
					console.log(event.target.value);
				}}
		/>
	);
}

export { TodoSearch };
