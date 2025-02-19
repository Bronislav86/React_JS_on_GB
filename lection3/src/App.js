import logo from './logo.svg';
import './App.css';
import ParentCounter from "./components/parent";
import InputForm from "./components/Form";
import Nav from "./components/Menu";
import HoverRating from "./components/Rating";
import TransferList from "./components/ListSuper";

function App() {
  return (
    <div className="App">
        <HoverRating/>
        <Nav/>
        <ParentCounter/>
        <InputForm/>
        <TransferList/>
    </div>
  );
}

export default App;
