import React from 'react';
import AboutUs from '../../Shared/AboutUs/AboutUs';
import OurServices from '../OurServices/OurServices';
import PopularDestination from './PopularDestination/PopularDestination';
import BookTour from './BookTour/BookTour';


const Home = () => {
    return (
        <div>
            <AboutUs></AboutUs>
            <OurServices></OurServices>
            <PopularDestination></PopularDestination>
            <BookTour></BookTour>
        </div>
    );
};

export default Home;