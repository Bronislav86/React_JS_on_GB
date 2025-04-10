import React from 'react';

const OptionsNavigation = () => {
    return (
        <>
            <h2 style={{display: 'none'}}>Карточки с разделами сайта</h2>
            <div className="options conteiner">
                <div className="card1">
                    <div className="layOfCard">
                        <a href="">
                            <h3>30% OFF</h3>
                            <h2 className="pinkText">FOR WOMEN</h2>
                        </a>
                    </div>
                </div>
                <div className="card2">
                    <div className="layOfCard">
                        <a href="#">
                            <h3>HOT DEAL</h3>
                            <h2 className="pinkText">FOR MEN</h2>
                        </a>
                    </div>
                </div>
                <div className="card3">
                    <div className="layOfCard">
                        <a href="#">
                            <h3>NEW ARRIVALS</h3>
                            <h1 className="pinkText">FOR KIDS</h1>
                        </a>
                    </div>
                </div>
                <div className="card4">
                    <div className="layOfCard">
                        <a href="#">
                            <h3>30% OFF</h3>
                            <h1 className="pinkText">ACCESORIES</h1>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OptionsNavigation;
