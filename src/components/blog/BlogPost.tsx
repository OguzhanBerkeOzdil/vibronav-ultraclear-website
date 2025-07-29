/**
 * Component: BlogPost
 * Purpose: Blog post detail page component
 * Author: Oğuzhan Berke Özdil
 * Last edit: 27 January 2025
 */

// src/components/blog/BlogPost.tsx
import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CalendarIcon, UserIcon, TagIcon, ShareIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import PageTitle from '../../components/PageTitle';
import ReactMarkdown from 'react-markdown';

// Import blog data
import { posts as blogPosts } from '../../data/blog';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const posts = blogPosts;

  const post = useMemo(() => {
    return posts.find(p => p.slug === slug);
  }, [posts, slug]);

  const { previousPost, nextPost } = useMemo(() => {
    if (!post) return { previousPost: null, nextPost: null };
    
    const currentIndex = posts.findIndex(p => p.slug === slug);
    return {
      previousPost: currentIndex > 0 ? posts[currentIndex - 1] : null,
      nextPost: currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null,
    };
  }, [posts, slug, post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Post Not Found</h1>
          <p className="text-slate-600 mb-6">The blog post you're looking for doesn't exist.</p>
          <Link
            to="/blog"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            <ChevronLeftIcon className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const breadcrumb = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: post.title, href: `/blog/${post.slug}` },
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = `Check out this article: ${post.title}`;

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    email: `mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(shareText + ' ' + shareUrl)}`,
  };

  return (
    <>
      <PageTitle
        title={post.title}
        breadcrumb={breadcrumb}
      />

      <div className="bg-white">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Post Meta */}
          <div className="mb-8">
            {/* Meta Row with equal spacing */}
            <div className="flex items-center justify-between gap-4 text-sm text-slate-600 mb-6">
              <div className="flex items-center gap-2">
                <CalendarIcon className="w-4 h-4" />
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </div>
              <div className="flex items-center gap-2">
                <UserIcon className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              {post.categories.length > 0 && (
                <div className="flex items-center gap-2">
                  <TagIcon className="w-4 h-4" />
                  <span>{post.categories.join(', ')}</span>
                </div>
              )}
            </div>

            {/* Categories as solid pill badges */}
            {post.categories.length > 0 && (
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {post.categories.map((category, index) => (
                    <span
                      key={index}
                      className="inline-block px-3 py-1 bg-blue-600/10 text-blue-600 text-sm font-medium rounded-full"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Tags as outline pills */}
            {post.tags.length > 0 && (
              <div>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block px-3 py-1 border border-slate-300 text-slate-700 text-sm font-medium rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Cover Image */}
          {post.cover && (
            <div className="mb-8">
              <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                <img
                  src={post.cover}
                  alt={`Cover image for ${post.title}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}

          {/* Video Embed (if exists) */}
          {post.video && (
            <div className="mb-8">
              <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src={post.video}
                  title={`Video for ${post.title}`}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          )}

          {/* Post Content */}
          <div className="prose prose-lg prose-slate max-w-none mx-auto">
            <div className="prose-headings:font-bold prose-headings:text-slate-900 prose-headings:mb-4 prose-p:text-slate-700 prose-p:leading-relaxed prose-p:mb-6 prose-a:text-blue-600 prose-a:underline hover:prose-a:text-blue-800 prose-strong:text-slate-900 prose-strong:font-semibold prose-em:text-slate-700 prose-em:italic prose-code:text-slate-800 prose-code:bg-slate-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-pre:bg-slate-800 prose-pre:text-slate-100 prose-pre:p-4 prose-pre:rounded-lg prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50 prose-blockquote:px-4 prose-blockquote:py-2 prose-blockquote:rounded-lg prose-ul:mb-6 prose-ol:mb-6 prose-li:mb-2">
              <ReactMarkdown
                components={{
                  p: ({ children }) => <p className="mb-6 text-slate-700 leading-relaxed text-lg">{children}</p>,
                  h1: ({ children }) => <h1 className="text-3xl font-bold text-slate-900 mb-6 mt-8">{children}</h1>,
                  h2: ({ children }) => <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">{children}</h2>,
                  h3: ({ children }) => <h3 className="text-xl font-bold text-slate-900 mb-4 mt-6">{children}</h3>,
                  a: ({ href, children }) => (
                    <a 
                      href={href} 
                      className="text-blue-600 underline hover:text-blue-800 transition-colors"
                      target={href?.startsWith('http') ? '_blank' : undefined}
                      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {children}
                    </a>
                  ),
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>
          </div>

          {/* Share Buttons */}
          <div className="mt-12 pt-6 border-t border-slate-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-900 flex items-center">
                <ShareIcon className="w-5 h-5 mr-2" />
                Share this article
              </h3>
              <div className="flex space-x-3">
                <a
                  href={shareLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-200"
                  aria-label="Share on Twitter"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a
                  href={shareLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-700 text-white hover:bg-blue-800 transition-colors duration-200"
                  aria-label="Share on LinkedIn"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href={shareLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200"
                  aria-label="Share on Facebook"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href={shareLinks.email}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-600 text-white hover:bg-slate-700 transition-colors duration-200"
                  aria-label="Share via Email"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Previous/Next Navigation */}
          {(previousPost || nextPost) && (
            <div className="mt-16 pt-8 border-t border-slate-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {previousPost && (
                  <Link
                    to={`/blog/${previousPost.slug}`}
                    className="group flex items-center p-6 bg-slate-50 rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all duration-200"
                  >
                    <div className="flex-shrink-0 mr-4">
                      <ChevronLeftIcon className="w-6 h-6 text-slate-400 group-hover:text-slate-600" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-slate-500 mb-1">Previous Post</p>
                      <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                        {previousPost.title}
                      </h3>
                    </div>
                  </Link>
                )}

                {nextPost && (
                  <Link
                    to={`/blog/${nextPost.slug}`}
                    className="group flex items-center p-6 bg-slate-50 rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all duration-200 md:text-right"
                  >
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-slate-500 mb-1">Next Post</p>
                      <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                        {nextPost.title}
                      </h3>
                    </div>
                    <div className="flex-shrink-0 ml-4">
                      <ChevronRightIcon className="w-6 h-6 text-slate-400 group-hover:text-slate-600" />
                    </div>
                  </Link>
                )}
              </div>
            </div>
          )}
        </article>
      </div>
    </>
  );
};

export default BlogPost;
