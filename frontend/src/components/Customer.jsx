import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import './customer.css';
import 'swiper/css';



export const Customer = () => {
    return (
        <>
            <div className="customer">
                <div className="customer-top">
                    <h3>Our Customer`s</h3>
                    <img src="./assets/ss.webp" alt="Store Banner" />
                </div>
                  <div className="customer-bottom">
                                    <Swiper
                                       spaceBetween={20}
                                       slidesPerView={5}
                                   navigation
                                   pagination={{ clickable: true }}
                                   scrollbar={{ draggable: true }}
                                        className="mySwiper"
                                    >
                                        <SwiperSlide>
                                            <img src="./assets/cc1.png" alt="Slide 1" className="slide-image" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src="./assets/cc2.jpg" alt="Slide 2" className="slide-image" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src="./assets/cc3.jpg" alt="Slide 4" className="slide-image" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src="./assets/cc4.jpg" alt="Slide 1" className="slide-image" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src="./assets/cc5.jpg" alt="Slide 2" className="slide-image" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src="./assets/cc6.jpg" alt="Slide 4" className="slide-image" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src="./assets/cc7.jpg" alt="Slide 2" className="slide-image" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src="./assets/cc8.jpg" alt="Slide 4" className="slide-image" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src="./assets/cc9.png" alt="Slide 2" className="slide-image" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src="./assets/cc10.webp" alt="Slide 4" className="slide-image" />
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
               
                </>
    )}