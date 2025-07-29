/**
 * Component: RecentPosts
 * Purpose: React component for the VibroNav/UltraClear project
 * Author: Oğuzhan Berke Özdil
 * Last edit: 27 January 2025
 */

// src/components/blog/Sidebar/RecentPosts.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarIcon } from '@heroicons/react/24/outline';

interface Post {
  slug: string;
  title: string;
  date: string;
  cover: string;
}

interface RecentPostsProps {
  posts: Post[];
}

const RecentPosts: React.FC<RecentPostsProps> = ({ posts }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <h3 className="text-lg font-semibold text-slate-900 mb-4">Recent Posts</h3>
      <div className="space-y-4">
        {posts.map((post) => (
          <article key={post.slug} className="flex gap-3 group">
            {/* Thumbnail */}
            <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden">
              <Link to={`/blog/${post.slug}`}>
                <img
                  src={post.cover}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                />
              </Link>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-medium text-slate-900 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200 mb-1">
                <Link to={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h4>
              <div className="flex items-center text-xs text-slate-500">
                <CalendarIcon className="w-3 h-3 mr-1" />
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default RecentPosts;
