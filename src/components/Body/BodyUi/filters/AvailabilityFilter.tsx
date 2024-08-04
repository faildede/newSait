
import React from 'react';

interface AvailabilityFilterProps {
  availability: string;
  setAvailability: (availability: string) => void;
}

const AvailabilityFilter: React.FC<AvailabilityFilterProps> = ({ availability, setAvailability }) => {
  return (
    <div className="filter-section">
      <label>
        Наличие:
        <select value={availability} onChange={(e) => setAvailability(e.target.value)}>
          <option value="all">Все</option>
          <option value="in_stock">В наличии</option>
          <option value="preorder">Под заказ</option>
        </select>
      </label>
    </div>
  );
};

export default AvailabilityFilter;
