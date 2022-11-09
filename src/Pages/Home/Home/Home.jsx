import React from 'react';
import useTitle from '../../../Hooks/useTitle';
import About from '../About/About';
import First from '../FirstSection/First';
import ServicesHome from '../SevicesHome/ServicesHome';
import Showcase from '../Showcase/Showcase';
import './Home.css'
const Home = () => {
    useTitle('Home')
    return (
        <div>
            <First />
            <ServicesHome />
            <Showcase />
            <About />
        </div>
    );
};

export default Home;