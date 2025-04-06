import React from 'react';
import Header from "../Header";
import Footer from "../Footer";
import Subscribe from "../Subscribe";
import BlackBlock from "../BlackBlock";
import TopHeadOfCart from "./TopHeadOfCart";
import CartsProductBox from "./CartsProductBox";


const ShoppingCart = () => {
    return (
        <div>
            <Header />
            <TopHeadOfCart />
            <CartsProductBox />
            <BlackBlock />
            <Subscribe />
            <Footer />
            
        </div>
    );
};

export default ShoppingCart;
