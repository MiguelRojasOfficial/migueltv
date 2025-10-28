'use client'

import React, { useRef } from 'react';
import ProgramCard from './ProgramCard';
import { Program } from './data';

interface ProgramSectionProps {
  title: string;
  programs: Program[];
  onWatchFromStart: (program: Program) => void;
  onWatchLive: (program: Program) => void;
  onAddToFavorites: (programId: string) => void;
  onAddToWatchlist: (programId: string) => void;
  isFavorite: (programId: string) => boolean;
  isInWatchlist: (programId: string) => boolean;
}

const ProgramSection: React.FC<ProgramSectionProps> = ({ 
  title, 
  programs,
  onWatchFromStart,
  onWatchLive,
  onAddToFavorites,
  onAddToWatchlist,
  isFavorite,
  isInWatchlist
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 350;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="mb-8 bg-zinc-800 p-6 rounded-lg shadow-lg relative group">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      
      <button 
        onClick={() => scroll('left')} 
        className="hidden md:flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 z-20 text-white bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      <div 
        ref={scrollRef} 
        className="flex space-x-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-zinc-800 md:overflow-x-hidden md:scrollbar-none"
      >
        {programs.map((program, index) => (
          <ProgramCard 
            key={index} 
            program={program}
            onWatchFromStart={onWatchFromStart}
            onWatchLive={onWatchLive}
            onAddToFavorites={onAddToFavorites}
            onAddToWatchlist={onAddToWatchlist}
            isFavorite={isFavorite(program.id)}
            isInWatchlist={isInWatchlist(program.id)}
          />
        ))}
      </div>

      <button 
        onClick={() => scroll('right')} 
        className="hidden md:flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 z-20 text-white bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </section>
  );
};

export default ProgramSection;