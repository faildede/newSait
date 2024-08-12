import React from 'react';
import {Switch} from "@nextui-org/switch";
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
      <div className="relative inline-block">
      <Switch    checked={onSale}
          onChange={handleChange} color="danger">По распродаже</Switch>
    
        
      </div>
    </div>
  );
};

export default SaleFilter;
