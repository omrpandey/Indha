import React from 'react';
import {Add} from './Add'
import {Arrival} from './Arrival'
// import {Award} from './Award'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {Store} from './Store'
import {Artist} from './Artist'
// Import Swiper styles
import './Home.css';
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Pagination } from 'swiper/modules';

export const Home = () => {
    return (
        <>
            <div className="slide">
                <Swiper
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src="./assets/indha3.jpg" alt="Slide 1" className="slide-image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./assets/indh4.jpg" alt="Slide 2" className="slide-image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./assets/indha5.jpg" alt="Slide 4" className="slide-image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./assets/indha6.jpg" alt="Slide 5" className="slide-image" />
                    </SwiperSlide>
                </Swiper>
            </div>
            <Store /> 
            <Add />
            <Arrival />
        <Artist />
        {/* <Award />  */}
        </>
    );
};