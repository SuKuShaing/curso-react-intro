import React from "react";
import { useLocalStorage } from "../todoContext/useLocalStorage";
import { AppUI } from "./AppUI";

import "./App.css";

function App() {


	return (
		<AppUI 
			// loading={loading}
			// error={error}
			// completedTodos={completedTodos}
			// totalTodos={totalTodos}
			// searchValue={searchValue}
			// setSearchValue={setSearchValue}
			// searchedTodos={searchedTodos}
			// iCompletedTodo={iCompletedTodo}
			// iDeleteTodo={iDeleteTodo}
		/>
	)
}

export default App;
