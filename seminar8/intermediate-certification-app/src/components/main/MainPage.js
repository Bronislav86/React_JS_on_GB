import React from 'react';
import Header from "../Header";
import BannerSection from "./BannerSection";
import OptionsNavigation from "./OptionsNavigation";
import ProductCard from "./ProductCard";
import BlackBlock from "../BlackBlock";
import Subscribe from "../Subscribe";
import Footer from "../Footer";
import BrowseAllProductsButton from "./BrowseAllProductsButton";
import ProductsCardsShow from "../ProdutsCardsShow";

const MainPage = () => {
    return (
        <>
            <Header/>
            <BannerSection/>
            <OptionsNavigation/>
            <div className="conteiner products">
                <div>
                    <h2 style={{display: 'none'}}>Карточки с продуктами магазина</h2>
                    <h2>Fetured Items</h2>
                    <p>Shop for items based on what we featured in this week</p>
                </div>
                <ProductCard>
                    <ProductsCardsShow countOfCards={6}/>
                </ProductCard>
                <BrowseAllProductsButton/>
            </div>
            <BlackBlock/>
            <Subscribe/>
            <Footer/>
        </>
    );
};

export default MainPage;
