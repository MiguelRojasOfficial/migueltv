'use client';

import React, { useState, useEffect } from 'react';
import ProgramSection from './ProgramSection';
import { CAROUSEL_PROGRAMS, CATEGORIES, Program } from './data';
import VideoModal from './VideoModal';

const PROGRAM_TO_CHANNEL: { [key: string]: string } = {
  'forrest-gump': 'fav-1',
  'inception': 'fav-2', 
  'interstellar': 'fav-3',
  'the-dark-knight': 'fav-4',
  'the-matrix': 'fav-5',
  'inception-main': 'dest-1',
  'interstellar-main': 'dest-2',
  'the-dark-knight-main': 'dest-3',
  'the-matrix-main': 'dest-4',
};

const getMovieImageUrl = (imagePath: string, size: string = 'w1280'): string => {
  if (!imagePath) return 'https://via.placeholder.com/500x750/333/fff?text=No+Image';
  
  if (imagePath.startsWith('http')) {
    return imagePath;
  }
  
  const cleanPath = imagePath.startsWith('/') ? imagePath.substring(1) : imagePath;
  return `https://image.tmdb.org/t/p/${size}/${cleanPath}`;
};

export default function OnDemandPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [userFavorites, setUserFavorites] = useState<string[]>([]);
  const [userWatchlist, setUserWatchlist] = useState<string[]>([]);
  const [updateTrigger, setUpdateTrigger] = useState(0);
  const totalSlides = CAROUSEL_PROGRAMS.length;
  const program: Program = CAROUSEL_PROGRAMS[currentSlide];

  useEffect(() => {
    const loadData = () => {
      const storedFavorites = localStorage.getItem('userFavorites');
      const storedWatchlist = localStorage.getItem('userWatchlist');
      
      if (storedFavorites) setUserFavorites(JSON.parse(storedFavorites));
      if (storedWatchlist) setUserWatchlist(JSON.parse(storedWatchlist));
    };

    loadData();

    const handleStorageChange = () => {
      loadData();
    };

    window.addEventListener('storage', handleStorageChange);
    
    const interval = setInterval(loadData, 500);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, [updateTrigger]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(timer);
  }, [totalSlides]);

  const handleWatchFromStart = (program: Program) => {
    setSelectedProgram(program);
    setShowVideoModal(true);
  };

  const handleWatchLive = (program: Program) => {
    const channelId = PROGRAM_TO_CHANNEL[program.slug] || 'fav-1';
    window.location.href = `/?channel=${channelId}&autoplay=true`
  };

  const handleAddToFavorites = (programSlug: string) => {
    const updatedFavorites = userFavorites.includes(programSlug)
      ? userFavorites.filter(slug => slug !== programSlug)
      : [...userFavorites, programSlug];
    
    setUserFavorites(updatedFavorites);
    localStorage.setItem('userFavorites', JSON.stringify(updatedFavorites));
    setUpdateTrigger(prev => prev + 1);
    
    if (!userFavorites.includes(programSlug)) {
      alert('✅ Agregado a Favoritos');
    } else {
      alert('❌ Eliminado de Favoritos');
    }
  };

  const handleAddToWatchlist = (programSlug: string) => {
    const updatedWatchlist = userWatchlist.includes(programSlug)
      ? userWatchlist.filter(slug => slug !== programSlug)
      : [...userWatchlist, programSlug];
    
    setUserWatchlist(updatedWatchlist);
    localStorage.setItem('userWatchlist', JSON.stringify(updatedWatchlist));
    setUpdateTrigger(prev => prev + 1);

    if (!userWatchlist.includes(programSlug)) {
      alert('📝 Agregado a Mi Lista');
    } else {
      alert('❌ Eliminado de Mi Lista');
    }
  };

  const isFavorite = (programSlug: string) => userFavorites.includes(programSlug);
  const isInWatchlist = (programSlug: string) => userWatchlist.includes(programSlug);

  const backgroundImageUrl = getMovieImageUrl(program.imagePath, 'w1280');

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      
      <div
        className="relative flex flex-col md:flex-row rounded-lg overflow-hidden shadow-xl bg-zinc-800 p-6 mb-6 transition-all duration-500 min-h-[65vh]"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(15,24,42,0.9), rgba(15,24,42,0.7)), url(${backgroundImageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="flex-1 pr-0 mt-8 md:pr-8 mb-6 md:mb-0 z-10 flex flex-col justify-center">
          <h2 className="text-5xl font-extrabold mb-4">{program.title}</h2>
          <div className="flex items-center space-x-3 text-gray-300 mb-4">
            <span className="text-sm font-medium bg-zinc-700 px-3 py-1 rounded-full">
              {program.category}
            </span>
            <span className="text-sm">{program.duration}</span>
            <span className="text-sm">{program.year}</span>
            <span className="text-sm">+13</span>
          </div>

          <p className="text-base text-gray-300 mb-6 max-w-xl leading-relaxed">
            {program.synopsis}
          </p>

          <div className="flex flex-wrap gap-3">
            <button 
              onClick={() => handleWatchFromStart(program)}
              className="bg-red-600 hover:bg-red-700 transition-colors text-white font-semibold py-2 px-5 rounded-full flex items-center"
            >
              ▶ Ver desde el comienzo
            </button>
            
            <button 
              onClick={() => handleWatchLive(program)}
              className="bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold py-2 px-5 rounded-full flex items-center"
            >
              📺 Ver Canal en Vivo
            </button>
            
            
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-3 mb-10">
        {CAROUSEL_PROGRAMS.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index ? 'bg-red-600 scale-125' : 'bg-gray-500'
            }`}
          />
        ))}
      </div>

      {CATEGORIES.map((category, index) => (
        <ProgramSection 
          key={index} 
          title={category.title} 
          programs={category.programs}
          onWatchFromStart={handleWatchFromStart}
          onWatchLive={handleWatchLive}
          onAddToFavorites={handleAddToFavorites}
          onAddToWatchlist={handleAddToWatchlist}
          isFavorite={isFavorite}
          isInWatchlist={isInWatchlist}
        />
      ))}

      {showVideoModal && selectedProgram && (
        <VideoModal
          key={selectedProgram.slug} 
          program={selectedProgram}
          onClose={() => { setShowVideoModal(false); setSelectedProgram(null);}}
        />
      )}
    </div>
  );
}