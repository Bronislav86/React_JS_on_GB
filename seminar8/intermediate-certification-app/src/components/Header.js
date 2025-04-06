import React from 'react';
import mainLogo from '../assets/img/mainLogo.webp'
import search from '../assets/img/search.webp';
import menu from "../assets/img/menu.webp";
import user from "../assets/img/user.webp";
import basket from "../assets/img/basket.webp";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div>
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
                        <div className="rightButtons__sticker">5</div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
