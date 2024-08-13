import React from 'react';
import { Pagination } from '@nextui-org/react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const PaginationComponent: React.FC<PaginationProps> = ({ totalPages, currentPage, onPageChange }) => {
  return (
    <Pagination
      color="danger"
      size="lg"
      total={totalPages}
      page={currentPage}
      onChange={(page) => onPageChange(page)}
    />
  );
};

export default PaginationComponent;