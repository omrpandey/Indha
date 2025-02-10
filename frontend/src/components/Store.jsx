import React from 'react';
import './store.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

export const Store = () => {
  return (
    <>
      <div className="store">
        <div className="store-top">
          <h3>What We Have In Store For You</h3>
          <img src="./assets/ss.webp" alt="Store Banner" />
        </div>
        <div className="store-bottom">
          <Swiper
            spaceBetween={20}
            slidesPerView={4}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination]}
            className="store-swiper"
          >
            <SwiperSlide>
              <div className="card">
                <img src="./assets/s1.jpg" alt="Product 1" className="card-image" />
                <h3>Apparel</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <img src="./assets/s2.jpg" alt="Product 2" className="card-image" />
                <h3 className="card-title">Black Printed Cotton</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <img src="./assets/s3.jpg" alt="Product 3" className="card-image" />
                <h3 className="card-title">Candles</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <img src="./assets/s4.jpg" alt="Product 4" className="card-image" />
                <h3 className="card-title">Dairy and Notebooks</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <img src="./assets/s5.jpg" alt="Product 5" className="card-image" />
                <h3 className="card-title">File Folder & Document</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <img src="./assets/s8.jpg" alt="Product 6" className="card-image" />
                <h3 className="card-title">Handmade Toys</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <img src="./assets/s9.jpg" alt="Product 7" className="card-image" />
                <h3 className="card-title">Home Decor</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <img src="./assets/s10.jpg" alt="Product 8" className="card-image" />
                <h3 className="card-title">Home Furnishing</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <img src="./assets/s11.jpg" alt="Product 9" className="card-image" />
                <h3 className="card-title">Jholas</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <img src="./assets/s12.jpg" alt="Product 10" className="card-image" />
                <h3 className="card-title">Office Supplies</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <img src="./assets/s14.jpg" alt="Product 11" className="card-image" />
                <h3 className="card-title">Pen Stands</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <img src="./assets/s15.jpg" alt="Product 12" className="card-image" />
                <h3 className="card-title">Wall Decor</h3>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};
