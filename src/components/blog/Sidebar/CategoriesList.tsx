/**
 * Component: CategoriesList
 * Purpose: React component for the VibroNav/UltraClear project
 * Author: Oğuzhan Berke Özdil
 * Last edit: 27 January 2025
 */

// src/components/blog/Sidebar/CategoriesList.tsx
import React from 'react';
import { FolderIcon } from '@heroicons/react/24/outline';

interface CategoriesListProps {
  categories: Record<string, number>;
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
}

const CategoriesList: React.FC<CategoriesListProps> = ({
  categories,
  selectedCategory,
  onCategorySelect,
}) => {
  const sortedCategories = Object.entries(categories).sort(([a], [b]) => a.localeCompare(b));

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <h3 className="text-lg font-semibold text-slate-900 mb-4">Categories</h3>
      <div className="space-y-2">
        {sortedCategories.map(([category, count]) => (
          <button
            key={category}
            onClick={() => onCategorySelect(selectedCategory === category ? '' : category)}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-left transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
              selectedCategory === category
                ? 'bg-blue-100 text-blue-900'
                : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            <div className="flex items-center">
              <FolderIcon className="w-4 h-4 mr-2 text-slate-400" />
              <span className="text-sm font-medium">{category}</span>
            </div>
            <span className={`text-xs px-2 py-1 rounded-full ${
              selectedCategory === category
                ? 'bg-blue-200 text-blue-800'
                : 'bg-slate-200 text-slate-600'
            }`}>
              {count}
            </span>
          </button>
        ))}
      </div>
      {selectedCategory && (
        <button
          onClick={() => onCategorySelect('')}
          className="mt-3 text-xs text-blue-600 hover:text-blue-800 font-medium"
        >
          Clear selection
        </button>
      )}
    </div>
  );
};

export default CategoriesList;
