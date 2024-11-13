import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSuccessMessage('Thanks, your message is sent successfully.');
      setErrorMessage('');
      setFormData({ name: '', email: '', message: '' });
    } else {
      const error = await response.json();
      setErrorMessage(error.message || 'There was an error, please try again.');
      setSuccessMessage('');
    }
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
                <a href="mailto:hello@treto.co">khawlabenchorfi@gmail.com</a>
                <br />
                <a href="mailto:projects@treto.co">projects@treto.co</a>
              </p>
            </div>
            <div className="mil-contact-card mil-mb-30">
              <p className="mil-upper mil-mb-30">Phone</p>
              <p>
                <a href="tel:+5636366060">(212) 607755291</a>
                 
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
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-lg-6">
                  <label className="mil-upper">
                    Your email address <span className="mil-accent">*</span>
                  </label>
                  <input
                    type="email"
                    className="mil-mb-30"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
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
