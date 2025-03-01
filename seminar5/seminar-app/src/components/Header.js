import React, {createContext, useContext, useState} from 'react';
import {UserContext} from "../App";

const Header = ({ user, setUser }) => {

    const [inputValue, setInputValue] = useState('');

    function handleInputChange(e) {
        setInputValue(e.target.value);
    }

    function handleSubmit() {

        setUser(inputValue);
        setInputValue('');
    }

    return (
        <>
            <h1>Привет, {user} !</h1>
            <input type="text" onChange={handleInputChange}></input>
            <button onClick={handleSubmit}>Изменить имя пользователя</button>
        </>
    );
};

export default Header;
