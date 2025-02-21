import {useState} from 'react';
import * as React from 'react';
import Switch from '@mui/material/Switch';

const ThemeSwitcher = () => {
    const [theme, setTheme] = useState("light");

    function toggleLight() {
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }

    const label = { inputProps: { 'aria-label': 'Switch demo' } };

    return (
        <div>
            <Content theme={theme}/>
        </div>
    );

    function Content ({ theme }) {
        return (
            <div className="footer_content" style={ {backgroundColor: theme === "light" ? "#aeaeae" : "#454545"} }>
                <p>Здесть находится какой-то контент с фоном</p>
                <Switch {...label} defaultChecke onChange={toggleLight} />
            </div>
        );
    }

};

export default ThemeSwitcher;