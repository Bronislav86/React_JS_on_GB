import './styles/header.sass'
import './styles/subscribe.sass'
import './styles/style.scss'
import './styles/topHeadBreadCrumbs.sass'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MainPage from "./components/main/MainPage";
import NewArrivals from "./components/newarrivals/NewArrivals";
import ProductDetails from "./components/productDetails/ProductDetails";
import ShoppingCart from "./components/shoppingcart/ShoppingCart";
import Registration from "./components/registration/Registration";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path={"/"} element={<MainPage />} />
                    <Route path={"/productdetails"} element={<ProductDetails />} />
                    <Route path={"/newarrivals"} element={<NewArrivals />} />
                    <Route path={"/shoppingcart"} element={<ShoppingCart />} />
                    <Route path={"/registration"} element={<Registration />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
