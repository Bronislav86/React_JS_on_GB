import React from 'react';
import {useDispatch} from "react-redux";
import {fetchUserData} from "./actions";

const ThunkComponent = () => {
    const dispatch = useDispatch();

    const handleButtonClick = () => {
        dispatch(fetchUserData());
    }
    return (
        <button onClick={handleButtonClick}>Загрузить данные пользователя</button>
    );
};

export default ThunkComponent;
