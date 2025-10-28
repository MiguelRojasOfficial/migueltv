'use client'

import React, { useState } from 'react';
import { Program } from './data';

const getMovieImageUrl = (imagePath: string, size: string = 'w500'): string => {
  if (!imagePath) return 'https://via.placeholder.com/150';
  
  if (imagePath.startsWith('http')) {
    return imagePath;
  }
  
  const cleanPath = imagePath.startsWith('/') ? imagePath.substring(1) : imagePath;
  return `https://image.tmdb.org/t/p/${size}/${cleanPath}`;
};

interface ProgramCardProps {
  program: Program;
  onWatchFromStart: (program: Program) => void;
  onWatchLive: (program: Program) => void;
  onAddToFavorites: (programSlug: string) => void;
  onAddToWatchlist: (programSlug: string) => void;
  isFavorite: boolean;
  isInWatchlist: boolean;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ 
  program, 
  onWatchFromStart,
  onWatchLive,
  onAddToFavorites,
  onAddToWatchlist,
  isFavorite,
  isInWatchlist
}) => {
  const [showActions, setShowActions] = useState(false);
  const [localIsFavorite, setLocalIsFavorite] = useState(isFavorite);
  const [localIsInWatchlist, setLocalIsInWatchlist] = useState(isInWatchlist);

  React.useEffect(() => {
    setLocalIsFavorite(isFavorite);
  }, [isFavorite]);

  React.useEffect(() => {
    setLocalIsInWatchlist(isInWatchlist);
  }, [isInWatchlist]);

  const handleAddToWatchlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToWatchlist(program.slug);
    setLocalIsInWatchlist(!localIsInWatchlist);
  };

  const handleAddToFavorites = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToFavorites(program.slug);
    setLocalIsFavorite(!localIsFavorite);
  };

  console.log(`ProgramCard ${program.slug}:`, {
    isFavorite: localIsFavorite,
    isInWatchlist: localIsInWatchlist
  });

  return (
    <div 
      className="flex-none w-48 bg-zinc-900 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl relative"
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >
      <div className="relative">
        <img
          src={getMovieImageUrl(program.imagePath)}
          alt={program.title}
          className="w-full h-64 object-cover"
        />
        
        {showActions && (
          <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-center space-y-2 p-2">
            <button
              onClick={() => onWatchFromStart(program)}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-3 rounded text-sm transition-colors"
            >
              ▶ Ver
            </button>
            
            <button
              onClick={() => onWatchLive(program)}
              className="w-full bg-zinc-700 hover:bg-zinc-600 text-white font-semibold py-2 px-3 rounded text-sm transition-colors"
            >
              📺 En Vivo
            </button>
            
            <div className="flex space-x-1 w-full">
              <button
                onClick={handleAddToWatchlist}
                className={`flex-1 text-xs font-semibold py-2 px-2 rounded transition-all duration-200 ${
                  localIsInWatchlist 
                    ? 'bg-green-600 hover:bg-green-700 text-white border border-green-400 shadow-lg' 
                    : 'bg-zinc-600 hover:bg-zinc-500 text-white'
                }`}
              >
                {localIsInWatchlist ? '✓' : '+'}
              </button>
              
              <button
                onClick={handleAddToFavorites}
                className={`flex-1 text-xs font-semibold py-2 px-2 rounded transition-all duration-200 ${
                  localIsFavorite 
                    ? 'bg-yellow-600 hover:bg-yellow-700 text-white border border-yellow-400 shadow-lg' 
                    : 'bg-zinc-600 hover:bg-zinc-500 text-white'
                }`}
              >
                {localIsFavorite ? '❤️' : '🤍'}
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="p-3">
        <h3 className="font-semibold text-white text-sm mb-1 truncate">{program.title}</h3>
        <p className="text-gray-400 text-xs">{program.category}</p>
        <div className="flex justify-between items-center mt-2">
          <span className="text-gray-500 text-xs">{program.year}</span>
          <span className="text-gray-500 text-xs">{program.duration}</span>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;