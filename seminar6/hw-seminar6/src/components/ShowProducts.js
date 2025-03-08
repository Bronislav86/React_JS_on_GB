import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import RemoveProduct from "./RemoveProduct";
import {changeAvailableProducts} from "../redux/productsSlice";
import UpdateProducts from "./UpdateProducts";

const ShowProducts = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state.products);

    return (
        <ul className="show-products">
            {state.products.map(product => (
                <li key={product.id}>
                    <h3 className={!product.available ? "unAvailable" : ""}>{product.name}</h3>
                    <p>{product.description}</p>
                    <span className={!product.available ? "unAvailable" : ""}>{product.price}</span>
                    <p className={!product.available ? "unAvailable" : ""}
                       onClick={() => {
                           dispatch(changeAvailableProducts(product.id))
                       }}
                       >
                        {product.available ? "Товар доступен" : "Товар недоступен"}</p>
                    <UpdateProducts product={product}/>
                    <RemoveProduct product={product}/>
                </li>
            ))}
        </ul>
    );
};

export default ShowProducts;
