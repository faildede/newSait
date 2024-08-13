import React, { useState, useEffect } from 'react';
import { Slider, Input } from '@nextui-org/react';

interface PriceSliderProps {
  onPriceChange: (minPrice: number, maxPrice: number) => void;
  minPrice: number;
  maxPrice: number;
}

const PriceSlider: React.FC<PriceSliderProps> = ({ onPriceChange, minPrice, maxPrice }) => {
  const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);

  useEffect(() => {
    setPriceRange([minPrice, maxPrice]);
  }, [minPrice, maxPrice]);

  useEffect(() => {
    onPriceChange(priceRange[0], priceRange[1]);
  }, [priceRange, onPriceChange]);

  const handleSliderChange = (values: number[]) => {
    setPriceRange(values);
  };

  const handleMinInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMin = Math.max(Number(e.target.value), minPrice);
    setPriceRange([Math.min(newMin, priceRange[1]), priceRange[1]]);
  };

  const handleMaxInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMax = Math.min(Number(e.target.value), maxPrice);
    setPriceRange([priceRange[0], Math.max(newMax, priceRange[0])]);
  };

  return (
    <div className="w-96">
      <h3 className="text-lg font-bold text-grey-1">Цена от и до:</h3>
      <div className="flex justify-between my-4">
        <Input
          className="px-4"
          placeholder="Минимальная цена"
          min={minPrice}
          max={priceRange[1]}
          value={priceRange[0]}
          onChange={handleMinInputChange}
        />
        <Input
          className="px-4"
          placeholder="Максимальная цена"
          min={priceRange[0]}
          max={maxPrice}
          value={priceRange[1]}
          onChange={handleMaxInputChange}
        />
      </div>

      <Slider
        color="danger"
        step={100}
        minValue={minPrice}
        maxValue={maxPrice}
        value={priceRange}
        aria-label="Price Range"
        className="max-w-md"
        range
        onChange={handleSliderChange}
      />
    </div>
  );
};

export default PriceSlider;