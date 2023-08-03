import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import icon from '../../../assest/icon/quote.svg'
import 'swiper/css';
import 'swiper/css/autoplay'

const Testimonial = () => {
    const clientSays = [
        {
            id: 0,
            img: "https://i.postimg.cc/fTpQqZDw/people1.png",
            location: "New York, USA",
            comment: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae totam odio reiciendis incidunt neque a fugiat exercitationem quaerat, recusandae amet ad modi veniam! Quisquam quibusdam repellendus velit quae hic tenetur!"
        },
        {
            id: 1,
            img: "https://i.postimg.cc/t46QLf4F/people2.png",
            location: "New York, USA",
            comment: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae totam odio reiciendis incidunt neque a fugiat exercitationem quaerat, recusandae amet ad modi veniam! Quisquam quibusdam repellendus velit quae hic tenetur!"
        },
        {
            id: 2,
            img: "https://i.postimg.cc/zf1Z5jy6/people3.png",
            location: "New York, USA",
            comment: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae totam odio reiciendis incidunt neque a fugiat exercitationem quaerat, recusandae amet ad modi veniam! Quisquam quibusdam repellendus velit quae hic tenetur!"
        },
        {
            id: 3,
            img: "https://i.postimg.cc/50j6dJhX/download.jpg",
            location: "New York, USA",
            comment: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae totam odio reiciendis incidunt neque a fugiat exercitationem quaerat, recusandae amet ad modi veniam! Quisquam quibusdam repellendus velit quae hic tenetur!"
        },
    ]
    return (
        <div className='my-20'>
            <h1 className='text-xl text-center font-bold text-green-400'>TESTIMONIAL</h1>
            <h1 className='text-5xl font-semibold text-center text-slate-600 mt-2 mb-10'>Our Clients Say!!!</h1>
            <Swiper
            spaceBetween={0}
            slidesPerView={3}
            loop={true}
            autoplay={{
                delay: 500,
                disableOnInteraction: false
            }}
            breakpoints={{
                555: {
                  width: 555,
                  slidesPerView: 1,
                },
                768: {
                  width: 768,
                  slidesPerView: 2,
                },
                1200: {
                    width: 1200,
                    slidesPerView: 3,
                }
              }}
        >
            {
                clientSays.map(client => <SwiperSlide key={client.id}>
                    <div className="card w-96 bg-base-100 border border-green-500 relative">
                        <figure className="px-10 pt-10">
                            <img src={client.img} alt="Shoes" className="rounded h-20 w-20" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{client.location}</h2>
                            <p> <img src={icon} alt="" className='h-10 w-10 absolute left-1 top-44' /> {client.comment} <img src={icon} alt="" className='h-10 w-10 absolute right-24 bottom-5 rotate-180' /></p>

                        </div>
                    </div>
                </SwiperSlide>)

            }
        </Swiper>
        </div>
    );
};

export default Testimonial;