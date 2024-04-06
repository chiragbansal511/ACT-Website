import { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./Carousel.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
const Carousel = ({ data, reverse = false }) => {
  return (
    <Fragment>
      <Swiper
        initialSlide={0}
        loop={true}
        modules={[Autoplay]}
        spaceBetween={30}
        autoplay={{
          delay: 2000,
          stopOnLastSlide: false,
          disableOnInteraction: true,
          reverseDirection: reverse,
        }}
        slidesPerView={4}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="carousalData">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="carousalImages"
                />
                <div className="carousalInfo">
                  <h2>{item.name}</h2>
                  <h3>{item.designation}</h3>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Fragment>
  );
};
export default Carousel;
