import logo from "./logo.svg";
import "./App.css";
import Greeting from "./components/Greeting";
import CurrentTime from "./components/CurrentTime";
import EventCard from "./components/EventCard";

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
				<EventCard name="встреча" date="17.02.2025" place="переговорка" />
				<EventCard name="концерт DSCruew" date="22.02.2025" place="Концертный зал ДГТУ" />
				<EventCard name="совещание" date="18.02.2025" place="кабинет начальника ОЛ" />
			</header>
		</div>
	);
}

export default App;
