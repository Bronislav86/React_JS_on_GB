import {createSlice} from "@reduxjs/toolkit";

export const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: [
            {id: 1, name: "Product 1", description: "description", price: "price", available: false},
        ],
    },
    reducers: {
        createProducts: (state, {payload: newProduct}) => {
            state.products = [...state.products, newProduct];
            console.log(state.products);
        },
        removeProducts: (state, {payload: productId}) => {
            state.products = state.products.filter(product => product.id !== productId);
        },
        updateProducts: (state, {payload: updatedProduct}) => {
            console.log(updatedProduct);
            state.products = state.products.filter(product => product.id !== updatedProduct.id);
            state.products = [...state.products, updatedProduct];
        },
        changeAvailableProducts: (state, {payload: productId}) => {
            state.products = state.products.map(product =>
            (product.id === productId) ? {...product, available: !product.available} : product);
            console.log(state.products);
        }
    }
});

export const { createProducts, removeProducts, updateProducts, changeAvailableProducts } = productsSlice.actions;
export default productsSlice.reducer;