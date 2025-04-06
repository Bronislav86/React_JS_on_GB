import React from 'react';
import {Link} from "react-router-dom";

const BrowseAllProductsButton = () => {
    return (
        <>
            <Link to="/newarrivals">
                <button className="products__bottomBtn pinkTextInProducts">
                    Browse All Product
                </button>
            </Link>
        </>
    );
};

export default BrowseAllProductsButton;
