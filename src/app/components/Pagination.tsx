import React, { useState } from 'react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, onPageChange }) => {
  const getPageNumbers = (): (number | string)[] => {
    const pages: (number | string)[] = [];
    const showPages = window.innerWidth < 768 ? 3 : 5; // Show fewer pages on mobile

    if (totalPages <= showPages) {
      // If total pages are less than or equal to showPages, show all pages
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always include first and last navigation arrows
      pages.push('prev');

      if (currentPage <= 3) {
        // Near the start
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        // Near the end
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        // In the middle
        pages.push(1);
        pages.push('...');
        pages.push(currentPage - 1);
        pages.push(currentPage);
        pages.push(currentPage + 1);
        if (currentPage + 2 < totalPages) {
          pages.push('...');
        }
        pages.push(totalPages);
      }
      
      // Add next button
      pages.push('next');
    }

    return pages;
  };

  return (
    <div className="flex items-center justify-center gap-2 p-4 flex-wrap">
      {getPageNumbers().map((pageNumber, index) => {
        if (pageNumber === 'prev') {
          return (
            <button
              key="prev"
              onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`w-10 h-10 flex items-center justify-center rounded-lg ${
                currentPage === 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-[#333333] text-white hover:bg-gray-700'
              }`}
            >
              ←
            </button>
          );
        }

        if (pageNumber === 'next') {
          return (
            <button
              key="next"
              onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`w-10 h-10 flex items-center justify-center rounded-lg ${
                currentPage === totalPages
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-[#333333] text-white hover:bg-gray-700'
              }`}
            >
              →
            </button>
          );
        }

        if (pageNumber === '...') {
          return (
            <span
              key={`ellipsis-${index}`}
              className="w-10 h-10 flex items-center justify-center text-gray-500"
            >
              ...
            </span>
          );
        }

        return (
          <button
            key={index}
            onClick={() => onPageChange(Number(pageNumber))}
            className={`w-10 h-10 flex items-center justify-center rounded-lg ${
              pageNumber === currentPage
                ? 'bg-white text-black shadow-md'
                : 'bg-[#333333] text-white hover:bg-gray-700'
            }`}
          >
            {pageNumber}
          </button>
        );
      })}
    </div>
  );
};

// Example usage component
const PaginationExample: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = 6;

  return (
    <div className="w-full">
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default PaginationExample;