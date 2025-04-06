import React from 'react';
import Pagination from "../newarrivals/Pagination";
import ProductsCardsShow from "../ProdutsCardsShow";

const ProductCard = ({countOfCards, children}) => {

    if (!children) {
        return (
            <div className="products">
                <div className="cardsOfProducts center">
                    <ProductsCardsShow countOfCards={countOfCards || null}/>
                </div>
                <Pagination/>
            </div>
        )
    }
    return <div className="cardsOfProducts center">{children}</div>
};

export default ProductCard;
