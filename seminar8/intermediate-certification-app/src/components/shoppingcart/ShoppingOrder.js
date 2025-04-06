import React, {useState} from 'react';

const ShoppingOrder = ({ orderSum }) => {

    return (
        <div className="productCartBox__order">
            <form className="productCartBox__form">
                <h2 className="productCartBox__head">SHIPPING ADRESS</h2>
                <input className="productCartBox__input" type="text" placeholder="Bangladesh"/>
                <input className="productCartBox__input" type="text" placeholder="State"/>
                <input className="productCartBox__input" type="text" placeholder="Postcode / Zip"/>
                <input className="productCartBox__submit" type="submit" value="GET A QOUTE"/>
            </form>
            <div className="productCartBox__total">
                <div className="productCartBox__sum">
                    <div className="productCartBox__sum-box">
                        <h3 className="productCartBox__sub-total">SUB TOTAL</h3>
                        <h3 className="productCartBox__sub-total">${orderSum}</h3>
                    </div>
                    <div className="productCartBox__sum-box">
                        <h2 className="productCartBox__grand-total">GRAND TOTAL</h2>
                        <h2 className="productCartBox__grand-total productCartBox__selectPrice">${orderSum}</h2>
                    </div>
                </div>
                <button className="productCartBox__button">PROCEED TO CHECKOUT</button>
            </div>
        </div>
    );
};

export default ShoppingOrder;
