import './App.css';
import AllProducts from "./components/AllProducts";
import FavoritesProductsList from "./components/ProductsList";

function App() {
    return (
        <div className="App">
            <div>
                <h1>Все товары</h1>
                <AllProducts/>
            </div>
            <div>
                <h1>Избранное</h1>
                <FavoritesProductsList/>
            </div>
        </div>
    );
}

export default App;
