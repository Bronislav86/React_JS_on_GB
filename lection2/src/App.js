import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import Show from "./components/VisibleJs";
import Timer from "./components/Timer";
import RefExample from "./components/RefExample";
import MesageList from "./components/List";

function App() {
	const userName = "Alex";
	return (
		<div className="App">
			<h1>Hello {userName}</h1>
			<Timer />
			<Counter />
			<Show data="Текст из компонента" />
			<Show data="Другой текст из компонента" />
			<RefExample />
			<MesageList />
		</div>
	);
}

export default App;
