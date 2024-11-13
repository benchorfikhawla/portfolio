import { useEffect, useState } from 'react';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/services');
        const data = await response.json();
        setServices(data);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchServices();
  }, []);

  return (
    <div className="mil-section mil-op-space-90">
      <div
        className="mil-bg-item mil-bg-item-large"
        style={{ top: "-10%", right: "20%", transform: "rotate(-25deg)" }}
      />
      <div
        className="mil-bg-item"
        style={{ bottom: "20%", left: "-5%", transform: "rotate(-25deg)" }}
      />
      <div className="container">
        <p className="mil-upper mil-mb-30">Freelance</p>
        <h2 className="mil-up mil-mb-60">Services</h2>
        <div className="row">
          {services.map((service) => (
            <div className="col-xl-4" key={service._id}>
              <div className="mil-icon-box mil-mb-60">
                <div className="mil-text-icon">
                  <i className={service.icon} />
                </div>
                <div className="mil-box-text">
                  <p className="mil-upper mil-text-lg mil-mb-15">{service.name}</p>
                  <p className="mil-upper mil-mb-30">
                    ${service.price} <span className="mil-accent">per hour</span>
                  </p>
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
