import React from 'react';
import './arrival.css';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Autoplay } from 'swiper/modules';

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
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            modules={[Autoplay]}
            className="arrival-swiper"
          >
            {[
              { src: './assets/nw1.jpg', title: 'Indha Hand Block', price: '$ 290/-' },
              { src: './assets/nw2.png', title: 'Indha Hand Painted', price: '$ 320/-' },
              { src: './assets/nw3.png', title: 'Indha Hand Painted', price: '$ 400/-' },
              { src: './assets/nw4.png', title: 'Indha Hand Painted', price: '$ 600/-' },
              { src: './assets/nw5.png', title: 'Indha Hand Painted', price: '$ 320/-' },
              { src: './assets/nw6.png', title: 'Indha Unique Embroid', price: '$ 250/-' },
              { src: './assets/nw7.jpg', title: 'Indha Unique Handprint', price: '$ 550/-' },
              { src: './assets/nw8.png', title: 'Indha 20X20 Pillow', price: '$240/-' },
              { src: './assets/nw9.png', title: 'Indha Printed Books', price: '$ 240/-' },
              { src: './assets/nw10.png', title: 'Indha Hand Painted', price: '$ 590/-' },
              { src: './assets/nw11.png', title: 'Indha Handcraft', price: '$ 700/-' },
              { src: './assets/nw12.jpg', title: 'Indha Blue Dupion', price: '$ 800/-' },
            ].map((item, index) => (
              <SwiperSlide key={index}>
                <div className="card">
                  <div className="face">
                    <img src={item.src} alt={item.title} className="card-image" />
                    <h3>{item.title}</h3>
                    <p>{item.price}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};
