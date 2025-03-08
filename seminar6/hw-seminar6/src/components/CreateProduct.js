import React, {useState} from 'react';
import {createProducts} from "../redux/productsSlice";
import {useDispatch} from "react-redux";

const CreateProducts = () => {
    const dispatch = useDispatch();
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productPrice, setProductPrice] = useState('');

    const name = productName;
    const description = productDescription;
    const price = productPrice;

    function handleCreateProduct() {
        const newProduct = {id: Date.now(), name: name, description: description, price: price, available: true};

        dispatch(createProducts(newProduct));
        console.log(newProduct);
    }

    return (
        <>
            <input type={"text"} value={productName} onChange={(e) => setProductName(e.target.value)}/>
            <input type={"text"} value={productDescription} onChange={(e) => setProductDescription(e.target.value)}/>
            <input type={"text"} value={productPrice} onChange={(e) => setProductPrice(e.target.value)}/>
            <button type={"submit"} onClick={handleCreateProduct}>Добавить продукт</button>
        </>
    );
};

export default CreateProducts;
