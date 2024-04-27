import React, { useState } from 'react';
import axios from 'axios';
import './App.css';


function App() {
  const [zipCode, setZipCode] = useState('');
  const [locationData, setLocationData] = useState(null);
  const [error, setError] = useState(null);

  const handleZipCodeChange = (event) => {
    setZipCode(event.target.value);
  };

  const fetchLocationData = async () => {
    try {
      const response = await axios.get(`https://api.zippopotam.us/us/${zipCode}`);
      setLocationData(response.data);
      setError(null);
    } catch (error) {
      setLocationData(null);
      setError('Invalid ZIP code. Please enter a valid ZIP code.');
    }
  };

  return (
    <div>
      <h1>ZIP Code Lookup</h1>
      <input
        type="text"
        value={zipCode}
        onChange={handleZipCodeChange}
        placeholder="Enter ZIP code"
      />
      <button onClick={fetchLocationData}>Search</button>

      {error && <p>{error}</p>}

      {locationData && (
        <div>
          <h2>Location Information</h2>
          <p>Country: {locationData.country}</p>
          <p>City: {locationData.places[0]['place name']}</p>
          <p>State: {locationData.places[0]['state']}</p>
          <p>Latitude: {locationData.places[0]['latitude']}</p>
          <p>Longitude: {locationData.places[0]['longitude']}</p>
        </div>
      )}
    </div>
  );
}

export default App;