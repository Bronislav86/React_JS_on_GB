import './App.css';
import ShowCatalog from "./components/ShowCatalog";
import AddNewProduct from "./components/AddNewProduct";

function App() {
  return (
    <div className="App">
        <AddNewProduct/>
      <ShowCatalog />
    </div>
  );
}

export default App;
