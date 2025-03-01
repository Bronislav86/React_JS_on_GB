import {useSelector, useDispatch} from 'react-redux'
import React from "react";
import {toggleTheme} from "./themeSlice";


function ThemeSwitcher() {
    const dispatch = useDispatch()
    const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);

    function handleToggleTheme() {
        dispatch(toggleTheme());
    }

    return (
        <div>
            <button
                onClick={handleToggleTheme}
            >
                Переключить на {isDarkTheme ? 'светлую' : 'темную'} тему
            </button>
        </div>
    )
}

export default ThemeSwitcher;