import React, {useContext} from 'react';
import {UserContext, ThemeContext} from "../App";
import classes from "./Profile.module.css";



const Profile = () => {
    const user = useContext(UserContext);
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className={theme === 'dark' ? classes.dark : classes.light}>
            <h2>Инофрмация о пользователе {user}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab accusantium asperiores dicta, dolorem dolorum, harum ipsam libero magni maiores nemo odio pariatur provident rerum sapiente sed suscipit tempora temporibus!</p>
            <button onClick={toggleTheme}>Нажми чтобы переключить на {theme === "light" ? 'темную' : 'светлую'} тему</button>

        </div>
    );
};

export default Profile;
