import logo from "./logo.svg";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Greeting />
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>Wellcome to my first React project!</p>
				<CurrentTime />
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
			</header>
		</div>
	);
}

function Greeting() {
	return (
		<div>
			<h1>Привет, React!</h1>
		</div>
	);
}

function CurrentTime() {
	const currentDate = new Date();
	let currentTime = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
	return (
		<div>
			<h2 clasName="timeHeading">Текущее время: </h2>
			<p>{currentTime.toLocaleString("en-US", { timeZone: "Europe/Moscow" })}</p>
		</div>
	);
}

export default App;
