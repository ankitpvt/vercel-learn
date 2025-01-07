import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', message: '' });
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://vercel-learn-backend.vercel.app/submit', formData);
      setResponseMessage(response.data.message);
    } catch (error) {
      setResponseMessage('Something went wrong. Please try again.');
      console.error(error);
    }
  };

  return (
    <div style={{ margin: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>Contact Form</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{ marginLeft: '1rem', padding: '0.5rem', width: '300px' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            style={{ marginLeft: '1rem', padding: '0.5rem', width: '300px', height: '100px' }}
          />
        </div>
        <button type="submit" style={{ padding: '0.5rem 1rem', background: 'blue', color: 'white', border: 'none', cursor: 'pointer' }}>
          Submit
        </button>
      </form>
      {responseMessage && <p style={{ marginTop: '1rem', color: 'green' }}>{responseMessage}</p>}
    </div>
  );
};

export default ContactForm;
