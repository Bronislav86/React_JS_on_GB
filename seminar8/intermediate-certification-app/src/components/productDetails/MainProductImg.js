import React from 'react';
import banner_index2 from '../../assets/img/banner_index2.webp'
import '../../styles/productDetailsMainImg.sass'

const MainProductImg = () => {
    return (
        <section className="product">
            <h2 style={{display: 'none'}}>фотография товара</h2>
            <div className="productContainer center">
                <img className="productContainer__img" src={banner_index2} alt="product photo"/>
                <div className="previous">
                    <button className="previous__button">
                        <svg width="13" height="23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.7 3.75 4.95 11.5l7.75 7.75-1.55 3.1L.3 11.5 11.15.65l1.55 3.1Z" fill="#000"/>
                        </svg>
                    </button>
                </div>
                <div className="forward">
                    <button className="forward__button">
                        <svg width="13" height="23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="m.3 19.25 7.75-7.75L.3 3.75 1.85.65 12.7 11.5 1.85 22.35.3 19.25Z" fill="#000"/>
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default MainProductImg;
