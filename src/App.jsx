import { useState } from 'react';
import TodoItem from './components/TodoItem';

function App() {

  const [todos, setTodos] = useState([
    "Learn about React",
    "Meet a friend for lunch",
    "Build a really cool todo App",
  ]);

  return (
    <div>
      <h1>My To Do List</h1>
      {todos.map((todo, index) => (
        <TodoItem text={todo} key={index} />
      ))}
    </div>
  );
}

export default App;
