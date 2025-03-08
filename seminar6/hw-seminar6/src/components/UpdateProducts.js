import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {updateProducts} from "../redux/productsSlice";

const UpdateProducts = ({ product }) => {
    const dispatch = useDispatch();
    const [productName, setProductName] = useState(product.name);
    const [productDescription, setProductDescription] = useState(product.description);
    const [productPrice, setProductPrice] = useState(product.price);

    function handleUpdateProduct() {
        setProductName(prompt('Введите новое назавние продукта'));
        setProductDescription(prompt('Введите новое описание'));
        setProductPrice(Number(prompt('Введите новую цену')));

        const name = productName;
        const description = productDescription;
        const price = productPrice;

        const updatedProduct = {id: product.id, name: name, description: description,
        price: price, available: product.available};
        console.log(updatedProduct);

        dispatch(updateProducts(updatedProduct));
    }
    return (
        <button className="btn-update" onClick={handleUpdateProduct}>Изменить</button>
    );
};

export default UpdateProducts;
