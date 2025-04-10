import React from 'react';
import {Link} from "react-router-dom";

const TopHead = ({ children }) => {
    if (!children) {
    return (
        <div className="top-head-menu">
            <div className="top-head-menu__box center">
                <h2 className="top-head-menu__heading">NEW ARRIVALS</h2>
                <nav className="breadCrumbs">
                    <div className="breadCrumbs__box"><Link to={'/'} className="breadCrumbs__link">HOME</Link></div>
                    <div className="breadCrumbs__box"><Link to={"#"} className="breadCrumbs__link">MENU</Link></div>
                    <div className="breadCrumbs__box"><Link to={"#"} className="breadCrumbs__link">NEW ARRIVALS</Link></div>
                </nav>
            </div>
        </div>
    )}
    return <div className={"top-head center"}>{ children }</div>
};

export default TopHead;
