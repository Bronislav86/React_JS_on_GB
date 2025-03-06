import React from 'react';
import { useSelector } from "react-redux";
import RemoveProduct from "./RemoveProduct";

const FavoritesProductsList = () => {
    const favorites = useSelector((state) => state.favorites.array);

    return (
        <>
            {favorites.map((product) => (
                <div className="product" key={product.id}>
                    <div className="product_id">ID: {product.id}</div>
                    <h3 className="product_name">{product.name}</h3>
                    <p className="product_description">{product.description}</p>
                    <span className="product_price">$: {product.price}</span>
                    <RemoveProduct product={product} />
                </div>
            ))}
        </>
    );
};

export default FavoritesProductsList;
