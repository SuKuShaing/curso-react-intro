import React from "react";
import { useLocalStorage } from "./useLocalStorage";
import { AppUI } from "./AppUI";

import "./App.css";

// const defaultTodos = [
// 	{ text: "Cortar cebolla", completed: false },
// 	{ text: "Tomar el curso de introducción a React.js", completed: false },
// 	{ text: "Llorar con la llorona", completed: false },
// 	{ text: "Otra tarea", completed: false },
// 	{ text: "Cortar el pasto", completed: false },
// 	{ text: "barrer la calle", completed: false },
// 	{ text: "Aprender estados", completed: true },
// 	{ text: "Usar estados deribados", completed: true },
// ];

// localStorage.setItem('todosEnLocalStorage', JSON.stringify(defaultTodos)); // guardamos los todos en el localStorage


function App() {
	// Estados
	const {
		item: todos,
		iSaveItem: saveTodos,
		loading,
		error
	} = useLocalStorage('todosEnLocalStorage', []); // al estado de Todos le pasamos el array de defaultTodos
	const [searchValue, setSearchValue] = React.useState("");
	// console.log("Los usuarios buscan todos de " + searchValue);

	// Estados derivados
	const completedTodos = todos.filter((todo) => !!todo.completed).length; // !! convierte el valor devuelto a booleano
	const totalTodos = todos.length;
	const searchedTodos = todos.filter((todo) => {
		const todoText = todo.text.toLowerCase();
		const searchText = searchValue.toLowerCase();
		return todoText.includes(searchText);
	});

	// React.useEffect(() => {
	// 	console.log('Log 2: Dentro del useEffect');
	// }, []);  // si le pasamos un array vacio, el useEffect se ejecutará solo una vez

	// React.useEffect(() => {
	// 	console.log('Log 2: Dentro del useEffect');
	// }, [totalTodos]);  // si le pasamos un array con una variable, el useEffect se ejecutará solo cuando esa variable cambie

	// Funciones
	const iCompletedTodo = (text) => {
		const newTodos = [...todos];
		const todoIndex = newTodos.findIndex((todo) => todo.text === text);
		if (newTodos[todoIndex].completed) {
			newTodos[todoIndex].completed = false;
		} else {
			newTodos[todoIndex].completed = true;
		}
		saveTodos(newTodos);
	};

	const iDeleteTodo = (text) => {
		const newTodos = [...todos];
		const todoIndex = newTodos.findIndex((todo) => todo.text === text);
		newTodos.splice(todoIndex, 1); // splice elimina un elemento de un array en el indice que le indiquemos y avanza la cantidad de elementos que le indiquemos
		saveTodos(newTodos);
	};

	return (
		<AppUI 
			loading={loading}
			error={error}
			completedTodos={completedTodos}
			totalTodos={totalTodos}
			searchValue={searchValue}
			setSearchValue={setSearchValue}
			searchedTodos={searchedTodos}
			iCompletedTodo={iCompletedTodo}
			iDeleteTodo={iDeleteTodo}
		/>
	)
}

export default App;
