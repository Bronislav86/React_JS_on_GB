import CarsReducers from "./car";
import ActiveCar from "../reducers/carActive"
import {customerReducer} from "./customerReducer";
import {combineReducers} from "redux";

const allReducers = combineReducers({
    car: CarsReducers,
    carActive: ActiveCar,
    customers: customerReducer
})

export default allReducers;