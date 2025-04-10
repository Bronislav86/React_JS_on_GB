import React from 'react';
import {Link} from "react-router-dom";

const MainSection = () => {
    return (
        <section className="mainSection center">
            <h2 style={{display: 'none'}}>*******************</h2>
            <div className="product-desc">
                <div className="product-desc__b-line">
                    <div className="product-desc__heading">WOMEN COLLECTION</div>
                    <div>
                        <svg width="63" height="4" viewBox="0 0 63 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M63 0.786865H0V3.81225H63V0.786865Z" fill="#EF5B70"/>
                        </svg>
                    </div>
                    <h2 className="product-desc__lable">MOSCHINO CHEAP AND CHIC</h2>
                    <p className="product-desc__description">
                        Compellingly actualize fully researched processes before proactive outsourcing.<br/>Progressively
                        syndicate collaborative architectures before cutting-edge services. Completely<br/>visualize
                        parallel
                        core competencies rather than exceptional portals.
                    </p>
                    <h2 className="product-desc__price">$561</h2>
                </div>
                <div className="choose">
                    <details>
                        <summary className="choose__item">
                            <span className="choose__heading">CHOOSE COLOR</span>
                            <svg width="11" height="6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M5.002 5.648a.71.71 0 0 1-.457-.165L.258 1.88A.723.723 0 0 1 .65.607a.711.711 0 0 1 .523.164l3.83 3.228L8.831.885a.712.712 0 0 1 1.007.108.722.722 0 0 1-.1 1.052l-4.287 3.48a.71.71 0 0 1-.45.122Z"
                                    fill="#6F6E6E"
                                />
                            </svg>
                        </summary>
                    </details>
                    <details>
                        <summary className="choose__item">
                            <span className="choose__heading">CHOOSE SIZE</span>
                            <svg width="11" height="6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M5.002 5.648a.71.71 0 0 1-.457-.165L.258 1.88A.723.723 0 0 1 .65.607a.711.711 0 0 1 .523.164l3.83 3.228L8.831.885a.712.712 0 0 1 1.007.108.722.722 0 0 1-.1 1.052l-4.287 3.48a.71.71 0 0 1-.45.122Z"
                                    fill="#6F6E6E"
                                />
                            </svg>
                        </summary>
                    </details>
                    <details>
                        <summary className="choose__item">
                            <span className="choose__heading">QUANTITY</span>
                            <svg width="11" height="6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M5.002 5.648a.71.71 0 0 1-.457-.165L.258 1.88A.723.723 0 0 1 .65.607a.711.711 0 0 1 .523.164l3.83 3.228L8.831.885a.712.712 0 0 1 1.007.108.722.722 0 0 1-.1 1.052l-4.287 3.48a.71.71 0 0 1-.45.122Z"
                                    fill="#6F6E6E"
                                />
                            </svg>
                        </summary>
                    </details>
                </div>
                <Link to={"/shoppingcart"}>
                    <button className="product-desc__bottomBtn" formAction="#">
                        <svg width="27" height="25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5.498 22.185c.008-.433.143-.854.387-1.21.244-.356.588-.632.987-.792a2.163 2.163 0 0 1 2.362.502 2.204 2.204 0 0 1 .454 2.39 2.183 2.183 0 0 1-2.01 1.349 2.184 2.184 0 0 1-1.55-.664 2.22 2.22 0 0 1-.63-1.575Zm15.806 2.239a2.205 2.205 0 0 1-1.224-.35 2.233 2.233 0 0 1-.833-.971 2.256 2.256 0 0 1 .388-2.428 2.202 2.202 0 0 1 3.397.149c.264.347.421.764.453 1.2a2.274 2.274 0 0 1-.53 1.628 2.167 2.167 0 0 1-1.49.773l-.16-.001Zm-12.71-6.939a.96.96 0 0 1-.587-.202.973.973 0 0 1-.343-.52L3.737 2.194H.979a.974.974 0 0 1-.692-.289.991.991 0 0 1 0-1.395.974.974 0 0 1 .692-.29h3.479a.96.96 0 0 1 .586.203c.168.13.289.314.344.52l3.927 14.568h10.704l3.558-8.385h-11.86a.974.974 0 0 1-.691-.29.991.991 0 0 1 0-1.395.974.974 0 0 1 .692-.289h13.335a.945.945 0 0 1 .8.445 1.014 1.014 0 0 1 .08.937l-4.392 10.358a.97.97 0 0 1-.882.592H8.594Z"
                                fill="#EF5B70"
                            />
                        </svg>
                        <span className="pinkTextInProducts">Add to Cart</span>
                    </button>
                </Link>
            </div>
            <div className="center products">
                <div className="cards-Products">
                    <div className="cards-Products__card">
                        <div className="cards-Products__card-image_1">
                            <div className="cards-Products__card-hover">
                                <button className="cards-Products__card_hover-button" formAction="#">
                                    <svg width="27" height="25" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M21.952 23.266h-.112c-.61 0-1.121-.5-1.165-1.137-.045-.669.444-1.25 1.089-1.295a1.196 1.196 0 0 1 1.258 1.114c.011.249-.03.603-.285.895l-.006.007-.006.007a1.158 1.158 0 0 1-.773.41ZM8.22 23.26c-.65 0-1.18-.543-1.18-1.21 0-.667.53-1.21 1.18-1.21.65 0 1.18.543 1.18 1.21 0 .667-.53 1.21-1.18 1.21Z"
                                        />
                                        <path
                                            d="M21.877 22.266a.146.146 0 0 0 .084-.053c.007-.01.015-.018.023-.027.036-.042.04-.13.039-.175-.013-.107-.104-.18-.181-.18h-.01c-.078.006-.166.11-.16.232.01.116.096.203.168.203h.037ZM8.22 22.26c.1 0 .18-.095.18-.21 0-.116-.08-.21-.18-.21-.1 0-.18.094-.18.21 0 .116.08.21.18.21ZM22 24.266h-.16c-1.138 0-2.083-.911-2.163-2.068-.08-1.205.817-2.28 2.019-2.362.049-.003.097-.005.146-.005 1.138 0 2.1.901 2.178 2.057.031.603-.145 1.173-.53 1.613a2.16 2.16 0 0 1-1.49.765ZM8.22 24.26c-1.204 0-2.18-.99-2.18-2.21s.976-2.21 2.18-2.21c1.204 0 2.18.99 2.18 2.21s-.976 2.21-2.18 2.21Zm12.979-6.866H9.134a.965.965 0 0 1-.93-.716L4.278 2.247H1.522a.972.972 0 0 1-.961-.978c0-.537.433-.977.961-.977H5c.432 0 .816.293.929.717l3.925 14.43h10.704l3.557-8.306H12.258a.973.973 0 0 1-.962-.978c0-.537.433-.977.962-.977H25.59a.95.95 0 0 1 .801.44 1 1 0 0 1 .08.928l-4.39 10.26a.963.963 0 0 1-.881.587Z"
                                        />
                                        <path
                                            d="M21.877 22.266a.146.146 0 0 0 .084-.053c.007-.01.015-.018.023-.027.036-.042.04-.13.039-.175-.013-.107-.104-.18-.181-.18h-.01c-.078.006-.166.11-.16.232.01.116.096.203.168.203h.037ZM8.22 22.26c.1 0 .18-.095.18-.21 0-.116-.08-.21-.18-.21-.1 0-.18.094-.18.21 0 .116.08.21.18.21ZM22 24.266h-.16c-1.138 0-2.083-.911-2.163-2.068-.08-1.205.817-2.28 2.019-2.362.049-.003.097-.005.146-.005 1.138 0 2.1.901 2.178 2.057.031.603-.145 1.173-.53 1.613a2.16 2.16 0 0 1-1.49.765ZM8.22 24.26c-1.204 0-2.18-.99-2.18-2.21s.976-2.21 2.18-2.21c1.204 0 2.18.99 2.18 2.21s-.976 2.21-2.18 2.21Zm12.979-6.866H9.134a.965.965 0 0 1-.93-.716L4.278 2.247H1.522a.972.972 0 0 1-.961-.978c0-.537.433-.977.961-.977H5c.432 0 .816.293.929.717l3.925 14.43h10.704l3.557-8.306H12.258a.973.973 0 0 1-.962-.978c0-.537.433-.977.962-.977H25.59a.95.95 0 0 1 .801.44 1 1 0 0 1 .08.928l-4.39 10.26a.963.963 0 0 1-.881.587Z"
                                        />
                                    </svg>
                                    <span>Add to Cart</span>
                                </button>
                            </div>
                        </div>
                        <div className="cardInformation">
                            <h3>ELLERY X&nbsp;M&rsquo;O CAPSULE</h3>
                            <p>
                                Known for her sculptural takes on&nbsp;traditional tailoring, Australian arbiter
                                of&nbsp;cool Kym
                                Ellery teams up&nbsp;with Moda Operandi.
                            </p>
                            <span className="pinkTextInProducts">$52.00</span>
                        </div>
                    </div>
                    <div className="cards-Products__card cards-Products__card_mobile">
                        <div className="cards-Products__card-image_2">
                            <div className="cards-Products__card-hover">
                                <button className="cards-Products__card_hover-button" formAction="#">
                                    <svg width="27" height="25" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M21.952 23.266h-.112c-.61 0-1.121-.5-1.165-1.137-.045-.669.444-1.25 1.089-1.295a1.196 1.196 0 0 1 1.258 1.114c.011.249-.03.603-.285.895l-.006.007-.006.007a1.158 1.158 0 0 1-.773.41ZM8.22 23.26c-.65 0-1.18-.543-1.18-1.21 0-.667.53-1.21 1.18-1.21.65 0 1.18.543 1.18 1.21 0 .667-.53 1.21-1.18 1.21Z"
                                        />
                                        <path
                                            d="M21.877 22.266a.146.146 0 0 0 .084-.053c.007-.01.015-.018.023-.027.036-.042.04-.13.039-.175-.013-.107-.104-.18-.181-.18h-.01c-.078.006-.166.11-.16.232.01.116.096.203.168.203h.037ZM8.22 22.26c.1 0 .18-.095.18-.21 0-.116-.08-.21-.18-.21-.1 0-.18.094-.18.21 0 .116.08.21.18.21ZM22 24.266h-.16c-1.138 0-2.083-.911-2.163-2.068-.08-1.205.817-2.28 2.019-2.362.049-.003.097-.005.146-.005 1.138 0 2.1.901 2.178 2.057.031.603-.145 1.173-.53 1.613a2.16 2.16 0 0 1-1.49.765ZM8.22 24.26c-1.204 0-2.18-.99-2.18-2.21s.976-2.21 2.18-2.21c1.204 0 2.18.99 2.18 2.21s-.976 2.21-2.18 2.21Zm12.979-6.866H9.134a.965.965 0 0 1-.93-.716L4.278 2.247H1.522a.972.972 0 0 1-.961-.978c0-.537.433-.977.961-.977H5c.432 0 .816.293.929.717l3.925 14.43h10.704l3.557-8.306H12.258a.973.973 0 0 1-.962-.978c0-.537.433-.977.962-.977H25.59a.95.95 0 0 1 .801.44 1 1 0 0 1 .08.928l-4.39 10.26a.963.963 0 0 1-.881.587Z"
                                        />
                                        <path
                                            d="M21.877 22.266a.146.146 0 0 0 .084-.053c.007-.01.015-.018.023-.027.036-.042.04-.13.039-.175-.013-.107-.104-.18-.181-.18h-.01c-.078.006-.166.11-.16.232.01.116.096.203.168.203h.037ZM8.22 22.26c.1 0 .18-.095.18-.21 0-.116-.08-.21-.18-.21-.1 0-.18.094-.18.21 0 .116.08.21.18.21ZM22 24.266h-.16c-1.138 0-2.083-.911-2.163-2.068-.08-1.205.817-2.28 2.019-2.362.049-.003.097-.005.146-.005 1.138 0 2.1.901 2.178 2.057.031.603-.145 1.173-.53 1.613a2.16 2.16 0 0 1-1.49.765ZM8.22 24.26c-1.204 0-2.18-.99-2.18-2.21s.976-2.21 2.18-2.21c1.204 0 2.18.99 2.18 2.21s-.976 2.21-2.18 2.21Zm12.979-6.866H9.134a.965.965 0 0 1-.93-.716L4.278 2.247H1.522a.972.972 0 0 1-.961-.978c0-.537.433-.977.961-.977H5c.432 0 .816.293.929.717l3.925 14.43h10.704l3.557-8.306H12.258a.973.973 0 0 1-.962-.978c0-.537.433-.977.962-.977H25.59a.95.95 0 0 1 .801.44 1 1 0 0 1 .08.928l-4.39 10.26a.963.963 0 0 1-.881.587Z"
                                        />
                                    </svg>
                                    <span>Add to Cart</span>
                                </button>
                            </div>
                        </div>
                        <div className="cardInformation">
                            <h3>ELLERY X&nbsp;M&rsquo;O CAPSULE</h3>
                            <p>
                                Known for her sculptural takes on&nbsp;traditional tailoring, Australian arbiter
                                of&nbsp;cool Kym
                                Ellery teams up&nbsp;with Moda Operandi.
                            </p>
                            <span className="pinkTextInProducts">$52.00</span>
                        </div>
                    </div>
                    <div className="cards-Products__card cards-Products__card_tablet">
                        <div className="cards-Products__card-image_3">
                            <div className="cards-Products__card-hover">
                                    <button className="cards-Products__card_hover-button" formAction="#">
                                        <svg width="27" height="25" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M21.952 23.266h-.112c-.61 0-1.121-.5-1.165-1.137-.045-.669.444-1.25 1.089-1.295a1.196 1.196 0 0 1 1.258 1.114c.011.249-.03.603-.285.895l-.006.007-.006.007a1.158 1.158 0 0 1-.773.41ZM8.22 23.26c-.65 0-1.18-.543-1.18-1.21 0-.667.53-1.21 1.18-1.21.65 0 1.18.543 1.18 1.21 0 .667-.53 1.21-1.18 1.21Z"
                                            />
                                            <pathx
                                                d="M21.877 22.266a.146.146 0 0 0 .084-.053c.007-.01.015-.018.023-.027.036-.042.04-.13.039-.175-.013-.107-.104-.18-.181-.18h-.01c-.078.006-.166.11-.16.232.01.116.096.203.168.203h.037ZM8.22 22.26c.1 0 .18-.095.18-.21 0-.116-.08-.21-.18-.21-.1 0-.18.094-.18.21 0 .116.08.21.18.21ZM22 24.266h-.16c-1.138 0-2.083-.911-2.163-2.068-.08-1.205.817-2.28 2.019-2.362.049-.003.097-.005.146-.005 1.138 0 2.1.901 2.178 2.057.031.603-.145 1.173-.53 1.613a2.16 2.16 0 0 1-1.49.765ZM8.22 24.26c-1.204 0-2.18-.99-2.18-2.21s.976-2.21 2.18-2.21c1.204 0 2.18.99 2.18 2.21s-.976 2.21-2.18 2.21Zm12.979-6.866H9.134a.965.965 0 0 1-.93-.716L4.278 2.247H1.522a.972.972 0 0 1-.961-.978c0-.537.433-.977.961-.977H5c.432 0 .816.293.929.717l3.925 14.43h10.704l3.557-8.306H12.258a.973.973 0 0 1-.962-.978c0-.537.433-.977.962-.977H25.59a.95.95 0 0 1 .801.44 1 1 0 0 1 .08.928l-4.39 10.26a.963.963 0 0 1-.881.587Z"
                                            />
                                            <path
                                                d="M21.877 22.266a.146.146 0 0 0 .084-.053c.007-.01.015-.018.023-.027.036-.042.04-.13.039-.175-.013-.107-.104-.18-.181-.18h-.01c-.078.006-.166.11-.16.232.01.116.096.203.168.203h.037ZM8.22 22.26c.1 0 .18-.095.18-.21 0-.116-.08-.21-.18-.21-.1 0-.18.094-.18.21 0 .116.08.21.18.21ZM22 24.266h-.16c-1.138 0-2.083-.911-2.163-2.068-.08-1.205.817-2.28 2.019-2.362.049-.003.097-.005.146-.005 1.138 0 2.1.901 2.178 2.057.031.603-.145 1.173-.53 1.613a2.16 2.16 0 0 1-1.49.765ZM8.22 24.26c-1.204 0-2.18-.99-2.18-2.21s.976-2.21 2.18-2.21c1.204 0 2.18.99 2.18 2.21s-.976 2.21-2.18 2.21Zm12.979-6.866H9.134a.965.965 0 0 1-.93-.716L4.278 2.247H1.522a.972.972 0 0 1-.961-.978c0-.537.433-.977.961-.977H5c.432 0 .816.293.929.717l3.925 14.43h10.704l3.557-8.306H12.258a.973.973 0 0 1-.962-.978c0-.537.433-.977.962-.977H25.59a.95.95 0 0 1 .801.44 1 1 0 0 1 .08.928l-4.39 10.26a.963.963 0 0 1-.881.587Z"
                                            />
                                        </svg>
                                        <span>Add to Cart</span>
                                    </button>
                            </div>
                        </div>
                        <div className="cardInformation">
                            <h3>ELLERY X&nbsp;M&rsquo;O CAPSULE</h3>
                            <p>
                                Known for her sculptural takes on&nbsp;traditional tailoring, Australian arbiter
                                of&nbsp;cool Kym
                                Ellery teams up&nbsp;with Moda Operandi.
                            </p>
                            <span className="pinkTextInProducts">$52.00</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainSection;
