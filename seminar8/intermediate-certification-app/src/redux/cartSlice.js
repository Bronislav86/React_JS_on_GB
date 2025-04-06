import {createSlice} from "@reduxjs/toolkit";
import product1 from "../assets/img/product1.webp";
import product2 from "../assets/img/product2.webp";




export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products:[
            {
                id: 1,
                name: "Product1",
                card_img: 'card__image_1',
                img: product1,
                title: 'ELLERY X M’O CAPSULE',
                description: 'Known for her sculptural takes on&nbsp;traditional tailoring, Australian arbiter\n' +
                    '                                of&nbsp;cool\n' +
                    '                                Kym\n' +
                    '                                Ellery teams up&nbsp;with Moda Operandi',
                price: "52.00",
                color: 'red',
                size: 'S',
                quantity: 1,
                available: true
            },
            {
                id: 2,
                name: "Product2",
                card_img: 'card__image_2',
                img: product2,
                title: 'ELLERY X M’O CAPSULE',
                description: 'Known for her sculptural takes on&nbsp;traditional tailoring, Australian arbiter\n' +
                    '                                of&nbsp;cool\n' +
                    '                                Kym\n' +
                    '                                Ellery teams up&nbsp;with Moda Operandi',
                price: "52.00",
                color: 'red',
                size: 'XL',
                quantity: 1,
                available: true
            },
        ]
    },
    reducers: {
        removeFromCart: (state, {payload: productId}) => {
            state.products = state.products.filter((product) => product.id !== productId);
        },
        clearCart: (state) => {
            state.products = [];
        },
        changeQuantity: (state, action) => {
            const {id, newQuantity} = action.payload;

            state.products = state.products.map((product) => product.id === id ? {...product, quantity: newQuantity} : product);
        },
        addNewProductToCart: (state, {payload: newProduct}) => {
            state.products.push(newProduct);
        }
    }
})

export default cartSlice.reducer;
export const {removeFromCart, clearCart, changeQuantity, addNewProductToCart} = cartSlice.actions;