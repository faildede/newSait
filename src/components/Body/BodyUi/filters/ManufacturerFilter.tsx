import React, { useState, useEffect } from 'react';
import {Select, SelectSection, SelectItem} from "@nextui-org/select";

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
    <Select
      value={selectedManufacturer}
      onChange={(e) => setSelectedManufacturer(e.target.value)}
      placeholder="Выберите производителя"
      defaultSelectedKeys={["Все производители"]}
      className="w-full"
      style={{ width: '300px', minWidth: '300px' }} 
    >
      {manufacturers.map((manufacturer) => (
        <SelectItem key={manufacturer.id} value={manufacturer.id}>
          {manufacturer.name}
        </SelectItem>
      ))}
    </Select>
  </div>
  );
};

export default ManufacturerFilter;
