
import React, { useState } from 'react';

const GasConnectionForm = () => {
  const [customerName, setCustomerName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleGasConnectionRequest = () => {
    const gasConnectionData = {
      customerName,
      phoneNumber,
    };
    //  axios.post('http://localhost:8080/api/gas-connection', gasConnectionData)
    //or
    fetch('http://localhost:8080/api/gas-connection', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(gasConnectionData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Gas connection requested successfully', data);
         alert('Gas connection requested successfully!');
      })
      .catch(error => {
        console.error('Error requesting gas connection', error);
         alert('Error requesting gas connection. Please try again.');
      });
  };

  return (
    <div>
      <h2>Gas Connection Request</h2>
      <form>
        <label>
          Customer Name:
          <input
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Phone Number:
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleGasConnectionRequest}>
          Request Gas Connection
        </button>
      </form>
    </div>
  );
};

export default GasConnectionForm;

