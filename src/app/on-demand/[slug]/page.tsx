import React from 'react';
import { notFound } from 'next/navigation';
import { CATEGORIES, CAROUSEL_PROGRAMS, Program } from '../data';

type ProgramDetailsPageProps = {
  params: {
    slug: string;
  };
};

const getMovieImageUrl = (imageId: string, size: string = 'w500'): string => {
  if (!imageId) return 'https://via.placeholder.com/150';
  return `https://image.tmdb.org/t/p/${size}/${imageId}`;
};

export async function generateStaticParams() {
  const allPrograms = [...CAROUSEL_PROGRAMS, ...CATEGORIES.flatMap(cat => cat.programs)];
  
  return allPrograms.map(program => ({
    slug: program.slug,
  }));
}

const getProgramBySlug = (slug: string): Program | undefined => {
  for (const category of CATEGORIES) {
    const foundProgram = category.programs.find(program => program.slug === slug);
    if (foundProgram) {
      return foundProgram;
    }
  }
  const foundInCarousel = CAROUSEL_PROGRAMS.find(program => program.slug === slug);
  if (foundInCarousel) {
    return foundInCarousel;
  }
  
  return undefined;
};

const ProgramDetailsPage = ({ params }: ProgramDetailsPageProps) => {
  const program = getProgramBySlug(params.slug);

  if (!program) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <div 
        className="relative min-h-[75vh] w-full flex flex-col justify-end p-8 md:p-12"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(15,24,42,0.95), rgba(15,24,42,0.2)), url(${getMovieImageUrl(program.imagePath, 'w1280')})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="z-10 text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">{program.title}</h1>
          <div className="flex items-center space-x-3 text-gray-300 mb-4">
            <span className="text-sm font-medium bg-red-600 px-3 py-1 rounded-full">
              {program.category || 'Categoría Desconocida'}
            </span>
            <span className="text-sm">{program.duration || 'Duración Desconocida'}</span>
          </div>
          <p className="text-base text-gray-300 mb-6 max-w-xl leading-relaxed">
              {program.synopsis || 'Sinopsis no disponible.'}
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-6">
            <button className="bg-red-600 hover:bg-red-700 transition-colors text-white font-semibold py-3 px-6 rounded-full flex items-center gap-2">
              ▶ Ver desde el comienzo
            </button>
            <button className="bg-zinc-700 hover:bg-zinc-600 transition-colors text-white font-semibold py-3 px-6 rounded-full flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              Ver Canal en Vivo
            </button>
          </div>
        </div>
      </div>
      <div className="p-8">
        <div className="flex flex-wrap gap-4 items-center">
          <button className="bg-zinc-700 hover:bg-zinc-600 transition-colors text-white font-semibold py-3 px-6 rounded-full flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
            </svg>
            Mi Lista
          </button>
          <button className="bg-zinc-700 hover:bg-zinc-600 transition-colors text-white font-semibold py-3 px-6 rounded-full flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M5 2a1 1 0 011-1h8a1 1 0 011 1v1h2a2 2 0 012 2v10a2 2 0 01-2 2H3a2 2 0 01-2-2V5a2 2 0 012-2h2V2zm0 2H3v10h14V5a1 1 0 00-1-1h-2v1a1 1 0 01-1 1h-6a1 1 0 01-1-1V4z" />
            </svg>
            Agregar a Favoritos
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProgramDetailsPage;