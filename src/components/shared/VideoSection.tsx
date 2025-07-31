/**
 * Component: VideoSection
 * Purpose: Responsive video gallery with secure YouTube embeds
 * Author: Oğuzhan Berke Özdil
 * Last edit: 31 July 2025
 */

import React, { useState, useEffect } from 'react';
import { PlayIcon, XMarkIcon } from '@heroicons/react/24/outline';

interface VideoItem {
  id: string;
  title: string;
  description: string;
  videoUrl: string; // Local video URL or YouTube embed URL
  isLocal?: boolean; // Flag to indicate if video is local file or YouTube embed
}

interface VideoSectionProps {
  title: string;
  subtitle?: string;
  videos: VideoItem[];
  className?: string;
}

const VideoSection: React.FC<VideoSectionProps> = ({
  title,
  subtitle,
  videos,
  className = ''
}) => {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [videoMetadata, setVideoMetadata] = useState<{[key: string]: {duration: string, thumbnail: string}}>({});

  // Generate thumbnail and get duration from video
  const loadVideoMetadata = (video: VideoItem) => {
    if (!video.isLocal || videoMetadata[video.id]) return;

    const videoElement = document.createElement('video');
    videoElement.src = video.videoUrl;
    videoElement.crossOrigin = 'anonymous';
    videoElement.preload = 'metadata';

    videoElement.addEventListener('loadedmetadata', () => {
      // Generate thumbnail from video frame (middle of video)
      videoElement.currentTime = videoElement.duration / 2;
    });

    videoElement.addEventListener('seeked', () => {
      // Create canvas to capture frame
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      if (ctx) {
        canvas.width = videoElement.videoWidth;
        canvas.height = videoElement.videoHeight;
        ctx.drawImage(videoElement, 0, 0);
        
        const thumbnailDataUrl = canvas.toDataURL('image/jpeg', 0.8);
        
        // Format duration
        const duration = videoElement.duration;
        const minutes = Math.floor(duration / 60);
        const seconds = Math.floor(duration % 60);
        const formattedDuration = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        
        setVideoMetadata(prev => ({
          ...prev,
          [video.id]: {
            duration: formattedDuration,
            thumbnail: thumbnailDataUrl
          }
        }));
      }
    });
  };

  useEffect(() => {
    videos.forEach(video => {
      if (video.isLocal) {
        loadVideoMetadata(video);
      }
    });
  }, [videos]);

  const openVideo = (video: VideoItem) => {
    setSelectedVideo(video);
    // Prevent background scroll when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeVideo = () => {
    setSelectedVideo(null);
    document.body.style.overflow = 'unset';
  };

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeVideo();
      }
    };

    if (selectedVideo) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [selectedVideo]);

  // Close modal when clicking outside
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeVideo();
    }
  };

  return (
    <section className={`py-16 bg-gray-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* Video Grid */}
        <div className={`grid gap-8 ${videos.length === 1 ? 'grid-cols-1 max-w-2xl mx-auto' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Video Thumbnail */}
              <div className="relative aspect-video bg-gray-900 group cursor-pointer">
                {video.isLocal && videoMetadata[video.id]?.thumbnail ? (
                  <img
                    src={videoMetadata[video.id].thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                    <div className="text-white text-sm">Loading preview...</div>
                  </div>
                )}
                
                {/* Play Button Overlay */}
                <div 
                  className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center group-hover:bg-opacity-50 transition-all duration-300"
                  onClick={() => openVideo(video)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      openVideo(video);
                    }
                  }}
                  aria-label={`Play video: ${video.title}`}
                >
                  <div className="bg-blue-600 rounded-full p-4 group-hover:bg-blue-700 group-hover:scale-110 transition-all duration-200">
                    <PlayIcon className="h-8 w-8 text-white ml-1" />
                  </div>
                </div>

                {/* Duration Badge */}
                {video.isLocal && videoMetadata[video.id]?.duration && (
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                    {videoMetadata[video.id].duration}
                  </div>
                )}
              </div>

              {/* Video Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                  {video.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black bg-opacity-90"
            onClick={handleBackdropClick}
          >
            {/* Close Button */}
            <button
              onClick={closeVideo}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 z-60 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 text-white transition-all duration-200"
              aria-label="Close video"
            >
              <XMarkIcon className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>

            {/* Video Container */}
            <div className="w-full max-w-5xl aspect-video bg-black rounded-lg overflow-hidden mx-2 sm:mx-4">
              {selectedVideo.isLocal ? (
                <video
                  src={selectedVideo.videoUrl}
                  title={selectedVideo.title}
                  className="w-full h-full"
                  controls
                  autoPlay
                  playsInline
                  preload="metadata"
                  controlsList="nodownload"
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <iframe
                  src={selectedVideo.videoUrl}
                  title={selectedVideo.title}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              )}
            </div>

            {/* Video Title */}
            <div className="absolute bottom-2 left-2 right-2 sm:bottom-4 sm:left-4 sm:right-4 text-center">
              <h3 className="text-white text-sm sm:text-lg font-semibold px-2 sm:px-4">
                {selectedVideo.title}
              </h3>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoSection;
