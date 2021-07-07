import React, { useState, useReducer } from 'react';

import { reducer, initialState } from '../reducers/Reducer';

// function App() {
// 	return (
// 		<div className="App">
// 			<Reducer />
// 		</div>
// 	);
// }s

// const editAction = ;

const Todo = () => {
	// Holds local state
	const [ newTodo, setNewTodo ] = useState('');

	// Hold app level state
	const [ state, dispatch ] = useReducer(reducer, initialState);

	console.log(state);

	const handleChanges = (e) => {
		setNewTodo(e.target.value);
	};

	const editTodo = (e) => {
		dispatch({ type: 'CHANGE_EDIT' });
	};

	const changeTodo = (e) => {
		dispatch({ type: 'CHANGE_TODO', payload: newTodo });
	};

	return (
		<div>
			{state.editing ? (
				<div>
					<input
						className="title-input"
						type="text"
						name="newTodo"
						value={newTodo}
						onChange={handleChanges}
					/>
					<button onClick={changeTodo}>Update title</button>
				</div>
			) : (
				<h1>
					{state.todo} <i className="far fa-edit" onClick={editTodo} />
				</h1>
			)}
		</div>
	);
};

export default Todo;
