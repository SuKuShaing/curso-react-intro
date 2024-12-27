import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import { Background } from "./Background";
import { ContainerWhite } from "./ContainerWhite";

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

function App() {
	// Estados
	const [todos, saveTodos] = useLocalStorage('todosEnLocalStorage', []); // al estado de Todos le pasamos el array de defaultTodos
	const [searchValue, setSearchValue] = React.useState("");
	console.log("Los usuarios buscan todos de " + searchValue);

	// Estados derivados
	const completedTodos = todos.filter((todo) => !!todo.completed).length; // !! convierte el valor devuelto a booleano
	const totalTodos = todos.length;
	const searchedTodos = todos.filter((todo) => {
		const todoText = todo.text.toLowerCase();
		const searchText = searchValue.toLowerCase();
		return todoText.includes(searchText);
	});

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
		<>
			<ContainerWhite>
				<TodoCounter completed={completedTodos} total={totalTodos} />

				<div className="Search-Create">
					<TodoSearch
						searchValue={searchValue} // enviamos el estado a traves de la propiedad
						setSearchValue={setSearchValue}
					/>
					<CreateTodoButton />
				</div>

				<TodoList>
					{/* React necesita una key cuando itera desde un array */}
					{/* defaultTodos */}
					{searchedTodos.map((props) => (
						<TodoItem
							key={props.text}
							text={props.text}
							completed={props.completed}
							onComplete={() => iCompletedTodo(props.text)} // onComplete es una función que se ejecuta cuando se hace click en el icono de check
							onDelete={() => iDeleteTodo(props.text)}
						/>
					))}
				</TodoList>
			</ContainerWhite>

			<Background />
		</>
	);
}

export default App;
