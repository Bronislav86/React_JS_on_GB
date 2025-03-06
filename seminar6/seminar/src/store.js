import { configureStore } from "@reduxjs/toolkit";
//import todosReducer from "./redux/todosReducer";
import rootReducer from "./reducers/index.";

const store = configureStore({
    reducer: rootReducer,
});

export default store;