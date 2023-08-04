import React from 'react';
import AboutUs from '../../Shared/AboutUs/AboutUs';
import OurServices from '../OurServices/OurServices';
import PopularDestination from './PopularDestination/PopularDestination';
import BookTour from './BookTour/BookTour';
import MeetOurTeam from './MeetOurTeam/MeetOurTeam';
import Testimonial from './Testimonial/Testimonial';
import Package from '../Package/Package';


const Home = () => {
    return (
        <div>
            <AboutUs></AboutUs>
            <OurServices></OurServices>
            <PopularDestination></PopularDestination>
            <Package></Package>
            <BookTour></BookTour>
            <MeetOurTeam></MeetOurTeam>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;