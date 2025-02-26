import logo from './logo.svg';
import './App.css';
import Box from './Components/Box';
import pic from './assets/CmBkCF.png';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import List from "./Components/List";
import ProductList from "./Components/ProductList";
import ProductDetails from "./Components/ProductDetails";
import HomePage from "./Components/HomePage";
import AboutPage from "./Components/AboutPage";

function App() {
    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    const productList = [
        {id: 1, title: "Название продукта 1", description: "Описание товара 1"},
        {id: 2, title: "Название продукта 2", description: "Описание товара 2"},
        {id: 3, title: "Название продукта 3", description: "Описание товара 3"},
        {id: 4, title: "Название продукта 4", description: "Описание товара 4"}
    ]

    // const renderItem = () => {
    //     return list.map((item, index) => (
    //         <li key={index}>
    //             {item}
    //         </li>
    //     ));
    // };

    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
                <Box>
                    <h2>Контент для children</h2>
                    <p>Здесь находится текст children</p>
                </Box>
                <p>Этот текст находится за рамкой</p>
                <Box>
                    <img src={pic} alt="logo" style={{width: '50%', height: '50%'}}/>
                </Box>
                <List items={list}/>

                <h2>Список товаров</h2>
                <div>
                    <Routes>
                        <Route path={"/page/:pageNumber"} element={<ProductList products={productList}/>}/>
                        <Route path="/product/:productId" element={<ProductDetails products={productList}/>}/>
                        <Route path={"/"} element={<ProductList products={productList}/>}/>
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
