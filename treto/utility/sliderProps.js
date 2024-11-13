import SwiperCore from "swiper";
import {
  Autoplay,
  EffectFade,
  Grid,
  Navigation,
  Pagination,
  Parallax,
} from "swiper/modules";
SwiperCore.use([Pagination, Navigation, EffectFade, Autoplay, Grid, Parallax]);
export const sliderProps = {
  reviewsSlider: {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 800,
    parallax: true,
    navigation: {
      prevEl: ".mil-reviews-prev",
      nextEl: ".mil-reviews-next",
    },
    pagination: {
      el: ".mil-reviews-pagination",
      type: "fraction",
      clickable: true,
    },
  },
  timelineSlider: {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 800,
    parallax: true,
    navigation: {
      prevEl: ".mil-timeline-2-prev",
      nextEl: ".mil-timeline-2-next",
    },
    pagination: {
      el: ".mil-timeline-2-pagination",
      type: "fraction",
      clickable: true,
    },
    breakpoints: {
      992: {
        slidesPerView: 3,
      },
    },
  },
};
