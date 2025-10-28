'use client';

import React, { useState, useEffect } from 'react';
import { HiSearch } from 'react-icons/hi';

const mockData = [
  { id: 1, title: 'Documental: Los secretos del espacio', category: 'Documental' },
  { id: 2, title: 'Película: El misterio de la ciudad perdida', category: 'Película' },
  { id: 3, title: 'Serie: Código 505', category: 'Serie' },
  { id: 4, title: 'Noticiero: Las noticias de hoy', category: 'Noticiero' },
  { id: 5, title: 'Película: En el corazón del bosque', category: 'Película' },
  { id: 6, title: 'Documental: La vida en los océanos', category: 'Documental' },
  { id: 7, title: 'Serie: El último reino', category: 'Serie' },
  { id: 8, title: 'Documental: Construcciones de la antigüedad', category: 'Documental' },
  { id: 9, title: 'Película: La sombra del fénix', category: 'Película' },
  { id: 10, title: 'Noticiero: Informe de la semana', category: 'Noticiero' },
];

interface Item {
  id: number;
  title: string;
  category: string;
}

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Item[]>([]);

  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      return;
    }

    const filtered = mockData.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
    );

    setResults(filtered);
  }, [query]);

  return (
    <div className="min-h-screen bg-zinc-900 text-white p-6">
      <div className="flex flex-col items-center">
        <div className="w-full max-w-2xl mb-8 relative">
          <input
            type="text"
            placeholder="Buscar por título o categoría..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full p-4 pl-12 rounded-full bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300 shadow-md"
          />
          <HiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zinc-400 text-2xl" />
        </div>
      </div>

      <div className="w-full max-w-2xl mx-auto">
        {results.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((item) => (
              <div
                key={item.id}
                className="bg-zinc-800 rounded-lg p-4 shadow-lg transition-transform transform hover:scale-105"
              >
                <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                <span className="bg-red-600 text-white text-xs font-medium px-2.5 py-0.5 rounded-full">{item.category}</span>
              </div>
            ))}
          </div>
        ) : (
          query.trim() !== '' && (
            <p className="text-center text-zinc-500">No se encontraron resultados para &quot;{query}&quot;.</p>
          )
        )}
      </div>
    </div>
  );
}