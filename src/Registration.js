import React, { useState } from 'react';

const Registration = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [currentYear, setCurrentYear] = useState('');
  const [finalYear, setFinalYear] = useState('');
  const [numericRFID, setNumericRFID] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();

    // Basic validation
    if (!firstName || !lastName || !email || !currentYear || !finalYear || !numericRFID) {
      alert('All fields are required');
      return;
    }

    // Numeric RFID validation (optional)
    const numericRFIDValue = parseInt(numericRFID);
    if (isNaN(numericRFIDValue)) {
      alert('Numeric RFID must be a valid number');
      return;
    }

    // If all validations pass, you can proceed with your registration logic
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Current Year:', currentYear);
    console.log('Final Year:', finalYear);
    console.log('Numeric RFID:', numericRFID);

    // Replace the alert with your actual registration logic, e.g., API call to your server
    alert('Registration successful!');
  };

  return (
    <div className="registration-container">
      <h2>Registration Page</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="currentYear">Current Year:</label>
          <input
            type="text"
            id="currentYear"
            value={currentYear}
            onChange={(e) => setCurrentYear(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="finalYear">Final Year:</label>
          <input
            type="text"
            id="finalYear"
            value={finalYear}
            onChange={(e) => setFinalYear(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="numericRFID">Numeric RFID:</label>
          <input
            type="number"
            id="numericRFID"
            value={numericRFID}
            onChange={(e) => setNumericRFID(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
