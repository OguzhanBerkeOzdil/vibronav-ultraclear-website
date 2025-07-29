/**
 * Component: Pagination
 * Purpose: Blog post content and metadata
 * Author: Oğuzhan Berke Özdil
 * Last edit: 27 January 2025
 */

// src/components/blog/Pagination.tsx
import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisiblePages = 7;

    if (totalPages <= maxVisiblePages) {
      // Show all pages if total is small
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Complex pagination logic
      if (currentPage <= 4) {
        // Near the beginning
        for (let i = 1; i <= 5; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 3) {
        // Near the end
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        // In the middle
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      }
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  const handlePageClick = (page: number | string) => {
    if (typeof page === 'number' && page !== currentPage) {
      onPageChange(page);
      // Scroll to top of results
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (totalPages <= 1) return null;

  return (
    <nav className="flex items-center justify-center space-x-1" aria-label="Pagination">
      {/* Previous Button */}
      <button
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 1}
        className={`inline-flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
          currentPage === 1
            ? 'text-slate-400 cursor-not-allowed'
            : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
        }`}
        aria-label="Previous page"
      >
        <ChevronLeftIcon className="w-4 h-4 mr-1" />
        Previous
      </button>

      {/* Page Numbers */}
      <div className="flex items-center space-x-1">
        {pageNumbers.map((page, index) => (
          <React.Fragment key={index}>
            {page === '...' ? (
              <span className="px-3 py-2 text-slate-500 text-sm">...</span>
            ) : (
              <button
                onClick={() => handlePageClick(page as number)}
                className={`inline-flex items-center justify-center w-10 h-10 rounded-lg text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                  page === currentPage
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                }`}
                aria-label={`Page ${page}`}
                aria-current={page === currentPage ? 'page' : undefined}
              >
                {page}
              </button>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`inline-flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
          currentPage === totalPages
            ? 'text-slate-400 cursor-not-allowed'
            : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
        }`}
        aria-label="Next page"
      >
        Next
        <ChevronRightIcon className="w-4 h-4 ml-1" />
      </button>
    </nav>
  );
};

export default Pagination;
