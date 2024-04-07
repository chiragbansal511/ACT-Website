import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import "swiper/css/pagination";
import "./Carousel.css";
// import { Pagination } from "swiper";

export default function Carousel({ data }) {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        // pagination={{
        //   clickable: true,
        // }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        // modules={[Pagination]}
        className="mySwiper"
      >
        {data.map(({ id, name, designation, imageUrl }) => (
          <SwiperSlide key={id}>
            <img src={imageUrl} alt={name} />
            <div className="slide-info">
              <h3>{name}</h3>
              <p>{designation}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
