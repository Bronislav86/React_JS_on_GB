import React from 'react';
import {configureStore} from "@reduxjs/toolkit";

const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'DECREMENT':
            return state - 1;
        case 'INCREMENT':
            return state + 1;
        case 'INCREMENT_AMOUNT':
            return state + 5;
            default:
                return state;
    }
};

const store = configureStore({
    reducer: reducer,
})

export default store;
