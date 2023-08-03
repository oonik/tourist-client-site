import React from 'react';
import AboutUs from '../../Shared/AboutUs/AboutUs';
import OurServices from '../OurServices/OurServices';
import PopularDestination from './PopularDestination/PopularDestination';
import BookTour from './BookTour/BookTour';
import MeetOurTeam from './MeetOurTeam/MeetOurTeam';
import Testimonial from './Testimonial/Testimonial';
import Banner from '../../Shared/Banner/Banner';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <OurServices></OurServices>
            <PopularDestination></PopularDestination>
            <BookTour></BookTour>
            <MeetOurTeam></MeetOurTeam>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;