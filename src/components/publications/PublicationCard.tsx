/**
 * Component: PublicationCard
 * Purpose: Individual publication display component
 * Author: Oğuzhan Berke Özdil
 * Last edit: 27 January 2025
 */

// src/components/publications/PublicationCard.tsx
import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { Publication } from '../../types/publications';

interface PublicationCardProps {
  publication: Publication;
}

const PublicationCard: React.FC<PublicationCardProps> = ({ publication }) => {
  const [showBibtex, setShowBibtex] = useState(false);
  const [showAbstract, setShowAbstract] = useState(false);

  const formatAuthors = (authors: string[]) => {
    if (authors.length <= 3) {
      return authors.join(', ');
    }
    return `${authors.slice(0, 3).join(', ')} et al.`;
  };

  const formatPages = (pages: string | null) => {
    if (!pages) return null;
    return pages.replace('--', '–'); // En dash
  };

  return (
    <div className="bg-white p-6 border border-gray-200 rounded-lg hover:bg-neutral-light-50 transition-colors duration-200">
      {/* Title */}
      <h3 className="text-lg font-bold text-black mb-2 leading-tight">
        {publication.title}
      </h3>

      {/* Authors */}
      <p className="text-neutral-dark-700 mb-2">
        {formatAuthors(publication.authors)}
      </p>

      {/* Publication details */}
      <p className="text-neutral-dark-600 text-sm mb-3">
        <span className="font-medium">{publication.journal}</span>
        {publication.volume && (
          <span>, Vol. {publication.volume}</span>
        )}
        {publication.number && (
          <span>({publication.number})</span>
        )}
        {publication.pages && (
          <span>, pp. {formatPages(publication.pages)}</span>
        )}
        <span className="font-medium ml-2">({publication.year})</span>
      </p>

      {/* Action links */}
      <div className="flex flex-wrap items-center gap-3 text-sm">
        {/* DOI Link */}
        {publication.doi && (
          <>
            <a
              href={`https://doi.org/${publication.doi}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 transition-colors duration-200"
            >
              doi
            </a>
            <span className="text-gray-400">•</span>
          </>
        )}

        {/* External Link */}
        {publication.link && (
          <>
            <a
              href={publication.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 transition-colors duration-200"
            >
              link
            </a>
            <span className="text-gray-400">•</span>
          </>
        )}

        {/* BibTeX Toggle */}
        <button
          onClick={() => setShowBibtex(!showBibtex)}
          className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-1 rounded"
          aria-expanded={showBibtex}
          aria-controls={`bibtex-${publication.id}`}
        >
          bibtex
          {showBibtex ? (
            <ChevronUpIcon className="w-3 h-3 ml-1" aria-hidden="true" />
          ) : (
            <ChevronDownIcon className="w-3 h-3 ml-1" aria-hidden="true" />
          )}
        </button>

        {/* Abstract Toggle */}
        {publication.abstract && (
          <>
            <span className="text-gray-400">•</span>
            <button
              onClick={() => setShowAbstract(!showAbstract)}
              className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-1 rounded"
              aria-expanded={showAbstract}
              aria-controls={`abstract-${publication.id}`}
            >
              abstract
              {showAbstract ? (
                <ChevronUpIcon className="w-3 h-3 ml-1" aria-hidden="true" />
              ) : (
                <ChevronDownIcon className="w-3 h-3 ml-1" aria-hidden="true" />
              )}
            </button>
          </>
        )}
      </div>

      {/* BibTeX Content */}
      {showBibtex && (
        <div 
          id={`bibtex-${publication.id}`}
          className="mt-4 p-4 bg-gray-50 border border-gray-200 rounded-md"
        >
          <pre className="text-xs text-neutral-dark-700 whitespace-pre-wrap font-mono leading-relaxed overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 break-all sm:break-normal">
            {publication.bibtex}
          </pre>
        </div>
      )}

      {/* Abstract Content */}
      {showAbstract && publication.abstract && (
        <div 
          id={`abstract-${publication.id}`}
          className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-md"
        >
          <p className="text-sm text-neutral-dark-700 leading-relaxed">
            {publication.abstract}
          </p>
        </div>
      )}

      {/* Keywords */}
      {publication.keywords.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {publication.keywords.map((keyword, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full"
            >
              {keyword}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default PublicationCard;
