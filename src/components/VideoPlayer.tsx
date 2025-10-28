'use client';

import { useEffect, useRef } from 'react';

const VIDEO_SOURCES: { [key: string]: string } = {
  'fav-1': 'https://www.w3schools.com/html/mov_bbb.mp4',
  'fav-2': 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  'fav-3': 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
  'fav-4': 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
  'fav-5': 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
  'dest-1': 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
  'dest-2': 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
  'dest-3': 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
  'dest-4': 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
  'dest-5': 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAPenny.mp4',
};

const VideoPlayer = ({ currentChannelId, currentVideoUrl }: { 
  currentChannelId: string; 
  currentVideoUrl: string | null; 
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      const videoUrl = currentVideoUrl || VIDEO_SOURCES[currentChannelId] || '';

      if (videoUrl && videoRef.current.src !== videoUrl) {
        videoRef.current.src = videoUrl;
        videoRef.current.load();
        videoRef.current.play().catch(error => {
          console.error("Error al reproducir el video:", error);
        });
      }
    }
  }, [currentChannelId, currentVideoUrl]);

  return (
    <div className="w-full">
      <video
        ref={videoRef}
        controls
        className="w-full aspect-[3/1.1] rounded-lg shadow-xl"
        autoPlay
        muted
      />
    </div>
  );
};

export default VideoPlayer;