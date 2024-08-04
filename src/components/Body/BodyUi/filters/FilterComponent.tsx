import React, { useState, useEffect } from 'react';
import PriceFilter from './PriceFilter';
import SaleFilter from './SaleFilter';
import ManufacturerFilter from './ManufacturerFilter';

interface FilterProps {
  onFilterChange: (filters: {
    priceRange: { min: number; max: number };
    onSale?: boolean;
    manufacturer: string;
  }) => void;
}

const FilterComponent: React.FC<FilterProps> = ({ onFilterChange }) => {
  const [priceRange, setPriceRange] = useState<{ min: number; max: number }>({ min: 0, max: 100000 });
  const [onSale, setOnSale] = useState<boolean>(false);
  const [manufacturer, setManufacturer] = useState<string>('');

  useEffect(() => {
    const newFilters: any = { priceRange, manufacturer };
    if (onSale) {
      newFilters.onSale = onSale;
    }
    onFilterChange(newFilters);
  }, [priceRange, onSale, manufacturer]);

  return (
    <div className="container mx-auto flex justify-between my-12">
      <PriceFilter priceRange={priceRange} setPriceRange={setPriceRange} />
      <SaleFilter onSale={onSale} setOnSale={setOnSale} />
      <ManufacturerFilter onFilterChange={setManufacturer} />
    </div>
  );
};

export default FilterComponent;