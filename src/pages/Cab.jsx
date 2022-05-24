import React from 'react';
import CabMain1 from "../components/CabMain1";
import CabMain2 from "../components/CabMain2";
import Header from "../components/header";
import Footer from "../components/Footer";

const Cab = () => {
    return (
        <div>
            <Header/>
            <CabMain1/>
            <CabMain2/>
            <Footer/>

        </div>
    );
};

export default Cab;