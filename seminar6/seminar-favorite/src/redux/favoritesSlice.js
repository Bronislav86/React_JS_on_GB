import {createSlice} from "@reduxjs/toolkit";

export const favoritesSlice = createSlice({
    name: "favorites",
    initialState: {
        array: [],
    },
    reducers: {
        addFavorite: (state, {payload: newProduct}) => {
            if (state.array.some((item) => item.id === newProduct.id)) {
                return;
            }
            state.array.push(newProduct);
        },
        removeFavorite: (state, {payload: product}) => {
            state.array = state.array.filter(element => element.id !== product.id);
        },
    },
});

export const {addFavorite, removeFavorite} = favoritesSlice.actions;
export default favoritesSlice.reducer;