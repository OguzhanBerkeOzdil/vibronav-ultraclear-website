/**
 * Component: TagCloud
 * Purpose: React component for the VibroNav/UltraClear project
 * Author: Oğuzhan Berke Özdil
 * Last edit: 27 January 2025
 */

// src/components/blog/Sidebar/TagCloud.tsx
import React from 'react';
import { HashtagIcon } from '@heroicons/react/24/outline';

interface TagCloudProps {
  tags: Record<string, number>;
  selectedTag: string;
  onTagSelect: (tag: string) => void;
}

const TagCloud: React.FC<TagCloudProps> = ({
  tags,
  selectedTag,
  onTagSelect,
}) => {
  // Sort tags by frequency (most used first) and then alphabetically
  const sortedTags = Object.entries(tags).sort(([a, countA], [b, countB]) => {
    if (countA !== countB) {
      return countB - countA; // Sort by count descending
    }
    return a.localeCompare(b); // Then alphabetically
  });

  // Calculate relative sizes based on usage frequency
  const maxCount = Math.max(...Object.values(tags));
  const getTagSize = (count: number) => {
    const ratio = count / maxCount;
    if (ratio >= 0.8) return 'text-base';
    if (ratio >= 0.6) return 'text-sm';
    if (ratio >= 0.4) return 'text-sm';
    return 'text-xs';
  };

  const getTagWeight = (count: number) => {
    const ratio = count / maxCount;
    if (ratio >= 0.8) return 'font-bold';
    if (ratio >= 0.6) return 'font-semibold';
    return 'font-medium';
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <div className="flex items-center mb-4">
        <HashtagIcon className="w-5 h-5 mr-2 text-slate-500" />
        <h3 className="text-lg font-semibold text-slate-900">Popular Tags</h3>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {sortedTags.map(([tag, count]) => (
          <button
            key={tag}
            onClick={() => onTagSelect(selectedTag === tag ? '' : tag)}
            className={`inline-flex items-center px-3 py-1 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${getTagSize(count)} ${getTagWeight(count)} ${
              selectedTag === tag
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:scale-105'
            }`}
            title={`${count} post${count > 1 ? 's' : ''}`}
          >
            {tag}
            <span className={`ml-1 text-xs ${
              selectedTag === tag ? 'text-blue-200' : 'text-slate-500'
            }`}>
              {count}
            </span>
          </button>
        ))}
      </div>

      {selectedTag && (
        <button
          onClick={() => onTagSelect('')}
          className="mt-3 text-xs text-blue-600 hover:text-blue-800 font-medium"
        >
          Clear tag filter
        </button>
      )}
    </div>
  );
};

export default TagCloud;
