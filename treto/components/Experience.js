import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { sliderProps } from '@/utility/sliderProps'; // Your custom slider properties

const Experience = () => {
  const [experienceData, setExperienceData] = useState([]);

  useEffect(() => {
    const fetchExperience = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/experience');
        const data = await response.json();
        setExperienceData(data);
      } catch (error) {
        console.error('Error fetching experience data:', error);
      }
    };

    fetchExperience();
  }, []);

  return (
    <div className="mil-section mil-op-space-90">
      <div
        className="mil-bg-item"
        style={{ top: 0, right: '15%', transform: 'rotate(-25deg)' }}
      />
      <div
        className="mil-bg-item"
        style={{ bottom: '15%', left: '-5%', transform: 'rotate(-25deg)' }}
      />
      <div className="container">
        <p className="mil-upper mil-mb-30">
          A Decade of <span className="mil-accent">work</span>
        </p>
        <h2 className="mil-up mil-mb-60">Experience</h2>
        <div className="row">
          <div className="col-lg-6">
            <p className="mil-mb-30">
            I am passionate about creating dynamic and user-friendly digital solutions. 
            </p>
          </div>
          <div className="col-lg-6">
            <div className="mil-timeline-nav-2">
              <div className="mil-timeline-2-pagination mil-upper mil-mb-30" />
              <div className="mil-slider-nav mil-mb-30">
                <div className="mil-prev mil-timeline-2-prev">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>
                <div className="mil-next mil-timeline-2-next">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="mil-divider" />
          <div className="col-xl-12">
            <Swiper
              {...sliderProps.timelineSlider}
              className="swiper-container mil-timeline-slider-2"
            >
              {experienceData.map((exp) => (
                <SwiperSlide key={exp._id} className="swiper-slide">
                  <div className="mil-icon-box mil-type-2 mil-mb-30">
                    <div className="mil-box-text">
                      <p className="mil-upper mil-text-lg mil-mb-15">{exp.title}</p>
                      <p className="mil-upper mil-mb-30">
                        {exp.startDate} <span className="mil-accent">to</span> {exp.endDate}
                      </p>
                      <p>{exp.description}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

