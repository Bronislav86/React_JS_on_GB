import React from 'react';
import Header from "../Header";
import BlackBlock from "../BlackBlock";
import Subscribe from "../Subscribe";
import Footer from "../Footer";
import TopHead from "../TopHead";
import MainProductImg from "./MainProductImg";
import MainSection from "./MainSection";

const ProductDetails = () => {
    return (
        <div>
            <Header/>
            <TopHead/>
            <MainProductImg/>
            <MainSection/>
            <BlackBlock/>
            <Subscribe/>
            <Footer/>
        </div>
    );
};

export default ProductDetails;
