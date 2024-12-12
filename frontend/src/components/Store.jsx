import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// Import required Swiper modules
import { Autoplay, Pagination } from 'swiper/modules';
import './Store.css';

export const Store = () => {
  return (
    <>
      <br />
      <div className="popular_product">
        <h2 className="newin-title">What We Have in Store For You</h2>
        <img src="./assets/ss.jpg" alt="" className='img'/>
        <br />
        <div className="swiper1">
          <Swiper
            spaceBetween={10} // Sets 20px gap between slides
            slidesPerView={4} // Displays 5 slides at a time
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
                  alt="Product 1"
                  className="card-image"
                />
                <h7 className="card-title">Apparel</h7>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <img
                  src="./assets/s2.jpg"
                  alt="Product 1"
                  className="card-image"
                />
                <h3 className="card-title">Black Printed Cutton</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <img
                  src="./assets/s3.jpg"
                  alt="Product 1"
                  className="card-image"
                />
                <h3 className="card-title">Candles</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <img
                  src="./assets/s4.jpg"
                  alt="Product 1"
                  className="card-image"
                />
                <h3 className="card-title">Dairy and Note Books</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <img
                  src="./assets/s5.jpg"
                  alt="Product 1"
                  className="card-image"
                />
                <h3 className="card-title">File Folder & Document</h3>
              </div>
            </SwiperSlide>
           
         
            <SwiperSlide>
              <div className="card">
                <img
                  src="./assets/s8.jpg"
                  alt="Product 1"
                  className="card-image"
                />
                <h3 className="card-title">HandsMade Toys</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <img
                  src="./assets/s9.jpg"
                  alt="Product 1"
                  className="card-image"
                />
                <h3 className="card-title">Home Decor</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <img
                  src="./assets/s10.jpg"
                  alt="Product 1"
                  className="card-image"
                />
                <h3 className="card-title">Home Furnshing</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <img
                  src="./assets/s11.jpg"
                  alt="Product 1"
                  className="card-image"
                />
                <h3 className="card-title">Jholas</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <img
                  src="./assets/s12.jpg"
                  alt="Product 1"
                  className="card-image"
                />
                <h3 className="card-title">Office Supplies</h3>
              </div>
            </SwiperSlide>
        
            <SwiperSlide>
              <div className="card">
                <img
                  src="./assets/s14.jpg"
                  alt="Product 1"
                  className="card-image"
                />
                <h3 className="card-title">Pen Stands</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <img
                  src="./assets/s15.jpg"
                  alt="Product 1"
                  className="card-image"
                />
                <h3 className="card-title">Wall Decor</h3>
              </div>
            </SwiperSlide>

            {/* Additional SwiperSlides can be added here */}
          </Swiper>
        </div>
      </div>
    </>
  );
};