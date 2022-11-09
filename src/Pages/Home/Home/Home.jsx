import React from 'react';
import First from '../First';
import ServicesHome from '../SevicesHome/ServicesHome';
import Showcase from '../Showcase/Showcase';
import './Home.css'
const Home = () => {
    return (
        <div>
            <First />
            <ServicesHome />
            <Showcase />
        </div>
    );
};

export default Home;