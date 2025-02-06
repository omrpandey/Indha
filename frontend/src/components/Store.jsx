import React from 'react';
import './Store.css';
import { Swiper, SwiperSlide } from 'swiper/react';

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
            // modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
                slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            
            <SwiperSlide>
              <div className="card">
                <img
                  src="./assets/s1.jpg"
                  alt="Product 1"
                  className="card-image"
                />
                <h3>Apparel</h3>
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

          </Swiper>
        </div>
      </div>
    </>
  );
};
