import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import TodoList from './components/TodoList/TodoList';
import TodoAdd from './components/TodoAdd/TodoAdd';
import TodoBottom from "./components/TodoBottom/TodoBottom";

function App() {

  const [todo, setTodo] = useState([])

  useEffect(() => {
    if(localStorage.getItem('todo')) {
      setTodo(JSON.parse(localStorage.getItem('todo')))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todo))
  }, [todo])

  return (
    <div className="App">
      <TodoAdd setTodo={setTodo} todo={todo}/>
      <TodoList todo={todo} setTodo={setTodo}/>
      <TodoBottom setTodo={setTodo} todo={todo}/>
    </div>
  );
}

export default App;
