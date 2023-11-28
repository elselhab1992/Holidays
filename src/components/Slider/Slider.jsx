import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import sliderImages from "../../Data/data";
import { Container, Imgs, SliderBtns, SliderArrow } from "./SliderStyles";

const Slider = () => {
  return (
    <section id="food">
      <Container>
        <Swiper {...sliderSettings}>
          <SliderButtons />
          {sliderImages.map((imgs, index) => {
            const { img } = imgs;

            return (
              <SwiperSlide key={index}>
                <Imgs src={img} alt="food" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </section>
  );
};

export default Slider;

const SliderButtons = () => {
  const swiper = useSwiper();

  return (
    <SliderBtns>
      <SliderArrow onClick={() => swiper.slidePrev()}>&lt;</SliderArrow>
      <SliderArrow onClick={() => swiper.slideNext()}>&gt;</SliderArrow>
    </SliderBtns>
  );
};

const sliderSettings = {
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    480: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 1,
    },
    1200: {
      slidesPerView: 1,
    },
  },
};
