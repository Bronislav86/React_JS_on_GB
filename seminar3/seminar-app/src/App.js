import logo from './logo.svg';
import './App.css';
import Greeting from "./components/Greeting";
import Counter from "./components/Counter";
import MessageList from "./components/MessageList";
import TextDisplayForm from "./components/TextDisplayForm";
import ThemeSwitcher from "./components/ThemeSwitcher";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Greeting name={'Пользователь'}/>
      </header>
        <main className="App-main">
        <Counter />
            <MessageList />
            <TextDisplayForm/>
        </main>
        <footer className="App-footer">
            <ThemeSwitcher/>
        </footer>
    </div>
  );
}

export default App;
