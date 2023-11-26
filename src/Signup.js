// Signup.js
import React, { useState } from 'react';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate signup logic (replace this with your actual signup API call)
    console.log('Form submitted:', formData);

    // Reset the form after submission
    setFormData({
      username: '',
      email: '',
      password: '',
    });
  };

  return (
    <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <form
        style={{
          width: '200%', // Set the form width to 100%
          maxWidth: '300px', // Set a maximum width if needed
          padding: '20px',
          backgroundColor: '#fff', // Set the background color
          border: '1px solid #ddd',
          borderRadius: '8px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        }}
        onSubmit={handleSubmit}
      >
        <h2>Sign Up</h2>
        <label>
          Username:
          <input type="text" name="username" value={formData.username} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </label>
        <br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
