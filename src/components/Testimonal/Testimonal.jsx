import React, { useEffect } from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper';


function Testimonal() {
  useEffect(() => {
    // Initialize Swiper with required modules
    Swiper.use([Navigation, Pagination]);
  }, []);

  return (
    <>
      <div>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          {/* Add more slides as needed */}
        </Swiper>
      </div>
    </>
  );
}

export default Testimonal;
