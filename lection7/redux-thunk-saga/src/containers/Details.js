import React from 'react';
import {useSelector} from "react-redux";

const Details = () => {
    const state = useSelector((state) => state.carActive);
    if (!state)
        return <div>Здесь будет описание выбранной модели</div>;

console.log("Details state: ", state);
    return (
        <div>
            <h2>{state.model}</h2>
            <p>Описание: {state.desc}</p>
            <b>Скорость: {state.speed}</b><br/>
            <b>Вес: {state.weight}</b>
        </div>
    );
};

export default Details;
