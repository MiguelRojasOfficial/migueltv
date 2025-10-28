'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Program } from './data';

interface VideoModalProps {
  program: Program;
  onClose: () => void;
}

const VIDEO_SOURCES: { [key: string]: string } = {
  'forrest-gump': 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
  'pulp-fiction': 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
  'the-shawshank-redemption': 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
  'the-dark-knight': 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
};

const VideoModal: React.FC<VideoModalProps> = ({ program, onClose }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const handleBackdropClick = useCallback((e: React.MouseEvent) => {
    if (modalRef.current && e.target === modalRef.current) {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    if (videoRef.current) {
      const videoUrl = VIDEO_SOURCES[program.slug] || VIDEO_SOURCES[program.id] || 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
      console.log('Cargando video:', videoUrl);
      
      const video = videoRef.current;
      
      const handleLoadedData = () => {
        console.log('Video cargado, intentando reproducir...');
        setIsVideoLoaded(true);
        video.play().catch(error => {
          console.log('Auto-play prevented:', error);
          video.controls = true;
        });
      };

      const handleError = (e: Event) => {
        console.error('Error loading video:', e);
        video.src = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
        video.load();
      };

      const handleCanPlay = () => {
        console.log('Video puede reproducirse');
      };

      if (video.src !== videoUrl) {
        video.src = videoUrl;
        video.load();
      }

      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('error', handleError);
      video.addEventListener('canplay', handleCanPlay);

      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };

      document.addEventListener('keydown', handleEscape);
      
      return () => {
        document.removeEventListener('keydown', handleEscape);
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('error', handleError);
        video.removeEventListener('canplay', handleCanPlay);
      };
    }
  }, [program, onClose]);

  return (
    <div 
      ref={modalRef}
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-zinc-900 rounded-lg w-full max-w-6xl max-h-[90vh] overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b border-zinc-700">
          <div>
            <h2 className="text-xl font-bold text-white">{program.title}</h2>
            <p className="text-gray-400 text-sm">
              {program.category} • {program.duration} • {program.year}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl font-bold"
          >
            ✕
          </button>
        </div>

        <div className="relative">
          <video
            ref={videoRef}
            controls
            autoPlay
            muted
            playsInline
            preload="auto"
            className="w-full h-auto max-h-[70vh]"
            poster={`https://image.tmdb.org/t/p/w780/${program.imagePath}`}
          >
            Tu navegador no soporta el elemento de video.
          </video>
          
          {!isVideoLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-zinc-800">
              <div className="text-white text-lg">Cargando video...</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default VideoModal;