import {combineReducers} from "@reduxjs/toolkit";
import todosReducer from "./todosReducer";

const rootReducer = combineReducers({
    todos: todosReducer,
});

export default rootReducer;