import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Store} from './Store'
import {Add1} from './Add1'
import {Add2} from './Add2'
import {Arrival} from './Arrival'
import {Artist} from './Artist'
import {Award} from './Award'
import {Customer} from './Customer'
// Import Swiper styles
import './Home.css';
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Pagination } from 'swiper/modules';

export const Home = () => {
    return (
        <>
            <div className="home-slide">
                <Swiper
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    className="home-mySwiper"
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
          <Add1 />
          <Arrival />
          <Artist />
          <Award />
          <Customer />
          <Add2 />
        </>
    );
};
