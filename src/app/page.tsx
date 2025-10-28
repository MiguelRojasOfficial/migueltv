'use client';

import { useState, useEffect } from 'react';
import VideoPlayer from '@/components/VideoPlayer';
import ChannelTimeline from '@/components/ChannelTimeline';
import CategorySidebar from '@/components/CategorySidebar';

export default function HomePage() {
  const [currentCategory, setCurrentCategory] = useState('all');
  const [currentChannelId, setCurrentChannelId] = useState('fav-1');
  const [currentVideoUrl, setCurrentVideoUrl] = useState<string>('https://www.w3schools.com/html/mov_bbb.mp4');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const channelParam = urlParams.get('channel');
    const autoplayParam = urlParams.get('autoplay');
    
    if (channelParam) {
      setCurrentChannelId(channelParam);
    }
    
    if (autoplayParam === 'true') {
      console.log('Autoplay activado para el canal:', channelParam);
    }
  }, []);

  const handleChannelChange = (channelId: string) => {
    setCurrentChannelId(channelId);
  };

  const handleCategoryChange = (category: string) => {
    setCurrentCategory(category);
  };

  const handleProgramClick = (videoUrl: string) => {
    setCurrentVideoUrl(videoUrl);
  };

  return (
    <main className="container mx-auto p-1 flex flex-col items-center">
      <VideoPlayer currentChannelId={currentChannelId} currentVideoUrl={currentVideoUrl} />
      
      <div className="w-full mt-8 flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-62 md:pr-4 md:h-[calc(100vh-16rem)] md:overflow-x-auto">
          <CategorySidebar
            onCategoryChange={handleCategoryChange}
            currentCategory={currentCategory}
          />
        </div>

        <div className="bg-zinc-900 rounded-lg flex-1 pl-4 h-[calc(100vh-16rem)] overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-zinc-800">
          <h2 className="text-2xl font-semibold mt-4 mb-4 text-center md:text-left">
            Guía de Canales 
          </h2>
          <ChannelTimeline
            onChannelChange={handleChannelChange}
            currentChannel={currentChannelId}
            category={currentCategory}
            onProgramClick={handleProgramClick}
          />
        </div>
      </div>
    </main>
  );
}