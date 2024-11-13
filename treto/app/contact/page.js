"use client";
import { useState } from "react";
import TretoLayout from "@/layout/TretoLayout";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    tel: '',
    subject: '',
    message: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage("Thanks, your message is sent successfully.");
        setFormData({ name: '', email: '', tel: '', subject: '', message: '' });
      } else {
        const data = await response.json();
        setErrorMessage(data.message || "There was an error, please try again.");
      }
    } catch (error) {
      setErrorMessage("Network error, please try again.");
    }
  };

  return (
    <TretoLayout noFooter>
      <div>
        <div className="mil-page">
          <div
            className="mil-bg-item"
            style={{ top: "3%", right: "15%", transform: "rotate(-45deg)" }}
          />
          <div className="container">
            <div className="mil-top-banner">
              <p className="mil-upper mil-mb-30">
                Contact <span className="mil-accent">me</span>
              </p>
              <h2 className="mil-up mil-mb-30">Let's get you an estimate</h2>
              <p className="mil-left-offset">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor <br /> incididunt ut labore et dolore magna
                aliqua.
              </p>
            </div>
            <div className="mil-contact">
              <div className="row justify-content-between">
                <div className="col-lg-4">
                  {/* Contact Info Cards */}
                  <div className="mil-contact-card mil-mb-30">
                    <p className="mil-upper mil-mb-30">About <span className="mil-accent">me</span></p>
                    <p>
                      Margaret Anderson <br />
                      Web and App Developer <br />
                      Miami, FL <br />
                      United States of America
                    </p>
                  </div>
                  <div className="mil-contact-card mil-mb-30">
                    <p className="mil-upper mil-mb-30">Email</p>
                    <p>
                      <a href="mailto:khawlabenchorfi@gmail.com">khawlabenchorfi@gmail.com</a>
                      <br />
                      <a href="mailto:projects@treto.co">projects@treto.co</a>
                    </p>
                  </div>
                  <div className="mil-contact-card mil-mb-30">
                    <p className="mil-upper mil-mb-30">Chats</p>
                    <p>
                      <a href="tel:+123456789">Telegram</a>
                      <br />
                      <a href="tel:+123456789">WhatsApp</a>
                    </p>
                  </div>
                  <div className="mil-contact-card mil-mb-90">
                    <p className="mil-upper mil-mb-30">Phone</p>
                    <p>
                      <a href="tel:+5636366060">+ 56 3636 60 60</a> <br />
                      <a href="tel:+5663630606">+ 56 6363 06 06</a>
                    </p>
                  </div>
                </div>

                <div className="col-lg-7">
                  <form id="cform" className="cform" onSubmit={handleSubmit}>
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
                    <label className="mil-upper">
                      Your phone number <span className="mil-accent">*</span>
                    </label>
                    <input
                      type="tel"
                      className="mil-mb-30"
                      name="tel"
                      value={formData.tel}
                      onChange={handleChange}
                    />
                    <label className="mil-upper">
                      Subject <span className="mil-accent">*</span>
                    </label>
                    <input
                      type="text"
                      className="mil-mb-30"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                    <label className="mil-upper">
                      Tell me your ideas <span className="mil-accent">*</span>
                    </label>
                    <textarea
                      className="mil-mb-30"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                    />
                    <label className="mil-checkbox mil-mb-30">
                      by sending the message you accept the{" "}
                      <a href="#.">terms and conditions</a>.
                      <input type="checkbox" name="checkmark" defaultChecked />
                      <span className="mil-checkmark" />
                    </label>
                    <button type="submit" className="mil-button">
                      Submit
                    </button>
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
        </div>
      </div>
    </TretoLayout>
  );
};

export default ContactPage;
