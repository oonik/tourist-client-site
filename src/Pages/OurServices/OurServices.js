import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const OurServices = () => {
    AOS.init()
    const services = [
        {
            id: 1,
            icon: "https://i.postimg.cc/15zjSLDN/globe-world-computer-icons-map-icon-design-png-favpng-x-CB9qr-PHzk-FZM0j-Tx-Fiwki-Hym-removebg-preview.png",
            name: "World wide Tour",
            description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"
        },
        {
            id: 2,
            icon: "https://i.postimg.cc/44PSrJHg/hotel-removebg-preview.png",
            name: "Hotel Reservation",
            description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"
        },
        {
            id: 3,
            icon: "https://i.postimg.cc/13n7nwCm/user-icon-vector-people-icon-profile-vector-icon-person-illustration-business-user-icon-users-group.png",
            name: "Travel Guides",
            description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"
        },
        {
            id: 4,
            icon: "https://i.postimg.cc/PrFF52MV/setting-removebg-preview.png",
            name: "Event Management",
            description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"
        },

        {
            id: 5,
            icon: "https://i.postimg.cc/15zjSLDN/globe-world-computer-icons-map-icon-design-png-favpng-x-CB9qr-PHzk-FZM0j-Tx-Fiwki-Hym-removebg-preview.png",
            name: "World wide Tour",
            description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"
        },
        {
            id: 6,
            icon: "https://i.postimg.cc/44PSrJHg/hotel-removebg-preview.png",
            name: "Hotel Reservation",
            description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"
        },
        {
            id: 7,
            icon: "https://i.postimg.cc/13n7nwCm/user-icon-vector-people-icon-profile-vector-icon-person-illustration-business-user-icon-users-group.png",
            name: "Travel Guides",
            description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"
        },
        {
            id: 8,
            icon: "https://i.postimg.cc/PrFF52MV/setting-removebg-preview.png",
            name: "Event Management",
            description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"
        },
    ]
    return (
        <div className='lg:mx-10 my-20'>
            <h3 className='text-xl text-center font-semibold text-green-400'>SERVICES</h3>
            <h1 className='text-5xl font-bold text-center mt-5 mb-20 text-gray-600'>Our Services</h1>
            <div className='grid lg:grid-cols-4 gap-8'>
                {
                    services.map(service => <div key={service.id}
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                        className="card hover:bg-green-400 border border-3xl
                         border-green-400 border-y-0 hover:text-white shadow-xl">

                        <div className="card-body">
                            <img className='w-20 h-20' src={service.icon} alt="" />
                            <h2 className="card-title">{service.name}</h2>
                            <p>{service.description}</p>

                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default OurServices;