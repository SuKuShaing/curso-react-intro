import React from "react";
import "./TodoSearch.css";


function TodoSearch({ searchValue, setSearchValue }) {
	// const [state, setState] = React.useState('Valor inicial del estado');
	// state es inmutable (no se puede modificar directamente)
	// setState es el que modifica el estado, ambos pueden tener el nombre que quieran

	// los estados van de padres a hijos y no al revés

	return (
		<input
			placeholder="Cortar Cebolla"
			className="input-TodoSearch"
			value={searchValue} // valor que van a ver los usuarios
			onChange={(event) => {
					console.log(event.target.value);
					setSearchValue(event.target.value);
				}}
		/>
	);
}

export { TodoSearch };
