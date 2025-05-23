import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import '../../styles/cartsProductBox.sass'
import ShoppingOrder from "./ShoppingOrder";
import {changeQuantity, clearCart, removeFromCart} from "../../redux/cartSlice";
import {Link} from "react-router-dom";

const CartsProductBox = () => {
    const dispatch = useDispatch();
    const productsInCart = useSelector(state => state.cart.products || []);
    const [orderSum, setOrderSum] = useState();

    useEffect(() => {
        const sum = productsInCart.reduce((total, product) => {
            return total + (Number(product.price) * product.quantity);
        }, 0);

        setOrderSum(sum.toFixed(2));
    }, [productsInCart]);

    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id));
    }

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    const handleChangeQuantity = (e, id) => {
        const newQuantity = Math.max(1, parseInt(e.target.value));

        dispatch(changeQuantity({newQuantity, id}));
    }

    return (
        <div className="productCartBox center">
            <div className="productCartBox__carts-box">
                {productsInCart.length === 0 ? <div>Cart is Empty</div> : productsInCart.map((product) =>
                    <div className="productCartBox__carts" key={product?.id}>
                        <img className="productCartBox__img" src={product?.img} alt="photo_of_product"/>
                        <div className="productCartBox__description">
                            <h2 className="productCartBox__heading">{product?.title}</h2>
                            <div className="productCartBox__filter">
                                <h3 className="productCartBox__text">Price: <span
                                    className="productCartBox__price">${product?.price}</span>
                                </h3>
                                <h3 className="productCartBox__text">Color: {product?.color}</h3>
                                <h3 className="productCartBox__text">Size: {product?.size}</h3>
                                <h3 className="productCartBox__text">Quantity:</h3>
                                <input type="text" className="productCartBox__quantity" value={product?.quantity}
                                       onChange={(e) => handleChangeQuantity(e, product.id)}/>
                            </div>
                            <div className="productCartBox__exit" onClick={() => handleRemoveFromCart(product.id)}>
                                <svg
                                    width="18.000000"
                                    height="18.000000"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                >
                                    <defs/>
                                    <path
                                        id="Vector"
                                        d="M11.24 9L17.53 2.71C17.82 2.41 17.99 2.01 17.99 1.59C17.99 1.17 17.83 0.76 17.53 0.46C17.23 0.16 16.83 0 16.4 0C15.98 0 15.58 0.16 15.28 0.46L9 6.75L2.71 0.46C2.41 0.16 2.01 0 1.59 0C1.16 0 0.76 0.16 0.46 0.46C0.16 0.76 0 1.16 0 1.59C0 2.01 0.16 2.41 0.46 2.71L6.75 9L0.46 15.28C0.16 15.58 0 15.98 0 16.4C0 16.83 0.16 17.23 0.46 17.53C0.76 17.83 1.16 18 1.59 18C2.01 18 2.41 17.83 2.71 17.53L9 11.24L15.28 17.53C15.58 17.83 15.98 18 16.4 18C16.83 18 17.23 17.83 17.53 17.53C17.83 17.23 18 16.83 18 16.4C18 15.98 17.83 15.58 17.53 15.28L11.24 9Z"
                                        fill="#575757"
                                        fill-opacity="1.000000"
                                        fill-rule="nonzero"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                )
                }
                <div className="productCartBox__button-box">
                    <button className="productCartBox__butt" onClick={handleClearCart}>CLEAR SHOPPING CART</button>
                    <Link to={"/newarrivals"}>
                        <button className="productCartBox__butt">CONTINUE SHOPPING</button>
                    </Link>
                </div>
            </div>
            <ShoppingOrder orderSum={orderSum}/>
        </div>
    )
        ;
};

export default CartsProductBox;
