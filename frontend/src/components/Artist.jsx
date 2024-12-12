import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import './artist.css';
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Pagination } from 'swiper/modules';

export const Artist = () => {
    return (
        <>
            <div className="slide">
          <div className="cont">  <h2 className="newin-title">Meet Our Artists</h2>
          <img src="./assets/ss.jpg" alt="" className='img'/></div>
                <Swiper
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    className="mySwiper"
            >
                    <SwiperSlide>
                        <img src="./assets/a1.jpg" alt="Slide 1" className="slide-image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./assets/a2.jpg" alt="Slide 2" className="slide-image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./assets/a3.jpg" alt="Slide 4" className="slide-image" />
                    </SwiperSlide>
                </Swiper>
            </div>
          
        </>
    );
};