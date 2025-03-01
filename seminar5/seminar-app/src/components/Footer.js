import React, {useContext, useState} from 'react';
import {ThemeContext} from "../App";
import classes from "./Profile.module.css";

const Footer = () => {
    const { theme } = useContext(ThemeContext);
    const [date, setDate] = useState(new Date());

    function getDate() {
        return date.toLocaleDateString("en-US");
    }

    return (
        <div className={theme === "dark" ? classes.dark : classes.light}>
            <p>© {getDate()} FrontendAble. Все права защищены</p>
        </div>
    );
};

export default Footer;
