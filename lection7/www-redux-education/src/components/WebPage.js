import React from 'react';
import CarList from "../containers/CarList";
import Details from "../containers/Details";


const WebPage = () => {


    return (
        <div>
            <h2>Cars:</h2>
            <CarList />
            <hr/>
            <h3>Details:</h3>
            <Details />
        </div>
    );
};

export default WebPage;
