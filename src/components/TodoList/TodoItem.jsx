import React, {useState} from 'react';
import '../../style/style.css'

const TodoItem = ({ item, deleteOneTodo, isImportantOne, isDoneOne, isChangeOne }) => {

	const [change, setChange] = useState(false);
	const [changeText, setChangeText] = useState(item.text || '')


	const changeFunc = (e) => {
		if(e.target.textContent === 'Save') {
			isChangeOne(item.id, changeText)
		} 
			setChange(prev => !prev)
	}

	return (
		<li className='todo__li'>

		<input checked={item.isDone} type='checkbox' onChange={() => isDoneOne(item.id)} />
	<div>
	{
			change ? <input type='text' value={changeText} onChange={(e) => setChangeText(e.target.value)} /> : <p style={{color: item.isDone ? 'blue' : 'black'}}>{item.text}</p>
		}
	</div>

		<div className='todo__btns'>
		<button className='todo__btn' style={{background: item.isImportant ? 'gold' : ''}} type='button' onClick={() => isImportantOne(item.id)}>Important</button>
		<button className='todo__btn' type='button' onClick={changeFunc}>{change ? "Save" : 'Change'}</button>
		<button className='todo__btn' type='button' onClick={() => deleteOneTodo(item.id)}>Delete</button>
		</div>
	</li>
	);
};

export default TodoItem;