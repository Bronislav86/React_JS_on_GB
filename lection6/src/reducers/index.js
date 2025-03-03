import {combineReducers} from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import todosReducer from "./todosReducer";

const rootReducer = combineReducers({
    counter: counterReducer,
    todos: todosReducer,
});

export default rootReducer;