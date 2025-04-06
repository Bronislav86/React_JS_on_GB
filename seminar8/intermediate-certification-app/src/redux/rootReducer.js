import {combineReducers} from "@reduxjs/toolkit";
import productsReducer from './productSlice'
import cartReducer from './cartSlice'

const rootReducer = combineReducers({
    productsCards: productsReducer,
    cart: cartReducer,
})

export default rootReducer;