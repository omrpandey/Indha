import React from 'react';
import './blog.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Scrollbar } from 'swiper/modules';

export const Blog = () => {
  return (
    <div className="blog-top">
      <div className="blog">
        {/* <div className="blog-top">
          <img src="./assets/b1.jpg" alt="" />
        </div> */}
        <div className="blog-flex">
          <Swiper
            scrollbar={{
              hide: true,
            }}
            modules={[Scrollbar]}
            spaceBetween={20}
            slidesPerView={3}
            className="blog-swiper"
          >
            {/* Card 1 */}
            <SwiperSlide>
              <div className="flex">
                <img src="./assets/b3.png" alt="" />
                <h6>
                  Handcrafted with Love: Indha’s Sustainable Artisanal Creations
                  for Peaceful Homes & Workspaces | Recycled, Repurposed, Rooted
                  in Tradition
                </h6>
                <p>
                  At Indha, we believe that setting your heart on doing good
                  creates ripples of love and positivity in the world. This is
                  our message to everyone who chooses to work, collaborate, or
                  support us. Each stitch, every brushstroke, and every weave is
                  meditative—carrying with it the essence of peace and love that
                  we pour into our handmade creations. When you take an Indha
                  product home, you’re not just buying an item; you’re embracing
                  a piece of this boundless love and tranquillity. We put
                  special attention on quality, ensuring that nothing goes to
                  waste. Old designs are repurposed, and recycling is
                </p>
                <button className="btn">Read more</button>
              </div>
            </SwiperSlide>

            {/* Card 2 */}
            <SwiperSlide>
              <div className="flex">
                <img src="./assets/b11.jpg" alt="" />
                <h6>
                  Handcrafted with Love: Indha’s Sustainable Artisanal Creations
                  for Peaceful Homes & Workspaces | Recycled, Repurposed, Rooted
                  in Tradition
                </h6>
                <p>
                  At Indha, we believe that setting your heart on doing good
                  creates ripples of love and positivity in the world. This is
                  our message to everyone who chooses to work, collaborate, or
                  support us. Each stitch, every brushstroke, and every weave is
                  meditative—carrying with it the essence of peace and love that
                  we pour into our handmade creations. When you take an Indha
                  product home, you’re not just buying an item; you’re embracing
                  a piece of this boundless love and tranquillity. We put
                  special attention on quality, ensuring that nothing goes to
                  waste. Old designs are repurposed, and recycling is
                </p>
                <button className="btn">Read more</button>
              </div>
            </SwiperSlide>

            {/* Card 3 */}
            <SwiperSlide>
              <div className="flex">
                <img src="./assets/b10.jpg" alt="" />
                <h6>
                  Handcrafted with Love: Indha’s Sustainable Artisanal Creations
                  for Peaceful Homes & Workspaces | Recycled, Repurposed, Rooted
                  in Tradition
                </h6>
                <p>
                  At Indha, we believe that setting your heart on doing good
                  creates ripples of love and positivity in the world. This is
                  our message to everyone who chooses to work, collaborate, or
                  support us. Each stitch, every brushstroke, and every weave is
                  meditative—carrying with it the essence of peace and love that
                  we pour into our handmade creations. When you take an Indha
                  product home, you’re not just buying an item; you’re embracing
                  a piece of this boundless love and tranquillity. We put
                  special attention on quality, ensuring that nothing goes to
                  waste. Old designs are repurposed, and recycling is
                </p>
                <button className="btn">Read more</button>
              </div>
            </SwiperSlide>
                {/* Card 1 */}
                <SwiperSlide>
              <div className="flex">
                <img src="./assets/b5.png" alt="" />
                <h6>
                  Handcrafted with Love: Indha’s Sustainable Artisanal Creations
                  for Peaceful Homes & Workspaces | Recycled, Repurposed, Rooted
                  in Tradition
                </h6>
                <p>
                  At Indha, we believe that setting your heart on doing good
                  creates ripples of love and positivity in the world. This is
                  our message to everyone who chooses to work, collaborate, or
                  support us. Each stitch, every brushstroke, and every weave is
                  meditative—carrying with it the essence of peace and love that
                  we pour into our handmade creations. When you take an Indha
                  product home, you’re not just buying an item; you’re embracing
                  a piece of this boundless love and tranquillity. We put
                  special attention on quality, ensuring that nothing goes to
                  waste. Old designs are repurposed, and recycling is
                </p>
                <button className="btn">Read more</button>
              </div>
            </SwiperSlide>

            {/* Card 2 */}
            <SwiperSlide>
              <div className="flex">
                <img src="./assets/b5.png" alt="" />
                <h6>
                  Handcrafted with Love: Indha’s Sustainable Artisanal Creations
                  for Peaceful Homes & Workspaces | Recycled, Repurposed, Rooted
                  in Tradition
                </h6>
                <p>
                  At Indha, we believe that setting your heart on doing good
                  creates ripples of love and positivity in the world. This is
                  our message to everyone who chooses to work, collaborate, or
                  support us. Each stitch, every brushstroke, and every weave is
                  meditative—carrying with it the essence of peace and love that
                  we pour into our handmade creations. When you take an Indha
                  product home, you’re not just buying an item; you’re embracing
                  a piece of this boundless love and tranquillity. We put
                  special attention on quality, ensuring that nothing goes to
                  waste. Old designs are repurposed, and recycling is
                </p>
                <button className="btn">Read more</button>
              </div>
            </SwiperSlide>

            {/* Card 3 */}
            <SwiperSlide>
              <div className="flex">
                <img src="./assets/b5.png" alt="" />
                <h6>
                  Handcrafted with Love: Indha’s Sustainable Artisanal Creations
                  for Peaceful Homes & Workspaces | Recycled, Repurposed, Rooted
                  in Tradition
                </h6>
                <p>
                  At Indha, we believe that setting your heart on doing good
                  creates ripples of love and positivity in the world. This is
                  our message to everyone who chooses to work, collaborate, or
                  support us. Each stitch, every brushstroke, and every weave is
                  meditative—carrying with it the essence of peace and love that
                  we pour into our handmade creations. When you take an Indha
                  product home, you’re not just buying an item; you’re embracing
                  a piece of this boundless love and tranquillity. We put
                  special attention on quality, ensuring that nothing goes to
                  waste. Old designs are repurposed, and recycling is
                </p>
                <button className="btn">Read more</button>
              </div>
            </SwiperSlide>




          </Swiper>
        </div>
      </div>
    </div>
  );
};
