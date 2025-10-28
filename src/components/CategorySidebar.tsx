'use client';

import { 
  FaStar, FaFire, FaFilm, FaTv, FaClock, FaHeart, FaUserFriends, 
  FaTrophy, FaSearch, FaBaseballBall, FaLaughBeam, FaLeaf, 
  FaSmile, FaGamepad, FaChild, FaMusic, FaUsers, FaDizzy 
} from 'react-icons/fa';

const CATEGORIES = [
  { id: 'all', name: 'Todos', icon: FaUsers },
  { id: 'favoritos', name: 'Favoritos', icon: FaStar },
  { id: 'destacado', name: 'Destacado', icon: FaFire },
  { id: 'peliculas', name: 'Películas', icon: FaFilm },
  { id: 'series', name: 'Series', icon: FaTv },
  { id: 'retro', name: 'Retro', icon: FaClock },
  { id: 'novelas', name: 'Novelas', icon: FaHeart },
  { id: 'reality', name: 'Reality', icon: FaUserFriends },
  { id: 'competencia', name: 'Competencia', icon: FaTrophy },
  { id: 'curiosidad-investigacion', name: 'Curiosidad e Investigación', icon: FaSearch },
  { id: 'deportes', name: 'Deportes', icon: FaBaseballBall },
  { id: 'comedia', name: 'Comedia', icon: FaLaughBeam },
  { id: 'estilo-de-vida', name: 'Estilo de vida', icon: FaLeaf },
  { id: 'entretenimiento', name: 'Entretenimiento', icon: FaSmile },
  { id: 'anime', name: 'Anime', icon: FaDizzy },
  { id: 'gaming', name: 'Gaming', icon: FaGamepad },
  { id: 'teen', name: 'Teen', icon: FaUsers },
  { id: 'kids', name: 'Kids', icon: FaChild },
  { id: 'musica', name: 'Música', icon: FaMusic },
];

const CategorySidebar = ({ onCategoryChange, currentCategory }: { onCategoryChange: (category: string) => void, currentCategory: string }) => {
  return (
    <div className="flex flex-col gap-2 p-6 bg-zinc-800 rounded-lg md:h-full overflow-y-auto w-full">
      <h3 className="text-xl font-bold mb-4 text-center md:text-left">Categorías</h3>
      <div className="grid grid-cols-2 md:grid-cols-1 gap-3">
        {CATEGORIES.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`w-full text-left p-3 rounded-lg transition-colors duration-200 flex items-center ${
              currentCategory === category.id
                ? 'bg-red-500 text-white font-semibold'
                : 'bg-zinc-700 hover:bg-zinc-600'
            }`}
          >
            <category.icon className="mr-3 text-lg flex-shrink-0" />
            <span className="text-base md:text-base truncate">{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategorySidebar;