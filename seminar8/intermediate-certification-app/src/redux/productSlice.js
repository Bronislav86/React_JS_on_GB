import {createSlice} from "@reduxjs/toolkit";
import product1 from "../assets/img/product1.webp";
import product2 from "../assets/img/product2.webp";
import product3 from "../assets/img/product3.webp";
import product4 from "../assets/img/product4.webp";
import product5 from "../assets/img/product5.webp";
import product6 from "../assets/img/product6.webp";
import product7 from "../assets/img/product7.webp";
import product8 from "../assets/img/product8.webp";
import product9 from "../assets/img/product9.webp";


export const productsSlice = createSlice({

    name: "productsCards",
    initialState: {
        products: [
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
                price: 52.00,
                color: 'red',
                size: 'S',
                quantity: 1,
                available: true
            },
            {
                id: 2,
                name: "Product2",
                img: product2,
                card_img: 'card__image_2',
                title: 'ELLERY X M’O CAPSULE',
                description: 'Known for her sculptural takes on&nbsp;traditional tailoring, Australian arbiter\n' +
                    '                                of&nbsp;cool\n' +
                    '                                Kym\n' +
                    '                                Ellery teams up&nbsp;with Moda Operandi',
                price: 52.00,
                color: 'red',
                size: 'M',
                quantity: 1,
                available: true
            },
            {
                id: 3,
                name: 'Product3',
                card_img: 'card__image_3',
                img: product3,
                title: 'ELLERY X M’O CAPSULE',
                description: 'Known for her sculptural takes on&nbsp;traditional tailoring, Australian arbiter\n' +
                    '                                of&nbsp;cool\n' +
                    '                                Kym\n' +
                    '                                Ellery teams up&nbsp;with Moda Operandi',
                price: 52.00,
                color: 'red',
                size: 'L',
                quantity: 1,
                available: true
            },
            {
                id: 4,
                name: 'Product4',
                card_img: 'card__image_4',
                img: product4,
                title: 'ELLERY X M’O CAPSULE',
                description: 'Known for her sculptural takes on&nbsp;traditional tailoring, Australian arbiter\n' +
                    '                                of&nbsp;cool\n' +
                    '                                Kym\n' +
                    '                                Ellery teams up&nbsp;with Moda Operandi',
                price: 52.00,
                color: 'red',
                size: 'XS',
                quantity: 1,
                available: true
            },
            {
                id: 5,
                name: 'Product5',
                card_img: 'card__image_5',
                img: product5,
                title: 'ELLERY X M’O CAPSULE',
                description: 'Known for her sculptural takes on&nbsp;traditional tailoring, Australian arbiter\n' +
                    '                                of&nbsp;cool\n' +
                    '                                Kym\n' +
                    '                                Ellery teams up&nbsp;with Moda Operandi',
                price: 52.00,
                color: 'red',
                size: 'S',
                quantity: 1,
                available: true
            },
            {
                id: 6,
                name: 'Product6',
                img: product6,
                card_img: 'card__image_6',
                title: 'ELLERY X M’O CAPSULE',
                description: 'Known for her sculptural takes on&nbsp;traditional tailoring, Australian arbiter\n' +
                    '                                of&nbsp;cool\n' +
                    '                                Kym\n' +
                    '                                Ellery teams up&nbsp;with Moda Operandi',
                price: 2.00,
                color: 'red',
                size: 'L',
                quantity: 1,
                available: true
            },
            {
                id: 7,
                name: 'Product7',
                card_img: 'card__image_6',
                img: product7,
                title: 'ELLERY X M’O CAPSULE',
                description: 'Known for her sculptural takes on&nbsp;traditional tailoring, Australian arbiter\n' +
                    '                                of&nbsp;cool\n' +
                    '                                Kym\n' +
                    '                                Ellery teams up&nbsp;with Moda Operandi',
                price: 52.00,
                color: 'red',
                size: 'M',
                quantity: 1,
                available: true
            },
            {
                id: 8,
                name: 'Product8',
                img: product8,
                card_img: 'card__image_8',
                title: 'ELLERY X M’O CAPSULE',
                description: 'Known for her sculptural takes on&nbsp;traditional tailoring, Australian arbiter\n' +
                    '                                of&nbsp;cool\n' +
                    '                                Kym\n' +
                    '                                Ellery teams up&nbsp;with Moda Operandi',
                price: 52.00,
                color: 'red',
                size: 'XS',
                quantity: 1,
                available: true
            },
            {
                id: 9,
                name: 'Product9',
                card_img: 'card__image_9',
                img: product9,
                title: 'ELLERY X M’O CAPSULE',
                description: 'Known for her sculptural takes on&nbsp;traditional tailoring, Australian arbiter\n' +
                    '                                of&nbsp;cool\n' +
                    '                                Kym\n' +
                    '                                Ellery teams up&nbsp;with Moda Operandi',
                price: 92.00,
                color: 'red',
                size: 'S',
                quantity: 1,
                available: true
            }
        ],
        filteredProducts: [],
        sizeFilters: []
    },
    reducers: {
        filterBySize: (state, action) => {
            state.sizeFilters = action.payload;
            if (action.payload.length === 0) {
                state.filteredProducts = state.products;
            } else {
                state.filteredProducts = state.products.filter(product =>
                    action.payload.includes(product.size)
                );
            }
        },
    }
})

export default productsSlice.reducer;
export const {filterBySize} = productsSlice.actions;

