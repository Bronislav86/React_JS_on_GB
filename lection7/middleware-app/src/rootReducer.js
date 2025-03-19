// const initialState = {
//     data:[]
// };
//
// function rootReducer(state = initialState, action) {
//     return state;
// }
//
// export default rootReducer;

import {combineReducers} from "@reduxjs/toolkit";
import dataReducer from "./dataReducer";

const rootReducer = combineReducers({
    root: (state = {data: []}, action) => state,
    data: dataReducer,
});

export default rootReducer;