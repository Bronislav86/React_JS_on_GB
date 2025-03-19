import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addCustomerAction, removeCustomerAction} from "../reducers/customerReducer";

const ShowCustomers = () => {
    const dispatch = useDispatch();
    const customers = useSelector(state => state.customers.customers);

    function addCustomer(name) {
        const customer = {
            name,
            id: Date.now(),
        }
        dispatch(addCustomerAction(customer));
    }

    const removeCustomer = (customer) => {
        dispatch(removeCustomerAction(customer.id));
    }

    return (
        <div>
            <button onClick={() => addCustomer(prompt())}>Добавить</button>
            {customers.length > 0 ?
                <div style={{ display: "flex",
                    flexDirection: "column",
                    flexWrap: "wrap",
                    alignContent: "center" }}>
                    {customers.map(element =>
                        <div onClick={() => removeCustomer(element)} style={{fontSize: "2rem", border: "1px solid black", marginTop: "20px", padding: "10px", maxWidth: "max-content"}}>{element.name}</div>)}
                </div>
                :
                <div style={{fontSize: "2rem", marginTop: "20px"}}>Список пуст!</div>}
        </div>
    );

};

export default ShowCustomers;
