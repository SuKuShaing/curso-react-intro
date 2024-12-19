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
	{ text: "Otra tarea", completed: true },
	{ text: "Cortar el pasto", completed: false },
	{ text: "barrer la calle", completed: false },
];

function App() {
	return (
		<>
			<ContainerWhite>
				<TodoCounter completed={16} total={25} />
				
				<div className="Search-Create">
					<TodoSearch />
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
