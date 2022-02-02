import React, { useState } from 'react';
import './CityField.scss';

const CityField = () => {
  const [city, setCity] = useState('');
  return (
    <div>
      <label htmlFor='city'> City </label>
      <input
        type='text'
        id='city'
        value={city}
        onChange={
          (e) => setCity(e.target.value)} />
      <button>
        Add City
      </button>
    </div>
  );
}

export default CityField;