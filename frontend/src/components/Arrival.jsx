import React from 'react';
import './arrival.css';
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const Arrival = () => {
  return (
    <>
      <div className="arrival">
        <div className="arrival-top">
          <h3>New Arrival</h3>
          <img src="./assets/ss.webp" alt="Store Banner" />
        </div>
        <div className="arrival-bottom">
          <Swiper
            spaceBetween={20}
            slidesPerView={4}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            <SwiperSlide>
              <div className="card">
                <div className="face">
                  <img
                    src="./assets/nw1.jpg"
                    alt="Product 1"
                    className="card-image"
                  />
                  <h3>Indha Hand Block</h3>
                  <p>$ 290/-</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="card">
                <div className="face">
                  <img
                    src="./assets/nw2.png"
                    alt="Product 2"
                    className="card-image"
                  />
                  <h3>Indha Hand Painteted</h3>
                  <p>$ 320/-</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="card">
                <div className="face">
                  <img
                    src="./assets/nw3.png"
                    alt="Product 3"
                    className="card-image"
                  />
                  <h3>Indha Hand Painteted</h3>
                  <p>$ 400/-</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="card">
                <div className="face">
                  <img
                    src="./assets/nw4.png"
                    alt="Product 4"
                    className="card-image"
                  />
                  <h3>Indha Hand Painteted</h3>
                  <p>$ 500/-</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="face">
                  <img
                    src="./assets/nw5.png"
                    alt="Product 4"
                    className="card-image"
                  />
                  <h3>Indha Hand Painteted</h3>
                  <p>$ 500/-</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="face">
                  <img
                    src="./assets/nw6.png"
                    alt="Product 4"
                    className="card-image"
                  />
                  <h3>Indha Unique Embroid</h3>
                  <p>$ 500/-</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="face">
                  <img
                    src="./assets/nw7.jpg"
                    alt="Product 4"
                    className="card-image"
                  />
                  <h3>Indha Unique Handprint</h3>
                  <p>$ 500/-</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="face">
                  <img
                    src="./assets/nw8.png"
                    alt="Product 4"
                    className="card-image"
                  />
                  <h3>Indha 20X20 Pillow </h3>
                  <p>$ 500/-</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="face">
                  <img
                    src="./assets/nw9.png"
                    alt="Product 4"
                    className="card-image"
                  />
                  <h3>Indha printed Books</h3>
                  <p>$ 500/-</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="face">
                  <img
                    src="./assets/nw10.png"
                    alt="Product 4"
                    className="card-image"
                  />
                  <h3>Indha Hand Painteted</h3>
                  <p>$ 500/-</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="face">
                  <img
                    src="./assets/nw11.png"
                    alt="Product 4"
                    className="card-image"
                  />
                  <h3>Indha Handcraft</h3>
                  <p>$ 500/-</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="face">
                  <img
                    src="./assets/nw12.jpg"
                    alt="Product 4"
                    className="card-image"
                  />
                  <h3>Indha Blue Dupion</h3>
                  <p>$ 500/-</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};
