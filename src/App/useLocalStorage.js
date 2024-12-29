import React from "react";

// Custom Hook
// Hook personalizado para guardar los todos en el localStorage
function useLocalStorage(itemName, [initialValue]) {
	const [item, setItem] = React.useState(initialValue); // declaramos un estado para guardar los todos
	const [loading, setLoading] = React.useState(true); // declaramos un estado para saber si los todos se están cargando
	const [error, setError] = React.useState(false); // declaramos un estado para saber si hubo un error al cargar los todos

	React.useEffect(() => {
		const localStorageItem = localStorage.getItem(itemName); // obtenemos los todos del localStorage

		let parsedItem; // declaramos una variable para guardar los todos del localStorage

		if (!localStorageItem) {
			localStorage.setItem(itemName, JSON.stringify(initialValue)); // si no hay todos en el localStorage, creamos un valor inicial que nos enviaron
			parsedItem = initialValue;
		} else {
			parsedItem = JSON.parse(localStorageItem); // convertimos los todos del localStorage a un array de objetos
		}
	});

	const iSaveItem = (newItem) => {
		// función para guardar los todos en el localStorage y actualizar el estado de todos
		localStorage.setItem(itemName, JSON.stringify(newItem)); // guardamos los todos en el localStorage
		setItem(newItem); // setTodos es la función que actualiza el estado de todos
	};

	return {
		item,
		iSaveItem,
		loading,
		error
	}; // retornamos los estados y la función para guardar los todos
}

export { useLocalStorage }; // exportamos el Hook personalizado