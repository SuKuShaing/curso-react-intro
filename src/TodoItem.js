import './TodoItem.css';

function TodoItem(props) {
	return (
		<li className="TodoItem">
			<span 
				className={`Icon Icon-check ${props.completed && "Icon-check--active"}`} 
				onClick={props.onComplete} // onComplete es una función que se ejecuta cuando se hace click en el icono de check
			>v</span>
			<p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
			<span 
				className="Icon Icon-delete"
				onClick={props.onDelete} // onDelete es una función que se ejecuta cuando se hace click en el icono de eliminar
			>X</span>
		</li>
	);
}

export { TodoItem };
