import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../../style/style.css'

const TodoAdd = ({setTodo, todo}) => {

	const addTodo = async (e) => {
		e.preventDefault()
		let textInput = e.target[0].value;
		const isDuplicate = todo.some((item) => item.text === textInput)

		if(!isDuplicate) {
			await setTodo((prev) => [...prev, {
				id: uuidv4(),
				text: textInput,
				isImportant: false,
				isDone: false,
			}])
	
			e.target[0].value = '';
			e.target[0].focus();
		} else {
			alert('You have same task')
		}}



	return (
		<div>
			<form className='form' onSubmit={addTodo} autoComplete='off'>
				<input className='form__input' required type="text" />
				<button className='form__btn' type='submit'>Add Todo</button>
			</form>
		</div>
	);
};

export default TodoAdd;