import './App.css';
import AddTodo from "./components/AddTodo"
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";

function App() {
  return (
    <div className="App">
      <AddTodo/>
      <TodoList/>
      <TodoFilter />
    </div>
  );
}

export default App;
