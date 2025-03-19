import {applyMiddleware, combineReducers} from "@reduxjs/toolkit";
import CarsReducers from "./car";
import ActiveCar from "../reducers/carActive"
import {customerReducer} from "./customerReducer";

const allReducers = combineReducers({
    car: CarsReducers,
    carActive: ActiveCar,
    customers: customerReducer
})

export default allReducers;