import React from 'react';
import Header from "../Header";
import Footer from "../Footer";
import Subscribe from "../Subscribe";
import BlackBlock from "../BlackBlock";
import TopHead from "../TopHead";
import FilterSort from "./FilterSort";
import ProductCard from "../main/ProductCard";
import {useSelector} from "react-redux";


const NewArrivals = () => {
    const cards = useSelector(state => state.productsCards.products || []);
    return (
        <>
            <Header />
            <TopHead />
            <FilterSort />
            <ProductCard countOfCards={cards.length + 1} />
            <BlackBlock />
            <Subscribe />
            <Footer />
        </>
    );
};

export default NewArrivals;
