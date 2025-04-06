import {configureStore} from "@reduxjs/toolkit";
import productsReducer from "./productSlice";
import rootReducer from "./rootReducer";

export const store = configureStore({
    reducer: rootReducer,

})