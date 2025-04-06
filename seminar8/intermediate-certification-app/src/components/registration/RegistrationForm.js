import React from 'react';

const RegistrationForm = () => {
    return (
        <section className="registration center">
            <form action="#" className="registration__form">
                <h2 className="registration__heading">Your Name</h2>
                <input className="registration__input-text" type="text" placeholder="First Name"/>
                <input className="registration__input-text" type="text" placeholder="Last Name"/>
                <div className="registration__male-box">
                    <div>
                        <input className="registration__chekbox" type="radio" name="Male" id="male" value="male"
                               checked/>
                        <label className="registration__label registration__label_left" htmlFor="male">Male</label>
                    </div>
                    <div>
                        <input className="registration__chekbox" type="radio" name="Male" id="female" value="female"/>
                        <label className="registration__label registration__label_right" htmlFor="female">Female</label>
                    </div>
                </div>
                <h2 className="registration__heading">Login details</h2>
                <input className="registration__input-text" type="email" name="email" placeholder="Email"/>
                <input className="registration__input-text" type="password" placeholder="Password"/>
                <p className="registration__text">
                    Please use 8 or more characters, with at least 1 number and a mixture of uppercase and lowercase
                    letters
                </p>
                <button className="registration__button">
                    JOIN NOW
                    <svg width="17.001" height="9.919" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M11.54.2c.06-.06.14-.12.23-.15.08-.04.17-.05.27-.05.09 0 .18.01.27.05.08.03.16.09.23.15l4.25 4.25c.06.07.12.15.15.23a.66.66 0 0 1 0 .55c-.03.08-.09.16-.15.23l-4.25 4.25a.72.72 0 0 1-.5.2.703.703 0 0 1-.71-.71c0-.18.07-.36.21-.5l3.74-3.75-3.74-3.74a.868.868 0 0 1-.16-.23.868.868 0 0 1-.05-.28c0-.09.02-.18.05-.27.04-.08.09-.16.16-.23Z"
                            fill="#FFF"
                            fill-rule="evenodd"
                        />
                        <path
                            d="M0 4.95c0-.18.07-.36.2-.5.14-.13.32-.2.5-.2h14.88c.19 0 .37.07.5.2.13.14.21.32.21.5 0 .19-.08.37-.21.51-.13.13-.31.2-.5.2H.7c-.18 0-.36-.07-.5-.2a.744.744 0 0 1-.2-.51Z"
                            fill="#FFF"
                            fill-rule="evenodd"
                        />
                    </svg>
                </button>
            </form>
            <div className="registration__discription">
                <h2 className="registration__notation registration__notation_title">LOYALTY HAS ITS PERKS</h2>
                <p className="registration__notation">
                    Get in on the loyalty program where you can earn points and unlock serious perks. Starting with
                    these as
                    soon as you join:
                </p>
                <ul className="registration__list">
                    <li className="registration__notation registration__li">15% off welcome offer</li>
                    <li className="registration__notation registration__li">Free shipping, returns and exchanges on all
                        orders
                    </li>
                    <li className="registration__notation registration__li">$10 off a purchase on your birthday</li>
                    <li className="registration__notation registration__li">Early access to products</li>
                    <li className="registration__notation registration__li">Exclusive offers & rewards</li>
                </ul>
            </div>
        </section>
    );
};

export default RegistrationForm;
