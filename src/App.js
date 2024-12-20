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
	{ text: "Cortar cebolla", completed: true },
	{ text: "Tomar el curso de introducción a React.js", completed: false },
	{ text: "Llorar con la llorona", completed: false },
	{ text: "Otra tarea", completed: false },
	{ text: "Cortar el pasto", completed: false },
	{ text: "barrer la calle", completed: false },
	{ text: "Aprender estados", completed: true },
	{ text: "Usar estados deribados", completed: true },
];

function App() {
	const [todos, setTodos] = React.useState(defaultTodos); // al estado de Todos le pasamos el array de defaultTodos
	const [searchValue, setSearchValue] = React.useState('');
	console.log('Los usuarios buscan todos de ' + searchValue);

	const completedTodos = todos.filter((todo) => !!todo.completed).length; // !! convierte el valor devuelto a booleano
	const totalTodos = todos.length;

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
					{defaultTodos.map((props) => (
						<TodoItem
							key={props.text}
							text={props.text}
							completed={props.completed}
						/>
					))}
				</TodoList>
			</ContainerWhite>

			<Background />
		</>
	);
}

export default App;
