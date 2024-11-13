"use client";
import { useState } from 'react';
import Link from "next/link";

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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
  
    const response = await fetch('http://localhost:5000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
  
    const data = await response.json();
  
    if (response.ok) {
      setSuccessMessage('Login successful!');
      setErrorMessage('');
      setFormData({ email: '', password: '' });
      localStorage.setItem('token', data.token);  
      
      // Redirection vers l'interface admin
      window.location.href = 'http://localhost:3001/admin/dashboard';
    } else {
      setErrorMessage(data.message || 'There was an error, please try again.');
      setSuccessMessage('');
    }
  };
  
   
  return (
    <div className="mil-section mil-op-space-90">
      <div className="mil-bg-item" style={{ bottom: '-5%', right: 0, transform: 'rotate(-25deg)' }} />
      <div className="container">
        <p className="mil-upper mil-mb-30">
          Login to <span className="mil-accent">your account</span>
        </p>
        <h2 className="mil-up mil-mb-60">Welcome back, please login</h2>
        <div className="row justify-content-between">
          <div className="col-lg-7">
            <form id="login-form" className="cform-two" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-lg-12">
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
                    Your password <span className="mil-accent">*</span>
                  </label>
                  <input
                    type="password"
                    className="mil-mb-30"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-lg-12 mil-text-row">
                  <button type="submit" className="mil-button">
                    Login
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
          <div className="col-lg-4">
            <div className="mil-contact-card mil-mb-30">
              <p className="mil-upper mil-mb-30">Don't have an account?</p>
              <p><Link href="/">Return to Home</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
