import React from 'react';
import bannerPhoto from '../../assets/img/bunnerPhoto.webp'

const BannerSection = () => {
    return (
        <section className="banner">
            <h2 style={{display: 'none'}}>Большой баннер и название магазина</h2>
            <div className="bannerConteiner">
                <img className="bannerImg" src={bannerPhoto} alt="banner_photo"/>
                <section className="rightHeading">
                    <div className="text">
                        <h2>THE BRAND</h2>
                        <h3>OF LUXERIOUS <span className="pinkFashion">FASHION</span></h3>
                    </div>
                </section>
                <nav className="menu__active hidden">
                    <h2 className="menu__active_heading">MENU</h2>
                    <div className="menu__active_items">
                        <h2 className="menu__active_items-pink_item">MAN</h2>
                        <ul className="menu__li-box">
                            <li className="menu__li"><a className="menu__a" href="#">Accessories</a></li>
                            <li className="menu__li"><a className="menu__a" href="#">Bags</a></li>
                            <li className="menu__li"><a className="menu__a" href="#">Denim</a></li>
                            <li className="menu__li"><a className="menu__a" href="#">T-Shirts</a></li>
                        </ul>
                    </div>
                    <div className="menu__active_items">
                        <h2 className="menu__active_items-pink_item">WOMAN</h2>
                        <ul className="menu__li-box">
                            <li className="menu__li"><a className="menu__a" href="#">Accessories</a></li>
                            <li className="menu__li"><a className="menu__a" href="#">Jackets &amp;&nbsp;Coats</a></li>
                            <li className="menu__li"><a className="menu__a" href="#">Polos</a></li>
                            <li className="menu__li"><a className="menu__a" href="#">T-Shirts</a></li>
                            <li className="menu__li"><a className="menu__a" href="#">Shirts</a></li>
                        </ul>
                    </div>
                    <div className="menu__active_items">
                        <h2 className="menu__active_items-pink_item">KIDS</h2>
                        <ul className="menu__li-box">
                            <li className="menu__li"><a className="menu__a" href="#">Accessories</a></li>
                            <li className="menu__li"><a className="menu__a" href="#">Jackets &amp;&nbsp;Coats</a></li>
                            <li className="menu__li"><a className="menu__a" href="#">Polos</a></li>
                            <li className="menu__li"><a className="menu__a" href="#">T-Shirts</a></li>
                            <li className="menu__li"><a className="menu__a" href="#">Shirts</a></li>
                            <li className="menu__li"><a className="menu__a" href="#">Bags</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </section>
    );
};

export default BannerSection;
