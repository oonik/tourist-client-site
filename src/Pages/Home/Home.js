import React from 'react';
import AboutUs from '../../Shared/AboutUs/AboutUs';
import OurServices from '../OurServices/OurServices';
import PopularDestination from './PopularDestination/PopularDestination';


const Home = () => {
    return (
        <div>
            <AboutUs></AboutUs>
            <OurServices></OurServices>
            <PopularDestination></PopularDestination>
        </div>
    );
};

export default Home;