
import React from 'react';

interface PriceFilterProps {
  priceRange: { min: number; max: number };
  setPriceRange: (priceRange: { min: number; max: number }) => void;
}

const PriceFilter: React.FC<PriceFilterProps> = ({ priceRange, setPriceRange }) => {
  return (
    <div className="filter-section">
      <label>Цена:</label>
      <input
        type="number"
        placeholder="Мин"
        value={priceRange.min}
        onChange={(e) => setPriceRange({ ...priceRange, min: parseInt(e.target.value) })}
      />
      <input
        type="number"
        placeholder="Макс"
        value={priceRange.max}
        onChange={(e) => setPriceRange({ ...priceRange, max: parseInt(e.target.value) })}
      />
    </div>
  );
};

export default PriceFilter;
