import logo from './logo.svg';
import './App.css';
import TemperatureConverter from "./components/TemperatureConverter";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <div className="App">
        <header>
            <TemperatureConverter/>
        </header>
        <main>
            <ToDoList/>
        </main>
    </div>
  );
}

export default App;
