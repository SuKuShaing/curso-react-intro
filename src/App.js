import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

const defaultTodos = [
	{ text: "Cortar cebolla", completed: true },
	{ text: "Tomar el curso de introducción a React.js", completed: true },
	{ text: "Llorar con la llorona", completed: true },
	{ text: "Otra tarea", completed: true },
	{ text: "Cortar el pasto", completed: true },
	{ text: "barrer la calle", completed: true },
]

function App() {
	return (
		<>
			<TodoCounter completed={16} total={25} />
			<TodoSearch />

			<TodoList>
				{/* React necesita una key cuando itera desde un array */}
				{defaultTodos.map((props) => (
					<TodoItem key={props.text} text={props.text} completed={props.completed} />
				))}
			</TodoList>

			<CreateTodoButton />
		</>
	);
}

export default App;
