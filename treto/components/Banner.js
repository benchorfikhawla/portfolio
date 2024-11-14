import Link from "next/link";
import { useState, useEffect } from 'react';

const Banner = ( { bgImage = "img/faces/6.jpg" } ) => {
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/users');
        const data = await response.json();
        if (data.length > 0) {
          setProfile(data[0]); // Set the first profile data
        }
         
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchAbout();
  }, []);
  return (
    <div className="mil-section mil-banner mil-banner-right">
      <div className="container-full">
        <div className="row no-gutters align-items-center justify-content-between">
          <div className="col-xl-7">
            <div className="mil-p-120-120">
              <div
                className="mil-banner-text"
                data-swiper-parallax-y={-600}
                data-swiper-parallax-duration={600}
              >
                <div
                  className="mil-bg-title-boxed"
                  style={{ top: 0, left: "-82%" }}
                />
                <p className="mil-upper mil-mb-30">
                {profile.profession} 
                </p>
                <h1 className="mil-up mil-mb-40">{profile.name} </h1>
                <div className="mil-short mil-left-offset">
                  <p className="mil-mb-30">
                  {profile.biohome}
                  </p>
                  <div className="mil-buttons-frame">
                    <Link legacyBehavior href="/portfolio">
                      <a className="mil-button mil-type-2">Portfolio</a>
                    </Link>
                    <Link legacyBehavior href="/contact">
                      <a className="mil-button" style={{ backgroundColor: '#87CEEB', borderColor: '#87CEEB',color: 'black'  }}>Contact me</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-5">
            <img
              src={`http://localhost:5000${profile.image}`}  
              alt="face"
              className="mil-banner-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;

export const Banner2 = () => {
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/users');
        const data = await response.json();
        if (data.length > 0) {
          setProfile(data[0]); // Set the first profile data
        }
         
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchAbout();
  }, []);
  return (
    <div className="mil-section mil-banner">
      <div className="container-full">
        <div className="row no-gutters align-items-center justify-content-between flex-sm-row-reverse">
          <div className="col-xl-7">
            <div className="mil-p-120-120">
              <div
                className="mil-banner-text"
                data-swiper-parallax-y={-600}
                data-swiper-parallax-duration={600}
              >
                <div
                  className="mil-bg-title-boxed"
                  style={{ top: 0, left: "-82%" }}
                />
                <p className="mil-upper mil-mb-30">
                {profile.profession} 
                </p>
                <h1 className="mil-up mil-mb-40">{profile.name}</h1>
                <div className="mil-short mil-left-offset">
                  <p className="mil-mb-30">
                  {profile.biohome}
                  </p>
                  <div className="mil-buttons-frame">
                    <Link legacyBehavior href="/portfolio">
                      <a className="mil-button mil-type-2">Portfolio</a>
                    </Link>
                    <Link legacyBehavior href="/contact">
                      <a className="mil-button">Contact me</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-5">
            <img
             src={`http://localhost:5000${profile.image}`}
              alt="face"
              className="mil-banner-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
