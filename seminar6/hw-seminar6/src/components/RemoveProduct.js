import React from 'react';
import {useDispatch} from "react-redux";
import {removeProducts} from "../redux/productsSlice";

const RemoveProduct = ({ product }) => {
    const dispatch = useDispatch();

    function handleRemoveProduct() {
        dispatch(removeProducts(product.id));
    }

    return (
        <button className="remove-product" onClick={handleRemoveProduct}>Удалить</button>
    );
};

export default RemoveProduct;
