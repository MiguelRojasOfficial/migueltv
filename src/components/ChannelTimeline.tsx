'use client';

import React from 'react';
import useLocalStorage from '@/hooks/useLocalStorage';
import Image from 'next/image';

const DUMMY_CHANNELS = [
  // Favoritos
  { id: 'fav-1', name: 'Noticias 24/7', category: 'favoritos', logoUrl: 'https://via.placeholder.com/40x40/FF0000/FFFFFF?text=N' },
  { id: 'fav-2', name: 'Deportes TV', category: 'favoritos', logoUrl: 'https://via.placeholder.com/40x40/00FF00/FFFFFF?text=D' },
  { id: 'fav-3', name: 'Cinema Max', category: 'favoritos', logoUrl: 'https://via.placeholder.com/40x40/0000FF/FFFFFF?text=C' },
  { id: 'fav-4', name: 'El Club de la Risa', category: 'favoritos', logoUrl: 'https://via.placeholder.com/40x40/FFFF00/000000?text=R' },
  { id: 'fav-5', name: 'Series Clásicas', category: 'favoritos', logoUrl: 'https://via.placeholder.com/40x40/FF00FF/FFFFFF?text=S' },
  
  // Destacado
  { id: 'dest-1', name: 'Lo Más Visto', category: 'destacado', logoUrl: 'https://via.placeholder.com/40x40/FF6B6B/FFFFFF?text=L' },
  { id: 'dest-2', name: 'Series Premium', category: 'destacado', logoUrl: 'https://via.placeholder.com/40x40/4ECDC4/FFFFFF?text=S' },
  { id: 'dest-3', name: 'Acción y Aventura', category: 'destacado', logoUrl: 'https://via.placeholder.com/40x40/45B7D1/FFFFFF?text=A' },
  { id: 'dest-4', name: 'Documentales 360', category: 'destacado', logoUrl: 'https://via.placeholder.com/40x40/96CEB4/FFFFFF?text=D' },
  { id: 'dest-5', name: 'Música Pop', category: 'destacado', logoUrl: 'https://via.placeholder.com/40x40/FECA57/FFFFFF?text=M' },

  // Películas
  { id: 'peli-1', name: 'Cine Clásico', category: 'peliculas', logoUrl: 'https://via.placeholder.com/40x40/9980FA/FFFFFF?text=CC' },
  { id: 'peli-2', name: 'Terror Nocturno', category: 'peliculas', logoUrl: 'https://via.placeholder.com/40x40/333333/FFFFFF?text=T' },
  { id: 'peli-3', name: 'Comedias Románticas', category: 'peliculas', logoUrl: 'https://via.placeholder.com/40x40/F78FB3/FFFFFF?text=CR' },
  { id: 'peli-4', name: 'Indie Films', category: 'peliculas', logoUrl: 'https://via.placeholder.com/40x40/FDA7DF/FFFFFF?text=I' },
  { id: 'peli-5', name: 'Ciencia Ficción', category: 'peliculas', logoUrl: 'https://via.placeholder.com/40x40/ED4C67/FFFFFF?text=CF' },

  // Series
  { id: 'ser-1', name: 'Dramas Épicos', category: 'series', logoUrl: 'https://via.placeholder.com/40x40/FFA500/FFFFFF?text=DE' },
  { id: 'ser-2', name: 'Series de Suspenso', category: 'series', logoUrl: 'https://via.placeholder.com/40x40/800080/FFFFFF?text=SS' },
  { id: 'ser-3', name: 'Series de Crimen', category: 'series', logoUrl: 'https://via.placeholder.com/40x40/008000/FFFFFF?text=SC' },
  { id: 'ser-4', name: 'Series de Fantasía', category: 'series', logoUrl: 'https://via.placeholder.com/40x40/FF69B4/FFFFFF?text=SF' },
  { id: 'ser-5', name: 'Series Animadas', category: 'series', logoUrl: 'https://via.placeholder.com/40x40/00FFFF/000000?text=SA' },
  
  // Retro
  { id: 'ret-1', name: 'Décadas de Oro', category: 'retro', logoUrl: 'https://via.placeholder.com/40x40/FFD700/000000?text=DO' },
  { id: 'ret-2', name: 'Retro Gaming', category: 'retro', logoUrl: 'https://via.placeholder.com/40x40/8B4513/FFFFFF?text=RG' },
  { id: 'ret-3', name: 'TV de los 80s', category: 'retro', logoUrl: 'https://via.placeholder.com/40x40/FF4500/FFFFFF?text=80' },
  { id: 'ret-4', name: 'Dibujos Animados Clásicos', category: 'retro', logoUrl: 'https://via.placeholder.com/40x40/32CD32/FFFFFF?text=DC' },
  { id: 'ret-5', name: 'Música Retro', category: 'retro', logoUrl: 'https://via.placeholder.com/40x40/9370DB/FFFFFF?text=MR' },

  // Novelas
  { id: 'nov-1', name: 'Pasión por las Novelas', category: 'novelas', logoUrl: 'https://via.placeholder.com/40x40/DC143C/FFFFFF?text=PN' },
  { id: 'nov-2', name: 'Novelas de Época', category: 'novelas', logoUrl: 'https://via.placeholder.com/40x40/FFB6C1/000000?text=NE' },
  { id: 'nov-3', name: 'Dramas Turcos', category: 'novelas', logoUrl: 'https://via.placeholder.com/40x40/FF6347/FFFFFF?text=DT' },
  { id: 'nov-4', name: 'Telenovelas Clásicas', category: 'novelas', logoUrl: 'https://via.placeholder.com/40x40/BA55D3/FFFFFF?text=TC' },
  { id: 'nov-5', name: 'Corazón de Telenovela', category: 'novelas', logoUrl: 'https://via.placeholder.com/40x40/FF69B4/FFFFFF?text=CT' },

  // Reality
  { id: 'real-1', name: 'Reality Show TV', category: 'reality', logoUrl: 'https://via.placeholder.com/40x40/20B2AA/FFFFFF?text=RS' },
  { id: 'real-2', name: 'Vida Real', category: 'reality', logoUrl: 'https://via.placeholder.com/40x40/87CEEB/000000?text=VR' },
  { id: 'real-3', name: 'Competencia Culinaria', category: 'reality', logoUrl: 'https://via.placeholder.com/40x40/FF8C00/FFFFFF?text=CC' },
  { id: 'real-4', name: 'Remodelación Extrema', category: 'reality', logoUrl: 'https://via.placeholder.com/40x40/6A5ACD/FFFFFF?text=RE' },
  { id: 'real-5', name: 'Supervivencia', category: 'reality', logoUrl: 'https://via.placeholder.com/40x40/228B22/FFFFFF?text=S' },

  // Competencia
  { id: 'comp-1', name: 'Competencia Extrema', category: 'competencia', logoUrl: 'https://via.placeholder.com/40x40/FF4500/FFFFFF?text=CE' },
  { id: 'comp-2', name: 'Reto Físico', category: 'competencia', logoUrl: 'https://via.placeholder.com/40x40/32CD32/FFFFFF?text=RF' },
  { id: 'comp-3', name: 'Batalla de Chefs', category: 'competencia', logoUrl: 'https://via.placeholder.com/40x40/8B0000/FFFFFF?text=BC' },
  { id: 'comp-4', name: 'El Gran Escape', category: 'competencia', logoUrl: 'https://via.placeholder.com/40x40/4B0082/FFFFFF?text=GE' },
  { id: 'comp-5', name: 'Carrera de Drones', category: 'competencia', logoUrl: 'https://via.placeholder.com/40x40/00CED1/000000?text=CD' },

  // Curiosidad e Investigación
  { id: 'curio-1', name: 'Mentes Curiosas', category: 'curiosidad-investigacion', logoUrl: 'https://via.placeholder.com/40x40/FFD700/000000?text=MC' },
  { id: 'curio-2', name: 'Grandes Misterios', category: 'curiosidad-investigacion', logoUrl: 'https://via.placeholder.com/40x40/800080/FFFFFF?text=GM' },
  { id: 'curio-3', name: 'La Historia Detrás', category: 'curiosidad-investigacion', logoUrl: 'https://via.placeholder.com/40x40/008080/FFFFFF?text=HD' },
  { id: 'curio-4', name: 'Ciencia al Día', category: 'curiosidad-investigacion', logoUrl: 'https://via.placeholder.com/40x40/0000FF/FFFFFF?text=CD' },
  { id: 'curio-5', name: 'Exploradores del Mundo', category: 'curiosidad-investigacion', logoUrl: 'https://via.placeholder.com/40x40/228B22/FFFFFF?text=EM' },

  // Deportes
  { id: 'dep-1', name: 'Fútbol Plus', category: 'deportes', logoUrl: 'https://via.placeholder.com/40x40/32CD32/FFFFFF?text=FP' },
  { id: 'dep-2', name: 'Baloncesto NBA', category: 'deportes', logoUrl: 'https://via.placeholder.com/40x40/FF8C00/FFFFFF?text=NBA' },
  { id: 'dep-3', name: 'Fórmula 1 TV', category: 'deportes', logoUrl: 'https://via.placeholder.com/40x40/FF0000/FFFFFF?text=F1' },
  { id: 'dep-4', name: 'Luchas Libre', category: 'deportes', logoUrl: 'https://via.placeholder.com/40x40/800080/FFFFFF?text=LL' },
  { id: 'dep-5', name: 'Tenis Live', category: 'deportes', logoUrl: 'https://via.placeholder.com/40x40/00FF00/000000?text=TL' },

  // Comedia
  { id: 'com-1', name: 'Comedia Central', category: 'comedia', logoUrl: 'https://via.placeholder.com/40x40/FFFF00/000000?text=CC' },
  { id: 'com-2', name: 'Humor al Límite', category: 'comedia', logoUrl: 'https://via.placeholder.com/40x40/FFA500/FFFFFF?text=HL' },
  { id: 'com-3', name: 'Risas Garantizadas', category: 'comedia', logoUrl: 'https://via.placeholder.com/40x40/FF69B4/FFFFFF?text=RG' },
  { id: 'com-4', name: 'Show de Monólogos', category: 'comedia', logoUrl: 'https://via.placeholder.com/40x40/9370DB/FFFFFF?text=SM' },
  { id: 'com-5', name: 'Series Cómicas', category: 'comedia', logoUrl: 'https://via.placeholder.com/40x40/00CED1/000000?text=SC' },

  // Estilo de vida
  { id: 'est-1', name: 'Vivir Mejor', category: 'estilo-de-vida', logoUrl: 'https://via.placeholder.com/40x40/98FB98/000000?text=VM' },
  { id: 'est-2', name: 'Cocina Gourmet', category: 'estilo-de-vida', logoUrl: 'https://via.placeholder.com/40x40/FF6347/FFFFFF?text=CG' },
  { id: 'est-3', name: 'Moda y Tendencias', category: 'estilo-de-vida', logoUrl: 'https://via.placeholder.com/40x40/FF1493/FFFFFF?text=MT' },
  { id: 'est-4', name: 'Viajes Increíbles', category: 'estilo-de-vida', logoUrl: 'https://via.placeholder.com/40x40/1E90FF/FFFFFF?text=VI' },
  { id: 'est-5', name: 'Jardinería Urbana', category: 'estilo-de-vida', logoUrl: 'https://via.placeholder.com/40x40/228B22/FFFFFF?text=JU' },

  // Entretenimiento
  { id: 'ent-1', name: 'Showtime', category: 'entretenimiento', logoUrl: 'https://via.placeholder.com/40x40/FF00FF/FFFFFF?text=ST' },
  { id: 'ent-2', name: 'Famosos al Día', category: 'entretenimiento', logoUrl: 'https://via.placeholder.com/40x40/FFD700/000000?text=FD' },
  { id: 'ent-3', name: 'Juegos de Mesa', category: 'entretenimiento', logoUrl: 'https://via.placeholder.com/40x40/8B4513/FFFFFF?text=JM' },
  { id: 'ent-4', name: 'Magia e Ilusión', category: 'entretenimiento', logoUrl: 'https://via.placeholder.com/40x40/4B0082/FFFFFF?text=MI' },
  { id: 'ent-5', name: 'Talentos Ocultos', category: 'entretenimiento', logoUrl: 'https://via.placeholder.com/40x40/DC143C/FFFFFF?text=TO' },

  // Anime
  { id: 'ani-1', name: 'Anime World', category: 'anime', logoUrl: 'https://via.placeholder.com/40x40/FF1493/FFFFFF?text=AW' },
  { id: 'ani-2', name: 'Naruto Series', category: 'anime', logoUrl: 'https://via.placeholder.com/40x40/FF8C00/FFFFFF?text=NS' },
  { id: 'ani-3', name: 'Dragon Ball Z', category: 'anime', logoUrl: 'https://via.placeholder.com/40x40/FF0000/FFFFFF?text=DBZ' },
  { id: 'ani-4', name: 'Attack on Titan', category: 'anime', logoUrl: 'https://via.placeholder.com/40x40/000000/FFFFFF?text=AOT' },
  { id: 'ani-5', name: 'One Piece', category: 'anime', logoUrl: 'https://via.placeholder.com/40x40/FFD700/000000?text=OP' },

  // Gaming
  { id: 'gam-1', name: 'Gaming Zone', category: 'gaming', logoUrl: 'https://via.placeholder.com/40x40/00FF00/000000?text=GZ' },
  { id: 'gam-2', name: 'Streamers en Vivo', category: 'gaming', logoUrl: 'https://via.placeholder.com/40x40/964B00/FFFFFF?text=SV' },
  { id: 'gam-3', name: 'Esports', category: 'gaming', logoUrl: 'https://via.placeholder.com/40x40/0000FF/FFFFFF?text=ES' },
  { id: 'gam-4', name: 'Clásicos de Consola', category: 'gaming', logoUrl: 'https://via.placeholder.com/40x40/808080/FFFFFF?text=CC' },
  { id: 'gam-5', name: 'Noticias Gaming', category: 'gaming', logoUrl: 'https://via.placeholder.com/40x40/FF4500/FFFFFF?text=NG' },

  // Teen
  { id: 'teen-1', name: 'Jóvenes Activos', category: 'teen', logoUrl: 'https://via.placeholder.com/40x40/FF69B4/FFFFFF?text=JA' },
  { id: 'teen-2', name: 'Música para Adolescentes', category: 'teen', logoUrl: 'https://via.placeholder.com/40x40/9370DB/FFFFFF?text=MA' },
  { id: 'teen-3', name: 'Series de Cole', category: 'teen', logoUrl: 'https://via.placeholder.com/40x40/00CED1/000000?text=SC' },
  { id: 'teen-4', name: 'Influencers al Día', category: 'teen', logoUrl: 'https://via.placeholder.com/40x40/FFD700/000000?text=ID' },
  { id: 'teen-5', name: 'Retos Virales', category: 'teen', logoUrl: 'https://via.placeholder.com/40x40/32CD32/FFFFFF?text=RV' },

  // Kids
  { id: 'kids-1', name: 'Niños Felices', category: 'kids', logoUrl: 'https://via.placeholder.com/40x40/FFB6C1/000000?text=NF' },
  { id: 'kids-2', name: 'Pequeños Aventureros', category: 'kids', logoUrl: 'https://via.placeholder.com/40x40/87CEEB/000000?text=PA' },
  { id: 'kids-3', name: 'Cuentos Mágicos', category: 'kids', logoUrl: 'https://via.placeholder.com/40x40/98FB98/000000?text=CM' },
  { id: 'kids-4', name: 'Aprender y Jugar', category: 'kids', logoUrl: 'https://via.placeholder.com/40x40/FFFF00/000000?text=AJ' },
  { id: 'kids-5', name: 'Dibujos Animados Nuevos', category: 'kids', logoUrl: 'https://via.placeholder.com/40x40/FFA500/FFFFFF?text=DN' },

  // Música
  { id: 'mus-1', name: 'Música Pop', category: 'musica', logoUrl: 'https://via.placeholder.com/40x40/FF1493/FFFFFF?text=MP' },
  { id: 'mus-2', name: 'Rock y Alternativo', category: 'musica', logoUrl: 'https://via.placeholder.com/40x40/000000/FFFFFF?text=RA' },
  { id: 'mus-3', name: 'Conciertos En Vivo', category: 'musica', logoUrl: 'https://via.placeholder.com/40x40/FF0000/FFFFFF?text=CV' },
  { id: 'mus-4', name: 'Música Latina', category: 'musica', logoUrl: 'https://via.placeholder.com/40x40/FFFF00/000000?text=ML' },
  { id: 'mus-5', name: 'Clásicos de Jazz', category: 'musica', logoUrl: 'https://via.placeholder.com/40x40/8B4513/FFFFFF?text=CJ' },
];

