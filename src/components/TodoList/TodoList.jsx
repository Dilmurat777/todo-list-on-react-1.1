import React from 'react';
import TodoItem from './TodoItem';
import '../../style/style.css'

const TodoList = ({todo, setTodo}) => {
	const deleteOneTodo = (id) => {
		setTodo(prev => prev.filter(item => item.id !== id))
	}

const isImportantOne = (id) => {
	setTodo(prev => prev.map(item => {
		if(item.id === id) {
			return {...item, isImportant: !item.isImportant}
		}
		return item
	}))
}

const isDoneOne = (id) => {
	setTodo(prev => prev.map(item => {
		if(item.id === id) {
			return {...item, isDone: !item.isDone}
		}
		return item
	}))
}

const isChangeOne = (id, text) => {
	setTodo(prev => prev.map(item => {
		if(item.id === id) {
			return {...item, text: text}
		}
		return item
	}))
}

	return (
		<ul className='todo__ul'>
			{ 
				todo.map((item) => (
					<TodoItem item={item} key={item.id} todo={todo} setTodo={setTodo} isChangeOne={isChangeOne} deleteOneTodo={deleteOneTodo} isDoneOne={isDoneOne} isImportantOne={isImportantOne}/>
					))
			}
		</ul>
	);
};

export default TodoList;