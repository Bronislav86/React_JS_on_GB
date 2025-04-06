import React from 'react';
import Header from "../Header";
import TopHead from "../TopHead";
import Subscribe from "../Subscribe";
import Footer from "../Footer";
import RegistrationFooter from "./RegistrationFooter";
import RegistrationTopHead from "./RegistrationTopHead";
import RegistrationForm from "./RegistrationForm";
import '../../styles/registration.sass'


const Registration = () => {
    return (
        <>
            <Header/>
            <TopHead>
                <RegistrationTopHead />
            </TopHead>
            <RegistrationForm />
            <Subscribe/>
            <Footer>
                <RegistrationFooter />
            </Footer>
        </>
    );
};

export default Registration;
