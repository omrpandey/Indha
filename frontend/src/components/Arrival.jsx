import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// Import required Swiper modules
import { Autoplay, Pagination } from 'swiper/modules';
import './Arrival.css';

export const Arrival = () => {
  return (
    <>
      <br />
      <div className="popular_product">
        <h2 className="newin-title">New Arrival</h2>
        <img src="./assets/ss.webp" alt="" className="img" />
        <br />
        <div className="swiper1">
          <Swiper
            spaceBetween={10} // Sets 20px gap between slides
            slidesPerView={4} // Displays 4 slides at a time
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={false} // Disable pagination
            modules={[Autoplay, Pagination]}
            className="mySwiper1"
          >
            <SwiperSlide>
              <div className="card">
                <img
                  src="./assets/s1.jpg"
                  alt="Apparel"
                  className="card-image"
                />
                <h3 className="card-title">Apparel</h3>
                <p className="card-price">$25.00</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <img
                  src="./assets/s2.jpg"
                  alt="Black Printed Cotton"
                  className="card-image"
                />
                <h3 className="card-title">Black Printed Cotton</h3>
                <p className="card-price">$30.00</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <img
                  src="./assets/s3.jpg"
                  alt="Candles"
                  className="card-image"
                />
                <h3 className="card-title">Candles</h3>
                <p className="card-price">$15.00</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <img
                  src="./assets/s4.jpg"
                  alt="Dairy and Note Books"
                  className="card-image"
                />
                <h3 className="card-title">Dairy and Note Books</h3>
                <p className="card-price">$12.00</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <img
                  src="./assets/s5.jpg"
                  alt="File Folder & Document"
                  className="card-image"
                />
                <h3 className="card-title">File Folder & Document</h3>
                <p className="card-price">$18.00</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <img
                  src="./assets/s8.jpg"
                  alt="Handmade Toys"
                  className="card-image"
                />
                <h3 className="card-title">Handmade Toys</h3>
                <p className="card-price">$22.00</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <img
                  src="./assets/s9.jpg"
                  alt="Home Decor"
                  className="card-image"
                />
                <h3 className="card-title">Home Decor</h3>
                <p className="card-price">$40.00</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <img
                  src="./assets/s10.jpg"
                  alt="Home Furnishing"
                  className="card-image"
                />
                <h3 className="card-title">Home Furnishing</h3>
                <p className="card-price">$35.00</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <img
                  src="./assets/s11.jpg"
                  alt="Jholas"
                  className="card-image"
                />
                <h3 className="card-title">Jholas</h3>
                <p className="card-price">$28.00</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <img
                  src="./assets/s12.jpg"
                  alt="Office Supplies"
                  className="card-image"
                />
                <h3 className="card-title">Office Supplies</h3>
                <p className="card-price">$20.00</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <img
                  src="./assets/s14.jpg"
                  alt="Pen Stands"
                  className="card-image"
                />
                <h3 className="card-title">Pen Stands</h3>
                <p className="card-price">$10.00</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <img
                  src="./assets/s15.jpg"
                  alt="Wall Decor"
                  className="card-image"
                />
                <h3 className="card-title">Wall Decor</h3>
                <p className="card-price">$50.00</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};