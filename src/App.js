import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import { Background } from "./Background";
import { ContainerWhite } from "./ContainerWhite";

import "./App.css";

const defaultTodos = [
	{ text: "Cortar cebolla", completed: false },
	{ text: "Tomar el curso de introducción a React.js", completed: false },
	{ text: "Llorar con la llorona", completed: false },
	{ text: "Otra tarea", completed: false },
	{ text: "Cortar el pasto", completed: false },
	{ text: "barrer la calle", completed: false },
	{ text: "Aprender estados", completed: true },
	{ text: "Usar estados deribados", completed: true },
];

function App() {
	// Estados
	const [todos, setTodos] = React.useState(defaultTodos); // al estado de Todos le pasamos el array de defaultTodos
	const [searchValue, setSearchValue] = React.useState('');
	console.log('Los usuarios buscan todos de ' + searchValue);

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
		const todoIndex = newTodos.findIndex(
			(todo) => todo.text === text
		);
		if (newTodos[todoIndex].completed) {
			newTodos[todoIndex].completed = false;
		} else {
			newTodos[todoIndex].completed = true;
		}
		setTodos(newTodos); // setTodos es la función que actualiza el estado de todos
	};

	const iDeleteTodo = (text) => {
		const newTodos = [...todos];
		const todoIndex = newTodos.findIndex(
			(todo) => todo.text === text
		);
		newTodos.splice(todoIndex, 1); // splice elimina un elemento de un array en el indice que le indiquemos y avanza la cantidad de elementos que le indiquemos
		setTodos(newTodos); // setTodos es la función que actualiza el estado de todos
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
