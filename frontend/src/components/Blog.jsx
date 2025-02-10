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
                <p className='line'> </p>
                {/* <button className="btn">Read more</button> */}
              </div>
            </SwiperSlide>

            {/* Card 2 */}
            <SwiperSlide>
              <div className="flex">
                <img src="./assets//Blogimage3.jpg" alt="" />
                <h6>
                Unity in Diversity: A Pledge to India’s Tricolor Dream
                </h6>
                <p>
                To the tricolor we stand, so true, In Every shade-saffron, white, green a new with each stripe, We wow to strive, to make India better, to keep it alive, our heats united, our dreams in sync, For a nation stronger, We’ll always think.
                </p>
                <p className='line'> </p>
              </div>
            </SwiperSlide>

            {/* Card 3 */}
            <SwiperSlide>
              <div className="flex">
                <img src="./assets/b5.png" alt="" />
                <h6>
                Celebrating Friendship Day with Artisanal Craftsmanship
                </h6>
                <p>
               
 Friends are the ones we remember when we want to party or hang out without worrying about responsibilities. While creating each and every product, we carry the essence of Friendship Day with us. What makes this day enjoyable is the chance to feel younger and carefree. Our motifs of animals are carefully hand-embroidered, designed to be gifted as a remembrance on your study table or at work. These designs are not only cool but also carry the stories behind them—stories of our artisans, who sit together, stitching with laughter, and send their happy creations out into the world.
                </p>
                <p className='line'> </p>
              </div>
            </SwiperSlide>
                {/* Card 1 */}
                <SwiperSlide>
              <div className="flex">
                <img src="./assets/Blogimage5.jpg" alt="" />
                <h6>
                Majestic Tigers and Indha Artisans: A Symphony of Craft and Conservation
                </h6>
                <p>
                On World Tiger Day, the majestic tiger stands as a symbol of strength, resilience, and beauty, inspiring our Indha artisans!  From intricate paintings and vibrant embroideries to delicate paper crafts, the tiger’s powerful presence motivates us to create masterpieces that reflect nature’s splendour. As we celebrate this day, we are reminded of our responsibility towards sustainability, ensuring our crafts not only celebrate the tiger but also contribute to preserving its habitat. 
                Rejoicing in this majestic animal through our crafts, the tiger motif has inspired numerous products, from our popular Laptop Bags and Travel Utility Bags to diaries, coasters, and unique paper crafts. We have created several big cat paintings and hand-embroidered pieces for special corporate orders, which our artisans thoroughly enjoyed. The animal kingdom sometimes feels like a part of us, and looking at the tiger print on our folders gives us courage in a unique way.
                </p>
                <p className='line'> </p>
              </div>
            </SwiperSlide>

            {/* Card 2 */}
            <SwiperSlide>
              <div className="flex">
                <img src="./assets/Blogimage6.jpeg" alt="" />
                <h6>
                Handmade with Heart and AI
                </h6>
                <p>
                Different centers of Literacy India house small groups of Indha artisans who operate and collect their orders. These artisans are specially trained and highly skilled in various crafts. Our block-printed artwork, needlework, and paintings are blended into unique art pieces. One group of women creates the art, which is then passed to another group who use their machines to convert them into trendy bags or corporate orders. Designs are inspired by many sources, including Pinterest, and are created on Canva and Adobe Firefly before being converted into blocks, hand embroidery, and paintings.

                </p>
                <p className='line'> </p>
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
                <p className='line'> </p>
              </div>
            </SwiperSlide>




          </Swiper>
        </div>
      </div>
    </div>
  );
};
