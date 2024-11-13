import { sliderProps } from "@/utility/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const Reviews = () => {
  return (
    <div className="mil-section mil-op-space-90">
      <div
        className="mil-bg-item"
        style={{ bottom: "-5%", right: 0, transform: "rotate(-25deg)" }}
      />
      <div className="container">
        <div className="mil-text-center-adapt">
          <p className="mil-upper mil-mb-30">
            Result of my <span className="mil-accent">Work</span>
          </p>
          <h2 className="mil-up mil-mb-60">Testimonials</h2>
          <p className="mil-mb-60">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="mil-divider" />
        <div className="row">
          <div className="col-xl-8">
            <Swiper
              {...sliderProps.reviewsSlider}
              className="swiper-container mil-reviews-slider"
            >
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="row">
                    <div className="col-lg-3">
                      <div className="mil-client">
                        <img src="/img/faces/clients/1.jpg" alt="client" />
                      </div>
                    </div>
                    <div className="col-lg-1" />
                    <div className="col-lg-7">
                      <p className="mil-mb-30">
                        It has survived not only five centuries, but also the
                        leap into electronic typesetting, remaining essentially
                        unchanged. It was popularised in the 1960s with the
                        release of Letraset sheets containing Lorem Ipsum
                        passages.
                      </p>
                      <p className="mil-upper mil-text-lg mil-mb-15">
                        Isabella <span className="mil-accent">Wilson</span>
                      </p>
                      <p className="mil-mb-30"> Director at Geands Hotel</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="row">
                    <div className="col-lg-3">
                      <div className="mil-client">
                        <img src="/img/faces/clients/2.jpg" alt="client" />
                      </div>
                    </div>
                    <div className="col-lg-1" />
                    <div className="col-lg-7">
                      <p className="mil-mb-30">
                        It has survived not only five centuries, but also the
                        leap into electronic typesetting, remaining essentially
                        unchanged. It was popularised in the 1960s with the
                        release of Letraset sheets containing Lorem Ipsum
                        passages.
                      </p>
                      <p className="mil-upper mil-text-lg mil-mb-15">
                        Isabella <span className="mil-accent">Wilson</span>
                      </p>
                      <p className="mil-mb-30"> Director at Geands Hotel</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="row">
                    <div className="col-lg-3">
                      <div className="mil-client">
                        <img src="/img/faces/clients/3.jpg" alt="client" />
                      </div>
                    </div>
                    <div className="col-lg-1" />
                    <div className="col-lg-7">
                      <p className="mil-mb-30">
                        It has survived not only five centuries, but also the
                        leap into electronic typesetting, remaining essentially
                        unchanged. It was popularised in the 1960s with the
                        release of Letraset sheets containing Lorem Ipsum
                        passages.
                      </p>
                      <p className="mil-upper mil-text-lg mil-mb-15">
                        Isabella <span className="mil-accent">Wilson</span>
                      </p>
                      <p className="mil-mb-30"> Director at Geands Hotel</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="row">
                    <div className="col-lg-3">
                      <div className="mil-client">
                        <img src="/img/faces/clients/4.jpg" alt="client" />
                      </div>
                    </div>
                    <div className="col-lg-1" />
                    <div className="col-lg-7">
                      <p className="mil-mb-30">
                        It has survived not only five centuries, but also the
                        leap into electronic typesetting, remaining essentially
                        unchanged. It was popularised in the 1960s with the
                        release of Letraset sheets containing Lorem Ipsum
                        passages.
                      </p>
                      <p className="mil-upper mil-text-lg mil-mb-15">
                        Isabella <span className="mil-accent">Wilson</span>
                      </p>
                      <p className="mil-mb-30"> Director at Geands Hotel</p>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
          <div className="col-xl-4">
            <div className="mil-reviews-nav">
              <div className="mil-slider-nav mil-mb-30">
                <div className="mil-prev mil-reviews-prev">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>
                <div className="mil-next mil-reviews-next">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>
              </div>
              <div className="mil-reviews-pagination mil-upper mil-mb-30" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Reviews;
