import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import './artist.css';
import 'swiper/css';



export const Artist = () => {
    return (
        <>
            <div className="artist">
                <div className="artist-top">
                    <h3>Meet Our Artist</h3>
                    <img src="./assets/ss.webp" alt="Store Banner" />
                </div>
                <div className="artist-bottom">
                    <Swiper
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
            </div>
        </>
    );
};
