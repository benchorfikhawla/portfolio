import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
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

  const [formData, setFormData] = useState({
    from_name: '',
    reply_to: '',
    message: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form data before sending:", formData);

    // Send email using the form element (e.target)
    emailjs
      .sendForm(
        'service_pc77ozt', // EmailJS service ID
        'template_8r8khl7', // EmailJS template ID
        e.target, // Pass the form element directly
        'IxkgiJNFwjHIYnPL4' // Your EmailJS user ID
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setSuccessMessage('Thanks, your message is sent successfully.');
          setErrorMessage('');
          setFormData({ from_name: '', reply_to: '', message: '' });
        },
        (error) => {
          console.error("Error sending email:", error);
          setErrorMessage(error.text || 'There was an error, please try again.');
          setSuccessMessage('');
        }
      );
  };

  return (
    <div className="mil-section mil-op-space-90">
      <div className="mil-bg-item" style={{ bottom: '-5%', right: 0, transform: 'rotate(-25deg)' }} />
      <div className="container">
        <p className="mil-upper mil-mb-30">
          Contact <span className="mil-accent">me</span>
        </p>
        <h2 className="mil-up mil-mb-60">Let's get you an estimate</h2>
        <div className="row justify-content-between">
          <div className="col-lg-4">
            <div className="mil-contact-card mil-mb-30">
              <p className="mil-upper mil-mb-30">Email</p>
              <p>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </p>
            </div>
            <div className="mil-contact-card mil-mb-30">
              <p className="mil-upper mil-mb-30">Phone</p>
              <p>
                <a href={`tel:${profile.tel}`}>{profile.tel}</a>
              </p>
            </div>
          </div>
          <div className="col-lg-7">
            <form id="cform-two" className="cform-two" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-lg-6">
                  <label className="mil-upper">
                    Your full name <span className="mil-accent">*</span>
                  </label>
                  <input
                    type="text"
                    className="mil-mb-30"
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-lg-6">
                  <label className="mil-upper">
                    Your email address <span className="mil-accent">*</span>
                  </label>
                  <input
                    type="email"
                    className="mil-mb-30"
                    name="reply_to"
                    value={formData.reply_to}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-lg-12">
                  <label className="mil-upper">
                    Your message <span className="mil-accent">*</span>
                  </label>
                  <textarea
                    className="mil-mb-30"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-lg-12 mil-text-row">
                  <label className="mil-checkbox mil-mb-30">
                    by sending, I accept the{" "}
                    <a href="#.">terms and conditions</a>.
                    <input type="checkbox" name="checkmark" defaultChecked />
                    <span className="mil-checkmark" />
                  </label>
                  <button type="submit" className="mil-button">
                    Submit
                  </button>
                </div>
              </div>
            </form>
            {successMessage && (
              <div className="alert-success">
                <h5>{successMessage}</h5>
              </div>
            )}
            {errorMessage && (
              <div className="alert-error">
                <h5>{errorMessage}</h5>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
