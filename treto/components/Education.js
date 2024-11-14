import { useEffect, useState } from 'react';

const Education = () => {
  const [educationData, setEducationData] = useState([]);

  useEffect(() => {
    const fetchEducation = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/education');
        const data = await response.json();
        // Check if the fetched data is an array
        if (Array.isArray(data)) {
          setEducationData(data);
        } else {
          console.error('Fetched data is not an array', data);
          setEducationData([]); // Fallback to empty array if data is not an array
        }
      } catch (error) {
        console.error('Error fetching education data:', error);
      }
    };

    fetchEducation();
  }, []);

  return (
    <div className="mil-section mil-op-space-90">
      <div
        className="mil-bg-item"
        style={{ bottom: '0%', left: '25%', transform: 'rotate(-25deg)' }}
      />
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-xl-5 mil-mb-60">
            <div className="mil-text-right-adapt">
              <p className="mil-upper mil-mb-30">Certificates</p>
              <h2 className="mil-up mil-mb-60">Education</h2>
              <p>
                Extensive education in developing web pages using: HTML, CSS, JavaScript, React JS,
                JQuery, JSON, Node.js, Bootstrap.
              </p>
            </div>
          </div>
          <div className="col-xl-6">
            {educationData.map((edu) => (
              <div key={edu._id} className="mil-icon-box mil-mb-40">
                <div className="mil-text-icon">
                  <a href={`http://localhost:5000${edu.certificateImage}`} className="mfp-image">
                    +
                  </a>
                </div>
                <div className="mil-box-text">
                  <p className="mil-upper mil-text-lg mil-mb-15">{edu.title}</p>
                  <p className="mil-upper mil-upper-sm mil-mb-30">
                    {edu.startDate} <span className="mil-accent">to</span> {edu.endDate}
                  </p>
                  <p>{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
