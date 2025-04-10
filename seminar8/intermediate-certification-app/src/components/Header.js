import React, {useEffect, useState} from 'react';
import mainLogo from '../assets/img/mainLogo.webp'
import search from '../assets/img/search.webp';
import menu from "../assets/img/menu.webp";
import user from "../assets/img/user.webp";
import basket from "../assets/img/basket.webp";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const Header = () => {
    const productsInCart = useSelector( state => state.cart.products || []);
    const [productsCounter, setProductsCounter] = useState(0);

    useEffect(() => {
        const counter = Number(productsInCart.length);

        setProductsCounter(counter.toFixed(0));

    }, [productsInCart]);

    return (
        <header>
            <h2 style={{display: "none"}}>Меню навигации сайта</h2>
            <nav className="navigation">
                <div className="navButtons">
                    <div className="leftButtons">
                        <Link to="/">
                            <img src={mainLogo} alt="main logotip"/>
                        </Link>
                        <button className="button"><img src={search} alt="search"/></button>
                    </div>
                    <div className="rightButtons">
                        <button className="button rightButtons__menu"><img src={menu} alt="menu"/></button>
                        <Link to={"/registration"}>
                            <button className="button hiden-buttons">
                                <img src={user} alt="profile"/>
                            </button>
                        </Link>
                        <Link to="/shoppingcart">
                            <button className="button hiden-buttons">
                                <img src={basket} alt="basket"/>
                            </button>
                        </Link>
                        {productsCounter > 0 ? <div className="rightButtons__sticker">{productsCounter}</div> : null}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
