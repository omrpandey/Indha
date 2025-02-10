import React from 'react';
import { Store } from './Store';
import { Add1 } from './Add1';
import { Add2 } from './Add2';
import { Arrival } from './Arrival';
import { Artist } from './Artist';
import { Award } from './Award';
import { Customer } from './Customer';
// Import Swiper styles
import './Home.css';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; // You can remove this if not needed

import { Autoplay, Pagination } from 'swiper/modules';

export const Home = () => {
    return (
        <>
            <div className="home-slide">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, Pagination]} // Removed Navigation module
                    className="home-mySwiper"
                >
                    <SwiperSlide>
                        <img src="./assets/indh4.jpg" alt="Slide 1" className="slide-image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./assets/indha3.jpg" alt="Slide 2" className="slide-image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./assets/indha5.jpg" alt="Slide 3" className="slide-image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./assets/indha6.jpg" alt="Slide 4" className="slide-image" />
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
