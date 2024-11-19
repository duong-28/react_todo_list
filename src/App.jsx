import TodoItem from './components/TodoItem';

function App() {
  return (
    <div>
      <h1>My To Do List</h1>
      <TodoItem text="Finish Plus Project"/>
      <TodoItem text="Feed Cat"/>
      <TodoItem text="Be awesome"/>
    </div>
  );
}

export default App;
