import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {addNewProductToCart} from "../redux/cartSlice";

const ProductsCardsShow = ( { countOfCards }) => {
    const dispatch = useDispatch();
    const cards = useSelector(state => state.productsCards?.filteredProducts.length > 0 ?
        state.productsCards.filteredProducts : state.productsCards.products || []);

    const handleAddToCart = (product) => {

        dispatch(addNewProductToCart(product));
    }


    return (
        <>
            {cards.map((product, count) => count < countOfCards ?  (
                <div className="card" key={product.id}>
                    <div className={product.card_img}>
                        <Link to={`/productdetails`}>
                            <div className="card__hover">
                                <button className="card__hover-button" onClick={() => handleAddToCart(product)}>
                                    <svg width="27" height="25" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M21.952 23.266h-.112c-.61 0-1.121-.5-1.165-1.137-.045-.669.444-1.25 1.089-1.295a1.196 1.196 0 0 1 1.258 1.114c.011.249-.03.603-.285.895l-.006.007-.006.007a1.158 1.158 0 0 1-.773.41ZM8.22 23.26c-.65 0-1.18-.543-1.18-1.21 0-.667.53-1.21 1.18-1.21.65 0 1.18.543 1.18 1.21 0 .667-.53 1.21-1.18 1.21Z"
                                        />
                                        <path
                                            d="M21.877 22.266a.146.146 0 0 0 .084-.053c.007-.01.015-.018.023-.027.036-.042.04-.13.039-.175-.013-.107-.104-.18-.181-.18h-.01c-.078.006-.166.11-.16.232.01.116.096.203.168.203h.037ZM8.22 22.26c.1 0 .18-.095.18-.21 0-.116-.08-.21-.18-.21-.1 0-.18.094-.18.21 0 .116.08.21.18.21ZM22 24.266h-.16c-1.138 0-2.083-.911-2.163-2.068-.08-1.205.817-2.28 2.019-2.362.049-.003.097-.005.146-.005 1.138 0 2.1.901 2.178 2.057.031.603-.145 1.173-.53 1.613a2.16 2.16 0 0 1-1.49.765ZM8.22 24.26c-1.204 0-2.18-.99-2.18-2.21s.976-2.21 2.18-2.21c1.204 0 2.18.99 2.18 2.21s-.976 2.21-2.18 2.21Zm12.979-6.866H9.134a.965.965 0 0 1-.93-.716L4.278 2.247H1.522a.972.972 0 0 1-.961-.978c0-.537.433-.977.961-.977H5c.432 0 .816.293.929.717l3.925 14.43h10.704l3.557-8.306H12.258a.973.973 0 0 1-.962-.978c0-.537.433-.977.962-.977H25.59a.95.95 0 0 1 .801.44 1 1 0 0 1 .08.928l-4.39 10.26a.963.963 0 0 1-.881.587Z"
                                        />
                                        <path
                                            d="M21.877 22.266a.146.146 0 0 0 .084-.053c.007-.01.015-.018.023-.027.036-.042.04-.13.039-.175-.013-.107-.104-.18-.181-.18h-.01c-.078.006-.166.11-.16.232.01.116.096.203.168.203h.037ZM8.22 22.26c.1 0 .18-.095.18-.21 0-.116-.08-.21-.18-.21-.1 0-.18.094-.18.21 0 .116.08.21.18.21ZM22 24.266h-.16c-1.138 0-2.083-.911-2.163-2.068-.08-1.205.817-2.28 2.019-2.362.049-.003.097-.005.146-.005 1.138 0 2.1.901 2.178 2.057.031.603-.145 1.173-.53 1.613a2.16 2.16 0 0 1-1.49.765ZM8.22 24.26c-1.204 0-2.18-.99-2.18-2.21s.976-2.21 2.18-2.21c1.204 0 2.18.99 2.18 2.21s-.976 2.21-2.18 2.21Zm12.979-6.866H9.134a.965.965 0 0 1-.93-.716L4.278 2.247H1.522a.972.972 0 0 1-.961-.978c0-.537.433-.977.961-.977H5c.432 0 .816.293.929.717l3.925 14.43h10.704l3.557-8.306H12.258a.973.973 0 0 1-.962-.978c0-.537.433-.977.962-.977H25.59a.95.95 0 0 1 .801.44 1 1 0 0 1 .08.928l-4.39 10.26a.963.963 0 0 1-.881.587Z"
                                        />
                                    </svg>
                                    <span>Add to Cart</span>
                                </button>
                            </div>
                        </Link>
                    </div>
                    <div className="cardInformation">
                        <h3>{product.title}</h3>
                        <p>
                            {product.description}
                        </p>
                        <span className="pinkTextInProducts">${product.price}</span>
                    </div>
                </div>
            ) : null)}
        </>
    );
};

export default ProductsCardsShow;
