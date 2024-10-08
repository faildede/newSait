import React, { useState, useEffect } from 'react';
import PriceSlider from './PriceSlider';
import SaleFilter from './SaleFilter';
import ManufacturerFilter from './ManufacturerFilter';

interface FilterComponentProps {
  onFilterChange: (filters: any) => void;
  minPrice: number;
  maxPrice: number;
}

const FilterComponent: React.FC<FilterComponentProps> = ({ onFilterChange, minPrice, maxPrice }) => {
  const [onSale, setOnSale] = useState(false);
  const [manufacturer, setManufacturer] = useState('');
  const [currentMinPrice, setCurrentMinPrice] = useState(minPrice);
  const [currentMaxPrice, setCurrentMaxPrice] = useState(maxPrice);

  useEffect(() => {
    const newFilters = {
      onSale,
      manufacturer,
      minPrice: currentMinPrice,
      maxPrice: currentMaxPrice,
  };
    onFilterChange(newFilters);
  }, [onSale, manufacturer, currentMinPrice, currentMaxPrice]);

  const handlePriceChange = (min: number, max: number) => {
    setCurrentMinPrice(min);
    setCurrentMaxPrice(max);
  };

  return (
<div className="container w-full flex justify-between items-center my-12">
  <SaleFilter className="my-auto" onSale={onSale} setOnSale={setOnSale} />
  <ManufacturerFilter className="my-auto" onFilterChange={setManufacturer} style={{ width: '40%' }} />
  <PriceSlider className="my-auto"
      minPrice={minPrice}
      maxPrice={maxPrice}
      initialMinPrice={currentMinPrice}
      initialMaxPrice={currentMaxPrice}
      onPriceChange={handlePriceChange}
    />
</div>
  );
};

export default FilterComponent;