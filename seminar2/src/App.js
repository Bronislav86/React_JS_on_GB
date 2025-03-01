import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import TextInput from "./components/TextInput";
import ToDoList from "./components/ToDoList";
import Timer from "./components/Timer";

function App() {
	return (
		<div className="App">
			<Timer />
			<Counter />
			<br />
			<TextInput />
			<br />
			<ToDoList />
		</div>
	);
}

export default App;
