import logo from "./logo.svg";
import "./App.css";
import Message from "./components/Message";

function App() {
	return (
		<div className="App">
			<Message text="Приветствуем Вас на проверке первого домашнего задания по React" />
			<Message text="Здесь находится props текст, как было указано в задании" />
			<Message text="Здесь находится еще один props текст" />
		</div>
	);
}

export default App;
