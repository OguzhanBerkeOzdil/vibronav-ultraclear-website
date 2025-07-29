/**
 * Component: PublicationList
 * Purpose: Publications page components
 * Author: Oğuzhan Berke Özdil
 * Last edit: 27 January 2025
 */

// src/components/publications/PublicationList.tsx
import React from 'react';
import { Publication, GroupByOption, PublicationGroup } from '../../types/publications';
import PublicationCard from './PublicationCard';

interface PublicationListProps {
  publications: Publication[];
  groupBy: GroupByOption;
}

const PublicationList: React.FC<PublicationListProps> = ({ publications, groupBy }) => {
  const groupPublications = (pubs: Publication[], groupByOption: GroupByOption): PublicationGroup[] => {
    const groups: { [key: string]: Publication[] } = {};

    pubs.forEach(pub => {
      let groupKey: string;

      switch (groupByOption) {
        case 'year':
          groupKey = pub.year;
          break;
        case 'author':
          // Group by first author
          groupKey = pub.authors[0] || 'Unknown';
          break;
        case 'type':
          groupKey = pub.type;
          break;
        case 'keyword':
          // Group by first keyword, or 'No Keywords' if none
          groupKey = pub.keywords[0] || 'no-keywords';
          break;
        case 'downloads':
          // Future-proof: group by download count (placeholder)
          groupKey = 'all';
          break;
        default:
          groupKey = 'all';
      }

      if (!groups[groupKey]) {
        groups[groupKey] = [];
      }
      groups[groupKey].push(pub);
    });

    // Convert to array and sort
    const groupArray = Object.entries(groups).map(([key, pubs]) => ({
      key,
      label: groups[key][0] ? getGroupLabel(key, groupByOption) : key,
      publications: pubs.sort((a, b) => {
        // Secondary sort: by year descending, then by title
        const yearDiff = parseInt(b.year) - parseInt(a.year);
        return yearDiff !== 0 ? yearDiff : a.title.localeCompare(b.title);
      })
    }));

    // Sort groups
    return groupArray.sort((a, b) => {
      if (groupByOption === 'year') {
        return parseInt(b.key) - parseInt(a.key); // Newest first
      }
      return a.label.localeCompare(b.label); // Alphabetical
    });
  };

  const getGroupLabel = (key: string, groupByOption: GroupByOption): string => {
    switch (groupByOption) {
      case 'year':
        return key;
      case 'author':
        return key;
      case 'type':
        return key.charAt(0).toUpperCase() + key.slice(1);
      case 'keyword':
        return key === 'no-keywords' ? 'No Keywords' : key;
      case 'downloads':
        return 'All Publications';
      default:
        return key;
    }
  };

  const groupedPublications = groupPublications(publications, groupBy);

  if (publications.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-neutral-dark-500 text-lg">No publications found.</p>
        <p className="text-neutral-dark-400 text-sm mt-2">
          Run <code className="bg-gray-100 px-2 py-1 rounded">node scripts/parse-bib.mjs</code> to parse your BibTeX file.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {groupedPublications.map((group) => (
        <div key={group.key} className="space-y-4">
          {/* Group Header with fixed z-index */}
          <div className="sticky top-24 lg:top-28 z-[5] bg-gray-100 px-6 py-3 border-b border-gray-200 scroll-mt-24">
            <h2 className="text-xl font-bold text-black">
              {group.label} ({group.publications.length})
            </h2>
          </div>

          {/* Publications in Group */}
          <div className="space-y-4 px-6">
            {group.publications.map((publication) => (
              <PublicationCard key={publication.id} publication={publication} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PublicationList;
