import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { Background } from "../ContainerWhite/Background";
import { ContainerWhite } from "../ContainerWhite";

function AppUI({
	loading,
	error,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    iCompletedTodo,
    iDeleteTodo
}) {
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
					{loading && <p>Cargando todos...</p>}
					{error && <p>Hubo un error cargando los todos</p>}
					{!loading && !searchedTodos.length && <p>Crea tu primer TODO</p>}

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
    )
}

export { AppUI };