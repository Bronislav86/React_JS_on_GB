import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import {addFavorite} from "../redux/favoritesSlice";

const AllProducts = () => {
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favorites.array);

    const allProducts = [
        { id: 0, name: "Товар 1", description: 'Описание товара 1', price: 100 },
        { id: 1, name: "Товар 2", description: 'Описание товара 2', price: 200 },
        { id: 2, name: "Товар 3", description: 'Описание товара 3', price: 300 },
        { id: 3, name: "Товар 4", description: 'Описание товара 4', price: 400 },
        { id: 4, name: "Товар 5", description: 'Описание товара 5', price: 500 },
    ];


    return (
        <>
            {allProducts.map((product) => (
                <div className="product" key={product.id}>
                    <div className="product_id">ID: {product.id}</div>
                    <h3 className="product_name">{product.name}</h3>
                    <p className="product_description">{product.description}</p>
                    <span className="product_price">$: {product.price}</span>
                    {!favorites.some((item) => item.id === product.id) && (
                        <button onClick={() => dispatch(addFavorite(product))}>
                            Добавить в избранное
                        </button>
                    )}
                </div>
            ))}
        </>
    );
};

export default AllProducts;