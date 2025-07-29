/**
 * Component: PostCard
 * Purpose: Blog post content and metadata
 * Author: Oğuzhan Berke Özdil
 * Last edit: 27 January 2025
 */

// src/components/blog/PostCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarIcon, UserIcon, TagIcon } from '@heroicons/react/24/outline';

interface Post {
  slug: string;
  title: string;
  date: string;
  author: string;
  categories: string[];
  tags: string[];
  cover: string;
  video?: string | null;
  excerpt: string;
}

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <article className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow duration-300 group">
      {/* Cover Image */}
      <div className="aspect-[16/10] overflow-hidden">
        <Link to={`/blog/${post.slug}`}>
          <img
            src={post.cover}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </Link>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Meta Row */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-3">
          <div className="flex items-center">
            <CalendarIcon className="w-4 h-4 mr-1" />
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </div>
          <div className="flex items-center">
            <UserIcon className="w-4 h-4 mr-1" />
            <span>{post.author}</span>
          </div>
          {post.categories.length > 0 && (
            <div className="flex items-center">
              <TagIcon className="w-4 h-4 mr-1" />
              <span>{post.categories[0]}</span>
            </div>
          )}
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
          <Link to={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </h2>

        {/* Excerpt */}
        <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Categories Tags */}
        {post.categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.categories.slice(0, 2).map((category, index) => (
              <span
                key={index}
                className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-md"
              >
                {category}
              </span>
            ))}
            {post.categories.length > 2 && (
              <span className="inline-block px-2 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-md">
                +{post.categories.length - 2} more
              </span>
            )}
          </div>
        )}

        {/* Read More Button */}
        <Link
          to={`/blog/${post.slug}`}
          className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded-md"
        >
          Learn more
          <svg
            className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </article>
  );
};

export default PostCard;
