import React from 'react';

const TodoBottom = ({setTodo, todo}) => {

	const deleteAllDoneTodos = () => {
		setTodo(prev => prev.filter(item => !item.isDone))
	}

	return (
		<div className='todo__bottom'>
			<div>
				{todo.filter((item) => item.isDone).length} of {todo.length} task done
			</div>
			<button onClick={deleteAllDoneTodos}>Remove checked</button>
		</div>
	);
};

export default TodoBottom;