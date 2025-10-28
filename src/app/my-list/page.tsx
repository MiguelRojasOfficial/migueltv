'use client';

import React, { useState, useEffect } from 'react';
import { CAROUSEL_PROGRAMS, CATEGORIES, Program } from '../on-demand/data';
import { useRouter } from 'next/navigation';

const getMovieImageUrl = (imageId: string, size: string = 'w300'): string => {
  if (!imageId) return 'https://via.placeholder.com/150';
  return `https://image.tmdb.org/t/p/${size}/${imageId}`;
};

export default function MyListPage() {
  const [watchlist, setWatchlist] = useState<string[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [updateTrigger, setUpdateTrigger] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const loadData = () => {
      const storedWatchlist = localStorage.getItem('userWatchlist');
      const storedFavorites = localStorage.getItem('userFavorites');
      
      if (storedWatchlist) setWatchlist(JSON.parse(storedWatchlist));
      if (storedFavorites) setFavorites(JSON.parse(storedFavorites));
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

  const allPrograms: Program[] = [
    ...CAROUSEL_PROGRAMS, 
    ...CATEGORIES.flatMap(cat => cat.programs)
  ];

  const watchlistPrograms = allPrograms.filter(program => 
    watchlist.includes(program.slug)
  );
  
  const favoritePrograms = allPrograms.filter(program => 
    favorites.includes(program.slug)
  );

  const handleWatchProgram = (program: Program) => {
    router.push(`/on-demand`);
  };

  const removeFromWatchlist = (programSlug: string) => {
    const updatedWatchlist = watchlist.filter(slug => slug !== programSlug);
    setWatchlist(updatedWatchlist);
    localStorage.setItem('userWatchlist', JSON.stringify(updatedWatchlist));
    setUpdateTrigger(prev => prev + 1);
  };

  const removeFromFavorites = (programSlug: string) => {
    const updatedFavorites = favorites.filter(slug => slug !== programSlug);
    setFavorites(updatedFavorites);
    localStorage.setItem('userFavorites', JSON.stringify(updatedFavorites));
    setUpdateTrigger(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-6">
      <h1 className="text-3xl font-bold mb-8">Mi Contenido</h1>
      <section className="mb-12">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold">📝 Mi Lista ({watchlistPrograms.length})</h2>
        </div>
        
        {watchlistPrograms.length > 0 ? (
          <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-zinc-800">
            {watchlistPrograms.map(program => (
              <div 
                key={program.slug} 
                className="flex-none w-48 bg-zinc-900 rounded-lg overflow-hidden shadow-lg hover:bg-zinc-700 transition-transform duration-300 hover:shadow-xl cursor-pointer group relative"
                onClick={() => handleWatchProgram(program)}
              >
                <img 
                  src={getMovieImageUrl(program.imagePath)}
                  alt={program.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-3">
                  <h3 className="font-semibold text-white text-sm mb-1 truncate">{program.title}</h3>
                  <p className="text-gray-400 text-xs">{program.category}</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-gray-500 text-xs">{program.year}</span>
                    <span className="text-gray-500 text-xs">{program.duration}</span>
                  </div>
                </div>
                
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFromWatchlist(program.slug);
                  }}
                  className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg mb-4">No tienes programas en tu lista.</p>
            <button 
              onClick={() => router.push('/on-demand')}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-full"
            >
              Explorar Contenido
            </button>
          </div>
        )}
      </section>

      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold">❤️ Favoritos ({favoritePrograms.length})</h2>
        </div>
        
        {favoritePrograms.length > 0 ? (
          <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-zinc-800">
            {favoritePrograms.map(program => (
              <div 
                key={program.slug} 
                className="flex-none w-48 bg-zinc-900 rounded-lg overflow-hidden shadow-lg hover:bg-zinc-700 transition-transform duration-300 hover:shadow-xl cursor-pointer group relative"
                onClick={() => handleWatchProgram(program)}
              >
                <img 
                  src={getMovieImageUrl(program.imagePath)}
                  alt={program.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-3">
                  <h3 className="font-semibold text-white text-sm mb-1 truncate">{program.title}</h3>
                  <p className="text-gray-400 text-xs">{program.category}</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-gray-500 text-xs">{program.year}</span>
                    <span className="text-gray-500 text-xs">{program.duration}</span>
                  </div>
                </div>
                
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFromFavorites(program.slug);
                  }}
                  className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No tienes programas favoritos.</p>
          </div>
        )}
      </section>
    </div>
  );
}