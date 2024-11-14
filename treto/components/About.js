import { useState, useEffect } from 'react';
import Link from "next/link";

const About = () => {
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
    <div className="mil-section mil-op-space-90">
      <div className="mil-bg-item mil-bg-item-large" style={{ top: "-25%", right: "15%", transform: "rotate(-35deg)" }} />
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-xl-4">
            <div className="mil-about-person mil-mb-30">
              <img src={`http://localhost:5000${profile.imageprofile || ''}`}  alt={profile.name} className="mil-avatar" />
            </div>
          </div>
          <div className="col-xl-7">
            <div className="row">
              <div className="col-xl-12">
                <p className="mil-upper mil-mb-30">
                  <span className="mil-accent">Hello</span>, my name is
                </p>
                <h2 className="mil-up mil-mb-60">{profile.name}</h2>
                <p className="mil-mb-30">{profile.bio}</p>
                <div className="mil-buttons-frame">
                  <Link legacyBehavior href="https://drive.google.com/file/d/1H0Ywx8HqrywjkW5-AA-QavCkXKH2qxp3/view?usp=sharing">
                    <a className="mil-button">Download CV</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

export const About2 = () => {
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
    <div className="mil-section mil-op-space-90">
      <div className="mil-bg-item mil-bg-item-large" style={{ top: "-20%", left: "15%", transform: "rotate(-35deg)" }} />
      <div className="mil-bg-item" style={{ top: "25%", right: 0, transform: "rotate(-25deg)" }} />
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-xl-12">
            <div className="mil-text-center">
            <div className="mil-about-person-2 mil-mb-30">
                <img src={`http://localhost:5000${profile.imageprofile || ''}`} alt={profile.name} className="mil-avatar" />
              </div>
              <p className="mil-upper mil-mb-30">
                {profile.profession}
              </p>
              <h2 className="mil-up mil-mb-30">{profile.name}</h2>
              <div className="row justify-content-center">
                <div className="col-xl-8">
                  <p className="mil-mb-30">{profile.description}</p>
                   
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* import Link from "next/link";

const About = () => {
  return (
    <div className="mil-section mil-op-space-90">
      <div
        className="mil-bg-item mil-bg-item-large"
        style={{ top: "-25%", right: "15%", transform: "rotate(-35deg)" }}
      />
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-xl-4">
            <div className="mil-about-person mil-mb-30">
              <img
                src="img/faces/1.jpg"
                alt="Sophie Miller"
                className="mil-avatar"
              />
            </div>
          </div>
          <div className="col-xl-7">
            <div className="row">
              <div className="col-xl-12">
                <p className="mil-upper mil-mb-30">
                  <span className="mil-accent">Hello</span>, my name is
                </p>
                <h2 className="mil-up mil-mb-60">Sophie Miller</h2>
                <p className="mil-mb-30">
                  From France, Paris. I have rich experience in web design, also
                  I am good at React, Vue.js. I love to talk with you about our
                  unique. I have been studying UI UX Design since October 2020.
                  I like creating a cool design project.
                </p>
                <p className="mil-mb-30">
                  Over 6+ years of IT experience which includes 2+ years of a
                  React JS Developer and 3 years of Experience as a UI/UX
                  Developer and 1 years of Experience as software Developer.
                </p>
                <div className="mil-buttons-frame">
                  <Link legacyBehavior href="/portfolio">
                    <a className="mil-button">Download CV</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;

export const About2 = () => {
  return (
    <div className="mil-section mil-op-space-90">
      <div
        className="mil-bg-item mil-bg-item-large"
        style={{ top: "-20%", left: "15%", transform: "rotate(-35deg)" }}
      />
      <div
        className="mil-bg-item"
        style={{ top: "25%", right: 0, transform: "rotate(-25deg)" }}
      />
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-xl-12">
            <div className="row">
              <div className="col-xl-12">
                <div className="mil-text-center">
                  <div className="mil-about-person-2 mil-mb-30">
                    <img
                      src="img/faces/clients/4.jpg"
                      alt="Sophie Miller"
                      className="mil-avatar"
                    />
                  </div>
                  <p className="mil-upper mil-mb-30">
                    Graphic <span className="mil-accent">and</span> Web
                    Developer
                  </p>
                  <h2 className="mil-up mil-mb-30">Devies Byrne</h2>
                  <div className="row justify-content-center">
                    <div className="col-xl-8">
                      <div className="mil-text-center">
                        <p className="mil-mb-30">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged. It was popularised in the 1960s with the
                          release of Letraset sheets containing Lorem Ipsum
                          passages, and more recently with desktop publishing
                          software like Aldus PageMaker including versions of
                          Lorem Ipsum.
                        </p>
                        <img
                          src="img/signature.png"
                          alt="signature"
                          className="mil-signature"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

 */