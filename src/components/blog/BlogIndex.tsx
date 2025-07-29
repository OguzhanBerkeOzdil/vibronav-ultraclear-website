/**
 * Component: BlogIndex
 * Purpose: Blog post content and metadata
 * Author: Oğuzhan Berke Özdil
 * Last edit: 27 January 2025
 */

// src/components/blog/BlogIndex.tsx
import React, { useState, useMemo } from 'react';
import PageTitle from '../../components/PageTitle';
import PostCard from './PostCard';
import SearchBox from './Sidebar/SearchBox';
import RecentPosts from './Sidebar/RecentPosts';
import CategoriesList from './Sidebar/CategoriesList';
import TagCloud from './Sidebar/TagCloud';
import Pagination from './Pagination';

// Import blog data
import { posts, categories as categoriesData, tags as tagsData } from '../../data/blog';

const POSTS_PER_PAGE = 6;

const BlogIndex: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedTag, setSelectedTag] = useState<string>('');
  const [currentPage, setCurrentPage] = useState(1);

  // Data is already properly typed from the utility
  const categories: Record<string, number> = categoriesData;
  const tags: Record<string, number> = tagsData;

  const breadcrumb = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
  ];

  // Filter posts based on search, category, and tag
  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchesSearch = searchQuery === '' || 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === '' || 
        post.categories.includes(selectedCategory);
      
      const matchesTag = selectedTag === '' || 
        post.tags.includes(selectedTag);
      
      return matchesSearch && matchesCategory && matchesTag;
    });
  }, [posts, searchQuery, selectedCategory, selectedTag]);

  // Paginate filtered posts
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  // Reset pagination when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, selectedTag]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('');
    setSelectedTag('');
    setCurrentPage(1);
  };

  return (
    <>
      <PageTitle
        title="Blog"
        breadcrumb={breadcrumb}
      />

      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3 order-2 lg:order-1">
              {/* Active Filters */}
              {(searchQuery || selectedCategory || selectedTag) && (
                <div className="mb-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-sm font-medium text-blue-900">Active filters:</span>
                    {searchQuery && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        Search: "{searchQuery}"
                      </span>
                    )}
                    {selectedCategory && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                        Category: {selectedCategory}
                      </span>
                    )}
                    {selectedTag && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                        Tag: {selectedTag}
                      </span>
                    )}
                  </div>
                  <button
                    onClick={clearFilters}
                    className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Clear all filters
                  </button>
                </div>
              )}

              {/* Results Info */}
              <div className="mb-6">
                <p className="text-slate-600">
                  Showing {currentPosts.length} of {filteredPosts.length} posts
                  {filteredPosts.length !== posts.length && ` (filtered from ${posts.length} total)`}
                </p>
              </div>

              {/* Posts Grid */}
              {currentPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  {currentPosts.map((post) => (
                    <PostCard key={post.slug} post={post} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="text-slate-400 mb-4">
                    <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-slate-900 mb-2">No posts found</h3>
                  <p className="text-slate-600 mb-4">
                    Try adjusting your search terms or clearing filters.
                  </p>
                  <button
                    onClick={clearFilters}
                    className="inline-flex items-center px-4 py-2 border border-slate-300 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Clear filters
                  </button>
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 order-1 lg:order-2">
              <div className="space-y-8">
                <SearchBox
                  value={searchQuery}
                  onChange={setSearchQuery}
                />

                <RecentPosts posts={posts.slice(0, 5)} />

                <CategoriesList
                  categories={categories}
                  selectedCategory={selectedCategory}
                  onCategorySelect={setSelectedCategory}
                />

                <TagCloud
                  tags={tags}
                  selectedTag={selectedTag}
                  onTagSelect={setSelectedTag}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogIndex;
