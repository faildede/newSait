import React, { useState, useEffect } from 'react';

const ManufacturerFilter = ({ onFilterChange }) => {
  const [manufacturers, setManufacturers] = useState([]);
  const [selectedManufacturer, setSelectedManufacturer] = useState('');

  useEffect(() => {
    const fetchManufacturers = async () => {
      const res = await fetch(`http://localhost:4000/api/manufacturers`);
      const data = await res.json();
      setManufacturers(data.docs);
    };

    fetchManufacturers();
  }, []);

  useEffect(() => {
    onFilterChange(selectedManufacturer);
  }, [selectedManufacturer]);

  return (
    <div>
      <select
        value={selectedManufacturer}
        onChange={(e) => setSelectedManufacturer(e.target.value)}
        style={{ margin: '10px 0', padding: '5px' }}
      >
        <option value="">Select Manufacturer</option>
        {manufacturers.map((manufacturer) => (
          <option key={manufacturer.id} value={manufacturer.id}>
            {manufacturer.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ManufacturerFilter;
