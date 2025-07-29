/**
 * Component: PublicationsToolbar
 * Purpose: Publications page components
 * Author: Oğuzhan Berke Özdil
 * Last edit: 27 January 2025
 */

// src/components/publications/PublicationsToolbar.tsx
import React from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon, Bars3Icon } from '@heroicons/react/24/outline';
import { GroupByOption } from '../../types/publications';
import clsx from 'clsx';

interface PublicationsToolbarProps {
  groupBy: GroupByOption;
  onGroupByChange: (groupBy: GroupByOption) => void;
  onToggleSidebar?: () => void;
  filtersOpen?: boolean;
}

const groupByOptions: { value: GroupByOption; label: string }[] = [
  { value: 'year', label: 'Year' },
  { value: 'author', label: 'Author' },
  { value: 'type', label: 'Type' },
  { value: 'keyword', label: 'Keyword' },
  { value: 'downloads', label: 'Downloads' },
];

const PublicationsToolbar: React.FC<PublicationsToolbarProps> = ({
  groupBy,
  onGroupByChange,
  onToggleSidebar,
  filtersOpen = false
}) => {
  const currentOption = groupByOptions.find(option => option.value === groupBy);

  return (
    <div className="flex items-center justify-between py-4 px-6 bg-white border-b border-gray-200">
      <div className="flex items-center space-x-4">
        {/* Group by dropdown */}
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium text-neutral-dark-700">Group by:</span>
          <Menu as="div" className="relative">
            <Menu.Button className="inline-flex items-center px-3 py-2 text-sm font-medium text-neutral-dark-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200">
              {currentOption?.label}
              <ChevronDownIcon className="w-4 h-4 ml-2" aria-hidden="true" />
            </Menu.Button>
            <Transition
              as={React.Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                <div className="py-1">
                  {groupByOptions.map((option) => (
                    <Menu.Item key={option.value}>
                      {({ active }) => (
                        <button
                          onClick={() => onGroupByChange(option.value)}
                          className={clsx(
                            'block w-full text-left px-4 py-2 text-sm transition-colors duration-150',
                            active 
                              ? 'bg-primary-50 text-primary-700' 
                              : 'text-neutral-dark-700 hover:bg-gray-50',
                            groupBy === option.value && 'font-medium bg-primary-50 text-primary-700'
                          )}
                        >
                          {option.label}
                        </button>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>

      {/* Filters sidebar toggle */}
      <div className="flex items-center space-x-2">
        <button
          onClick={onToggleSidebar}
          className={clsx(
            'inline-flex items-center px-3 py-2 text-sm font-medium border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200',
            filtersOpen
              ? 'text-primary-700 bg-primary-50 border-primary-300 hover:bg-primary-100'
              : 'text-neutral-dark-600 bg-white border-gray-300 hover:bg-gray-50'
          )}
          title={filtersOpen ? 'Hide filters' : 'Show filters'}
        >
          <Bars3Icon className="w-4 h-4 mr-2" aria-hidden="true" />
          Filters
          {filtersOpen && (
            <span className="ml-2 px-2 py-0.5 text-xs bg-primary-200 text-primary-800 rounded-full">
              Active
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default PublicationsToolbar;
