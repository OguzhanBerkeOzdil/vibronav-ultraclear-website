/**
 * Component: SearchBox
 * Purpose: React component for the VibroNav/UltraClear project
 * Author: Oğuzhan Berke Özdil
 * Last edit: 27 January 2025
 */

// src/components/blog/Sidebar/SearchBox.tsx
import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

interface SearchBoxProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ value, onChange }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <h3 className="text-lg font-semibold text-slate-900 mb-4">Search Posts</h3>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <MagnifyingGlassIcon className="h-5 w-5 text-slate-400" />
        </div>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search articles..."
          className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
        />
      </div>
    </div>
  );
};

export default SearchBox;
