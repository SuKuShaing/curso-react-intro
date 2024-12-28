import React from 'react';

// Custom Hook
function useLocalStorage(itemName, initialValue) {
	// Hook personalizado para guardar los todos en el localStorage
	const localStorageItem = localStorage.getItem(itemName); // obtenemos los todos del localStorage

	let parsedItem; // declaramos una variable para guardar los todos del localStorage

	if (!localStorageItem) {
		localStorage.setItem(itemName, JSON.stringify(initialValue)); // si no hay todos en el localStorage, creamos un valor inicial que nos enviaron
		parsedItem = initialValue;
	} else {
		parsedItem = JSON.parse(localStorageItem); // convertimos los todos del localStorage a un array de objetos
	}

	const [item, setItem] = React.useState(parsedItem);

	const iSaveItem = (newItem) => {
		// función para guardar los todos en el localStorage y actualizar el estado de todos
		localStorage.setItem(itemName, JSON.stringify(newItem)); // guardamos los todos en el localStorage
		setItem(newItem); // setTodos es la función que actualiza el estado de todos
	};

	return [item, iSaveItem];
}

export { useLocalStorage }; // exportamos el Hook personalizado