const DUMMY_PROGRAM_DATA = [
  { 
    title: 'Noticiero', 
    imageUrl: 'https://via.placeholder.com/200x112/FF0000/FFFFFF?text=Noticias', 
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4' 
  },
  { 
    title: 'Deportes en Vivo', 
    imageUrl: 'https://via.placeholder.com/200x112/00FF00/FFFFFF?text=Deportes', 
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4' 
  },
  { 
    title: 'Película de la Noche', 
    imageUrl: 'https://via.placeholder.com/200x112/0000FF/FFFFFF?text=Pelicula', 
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4' 
  },
  { 
    title: 'Show de Comedia', 
    imageUrl: 'https://via.placeholder.com/200x112/FFFF00/000000?text=Comedia', 
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4' 
  },
  { 
    title: 'Estreno de Serie', 
    imageUrl: 'https://via.placeholder.com/200x112/FF00FF/FFFFFF?text=Series', 
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4' 
  },
  { 
    title: 'Top Musical', 
    imageUrl: 'https://via.placeholder.com/200x112/FFA500/FFFFFF?text=Musica', 
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' 
  },
  { 
    title: 'Documental', 
    imageUrl: 'https://via.placeholder.com/200x112/808080/FFFFFF?text=Documental', 
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4' 
  },
  { 
    title: 'Anime Exclusivo', 
    imageUrl: 'https://via.placeholder.com/200x112/FF1493/FFFFFF?text=Anime', 
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4' 
  },
  { 
    title: 'Noticias de Gaming', 
    imageUrl: 'https://via.placeholder.com/200x112/00FF7F/000000?text=Gaming', 
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4' 
  },
  { 
    title: 'Dibujos Animados', 
    imageUrl: 'https://via.placeholder.com/200x112/1E90FF/FFFFFF?text=Kids', 
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4' 
  },
];

