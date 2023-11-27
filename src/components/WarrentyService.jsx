// Import necessary React modules
import React, { useState } from 'react';

// Functional component for the complaint form
const ComplaintForm = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    complaint: ''
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add logic to send the complaint data to your server or service center
    console.log('Complaint submitted:', formData);
    // Clear the form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      complaint: ''
    });
  };

  return (
    <div>
      <h1>Refrigerator Service Complaint</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
        </label>
        <br />
        <label>
          Phone:
          <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required />
        </label>
        <br />
        <label>
          Complaint:
          <textarea name="complaint" value={formData.complaint} onChange={handleInputChange} required />
        </label>
        <br />
        <button type="submit">Submit Complaint</button>
      </form>
    </div>
  );
};

export default ComplaintForm;