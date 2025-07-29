/**
 * Component: publications
 * Purpose: TypeScript type definitions
 * Author: Oğuzhan Berke Özdil
 * Last edit: 27 January 2025
 */

// src/types/publications.ts

export interface Publication {
  id: string;
  type: string;
  title: string;
  authors: string[];
  year: string;
  journal: string;
  doi?: string | null;
  abstract?: string | null;
  keywords: string[];
  link?: string | null;
  volume?: string | null;
  number?: string | null;
  pages?: string | null;
  publisher?: string | null;
  bibtex: string;
}

export type GroupByOption = 'year' | 'author' | 'type' | 'keyword' | 'downloads';

export interface PublicationGroup {
  key: string;
  label: string;
  publications: Publication[];
}