interface Program {
  id: string;
  channelId: string;
  title: string;
  startTime: Date;
  durationMin: number;
  imageUrl: string;
  videoUrl: string;
}

const ChannelTimeline = ({ onChannelChange, currentChannel, category, onProgramClick }: { 
  onChannelChange: (channelId: string) => void; 
  currentChannel: string; 
  category: string; 
  onProgramClick: (videoUrl: string) => void;
}) => {
  const [lastSelectedChannel, setLastSelectedChannel] = useLocalStorage('last_channel', DUMMY_CHANNELS[0].id);

  const handleChannelNameClick = (channelId: string) => {
    const currentPrograms = getUpcomingPrograms(channelId);
    const currentProgram = currentPrograms.find(program => program.id.endsWith('-now'));
    
    if (currentProgram) {
      onChannelChange(channelId);
      setLastSelectedChannel(channelId);
      onProgramClick(currentProgram.videoUrl);
    }
  };
  
  const getProgress = (startTime: Date, durationMin: number) => {
    const now = new Date();
    const start = startTime.getTime();
    const end = start + durationMin * 60000;
    const totalTime = end - start;
    const elapsedTime = now.getTime() - start;
    
    if (elapsedTime < 0) return 0;
    if (elapsedTime > totalTime) return 100;
    
    return (elapsedTime / totalTime) * 100;
  };

  const getUpcomingPrograms = (channelId: string): Program[] => {
    const now = new Date();
    const programsToShow: Program[] = [];
    const baseTime = new Date(now.getTime());

    const minutes = baseTime.getMinutes();
    if (minutes > 30) {
      baseTime.setMinutes(60, 0, 0);
    } else if (minutes > 0) {
      baseTime.setMinutes(30, 0, 0);
    } else {
      baseTime.setMinutes(0, 0, 0);
    }

    const currentProgramData = DUMMY_PROGRAM_DATA[Math.floor(Math.random() * DUMMY_PROGRAM_DATA.length)];
    programsToShow.push({
      id: `${channelId}-now`,
      channelId: channelId,
      title: currentProgramData.title,
      startTime: now,
      durationMin: 30,
      imageUrl: currentProgramData.imageUrl,
      videoUrl: currentProgramData.videoUrl
    });

    for (let i = 0; i < 4; i++) {
      const startTime = new Date(baseTime.getTime() + i * 30 * 60000);
      const programData = DUMMY_PROGRAM_DATA[Math.floor(Math.random() * DUMMY_PROGRAM_DATA.length)];

      programsToShow.push({
        id: `${channelId}-${i+1}`,
        channelId: channelId,
        title: programData.title,
        startTime: startTime,
        durationMin: 30,
        imageUrl: programData.imageUrl,
        videoUrl: programData.videoUrl
      });
    }

    return programsToShow;
  };

  const categoryNames: { [key: string]: string } = {
    'favoritos': 'Favoritos', 
    'destacado': 'Destacado', 
    'peliculas': 'Películas', 
    'series': 'Series', 
    'retro': 'Retro',
    'novelas': 'Novelas', 
    'reality': 'Reality', 
    'competencia': 'Competencia', 
    'curiosidad-investigacion': 'Curiosidad e Investigación',
    'deportes': 'Deportes', 
    'comedia': 'Comedia', 
    'estilo-de-vida': 'Estilo de vida', 
    'entretenimiento': 'Entretenimiento',
    'anime': 'Anime', 
    'gaming': 'Gaming', 
    'teen': 'Teen', 
    'kids': 'Kids', 
    'musica': 'Música',
  };

  const categoriesOrder = [
    'favoritos', 'destacado', 'peliculas', 'series', 'retro', 'novelas', 'reality', 'competencia', 'curiosidad-investigacion',
    'deportes', 'comedia', 'estilo-de-vida', 'entretenimiento', 'anime', 'gaming', 'teen', 'kids', 'musica',
  ];

  const filteredChannels = category === 'all'
    ? DUMMY_CHANNELS
    : DUMMY_CHANNELS.filter(channel => channel.category === category);
    
  const groupedChannels = filteredChannels.reduce((acc: {[key: string]: typeof DUMMY_CHANNELS}, channel) => {
    const categoryId = channel.category;
    if (!acc[categoryId]) {
      acc[categoryId] = [];
    }
    acc[categoryId].push(channel);
    return acc;
  }, {});

  const orderedCategories = categoriesOrder.filter(catId => groupedChannels[catId]);

  return (
    <div className="bg-zinc-900 rounded-lg overflow-hidden shadow-lg">
      {orderedCategories.map(categoryId => (
        <div key={categoryId} className="mb-4">
          <h3 className="text-xl font-bold mb-2 p-2 bg-zinc-800 rounded-md text-white">
            {categoryNames[categoryId]}
          </h3>
          {groupedChannels[categoryId].map(channel => (
            <div key={channel.id} className="flex flex-col border-b border-zinc-700">
              <div className="flex items-center p-2 bg-zinc-800">
                <div 
                  className="flex-none pl-2 w-48 flex items-center cursor-pointer hover:bg-zinc-700 p-2 rounded transition-colors"
                  onClick={() => handleChannelNameClick(channel.id)}
                >
                  <span className="font-bold text-sm text-white truncate">{channel.name}</span>
                </div>
                
                <div className="flex-1 overflow-x-auto p-2 scrollbar-hide">
                  <div className="flex space-x-3" style={{ width: 'max-content' }}>
                    {getUpcomingPrograms(channel.id).map(program => {
                      const progress = getProgress(program.startTime, program.durationMin);
                      const isNow = program.id.endsWith('-now');
                      const isLiveAndSelected = isNow && currentChannel === program.channelId;
                      
                      return (
                        <div 
                          key={program.id} 
                          onClick={() => {
                            onChannelChange(program.channelId);
                            onProgramClick(program.videoUrl);
                          }}
                          className={`w-32 md:w-48 rounded-lg p-2 md:p-3 cursor-pointer transition-colors duration-200 relative overflow-hidden flex-shrink-0
                            ${isLiveAndSelected ? 'bg-red-700 text-white' : 'bg-zinc-700 hover:bg-zinc-600 text-white'}`}
                        >
                          <div className="relative w-full h-16 md:h-24 mb-2 rounded-md overflow-hidden"></div>

                          <p className="font-semibold text-xs md:text-sm truncate">{program.title}</p>
                          <p className="text-xs text-gray-300 mt-1">
                            {program.startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </p>
                          
                          {isNow && (
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-red-400">
                              <div className="h-full bg-red-600" style={{ width: `${progress}%` }}></div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ChannelTimeline;