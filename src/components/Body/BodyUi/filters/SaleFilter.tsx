import React from 'react';

interface SaleFilterProps {
  onSale: boolean;
  setOnSale: (onSale: boolean) => void;
}

const SaleFilter: React.FC<SaleFilterProps> = ({ onSale, setOnSale }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOnSale(e.target.checked);
  };

  return (
    <div className="filter-section">
      <label>
        <input
          type="checkbox"
          checked={onSale}
          onChange={handleChange}
        />
        На распродаже
      </label>
    </div>
  );
};

export default SaleFilter;