import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {select} from "../actions";

// function mapStateToProps (state) {
//
//     return {
//         cars: state.car,
//     }
// }


const CarList = ({ cars }) => {
    const state = useSelector((state) => state.car);
    const dispatch = useDispatch();

    const showList = () => {
        return state.map(car => {
            return (
                <li onClick={() => {dispatch(select(car))}} key={car.id}>{car.model}</li>
            )
        })
    }

    return (
        <ol>
            {showList()}
        </ol>
    );
};

export default CarList;
