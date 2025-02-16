import logo from "./logo.svg";
import "./App.css";

function App() {
	const userName = "Alex";
	return (
		<div className="App">
			<h1>Hello, {userName}!</h1>
			<Heading />
			<Heading />
			<NewComp />
			<Article number="1" name="Info" />
			<Article number="2" name="Blog" />
		</div>
	);
}

function Article({ name, number }) {
	let toggle = false;
	return (
		<div>
			<h2 style={{ color: toggle ? "green" : "red" }} className="heading">
				Статья про {name} номер {number}
			</h2>
			<a href="#">Читать статью</a>
		</div>
	);
}

function Heading() {
	return (
		<div>
			<h2>Новый текст внутри заголовка</h2>
			<p>Новый текст</p>
			<a href="#">Читать далее...</a>
		</div>
	);
}

function NewComp() {
	return <div>New Text</div>;
}

export default App;
