import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const Counter = () => {
    const counter = useSelector(state => state);
    const dispatch = useDispatch();

    const increment = () => {
        dispatch( {type: "INCREMENT"});
    }

    const decrement = () => {
        dispatch( { type: "DECREMENT" } );
    }

    const incrementAmount = () => {
        dispatch( { type: "INCREMENT_AMOUNT" } );
    }

    return (
        <div>
            <h2>Counter: {counter}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={incrementAmount}>+5</button>
        </div>
    );
};

export default Counter;
