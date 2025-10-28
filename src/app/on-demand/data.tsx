export interface Program {
  title: string;
  imagePath: string;
  slug: string;
  category?: string;
  duration?: string;
  synopsis?: string;
  year?: number;
}

export interface Category {
  title: string;
  programs: Program[];
}

export const CAROUSEL_PROGRAMS: Program[] = [
  {
    title: 'Inception',
    category: 'Ciencia Ficción',
    duration: '2h 45m',
    synopsis: 'Un ladrón que roba secretos corporativos a través de la tecnología de los sueños debe realizar una última misión imposible.',
    imagePath: '/7uM4DyRVAcgagvhZoWrkrqMPbqV.jpg',
    slug: 'inception-main'
  },
  {
    title: 'Interstellar',
    category: 'Ciencia Ficción',
    duration: '1h 49m',
    synopsis: 'Un grupo de exploradores viaja a través de un agujero de gusano en el espacio en busca de un nuevo hogar para la humanidad.',
    imagePath: '/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
    slug: 'interstellar-main'
  },
  {
    title: 'The Dark Knight',
    category: 'Acción',
    duration: '2h 08m',
    synopsis: 'Batman enfrenta al Joker, un criminal que siembra el caos en Gotham City.',
    imagePath: '/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
    slug: 'the-dark-knight-main'
  },
  {
    title: 'The Matrix',
    category: 'Ciencia Ficción',
    duration: '1h 59m',
    synopsis: 'Un hacker descubre la verdadera naturaleza de su realidad y su papel en la guerra contra sus opresores.',
    imagePath: '/t1wm4PgOQ8e4z1C6tk1yDNrps4T.jpg',
    slug: 'the-matrix-main'
  }
];

export const CATEGORIES: Category[] = [
  {
    title: 'peliculas',
    programs: [
      {
        title: 'Forrest Gump',
        imagePath: '/dfjLE1HjdR9XhEpN04elCGUOJfA.jpg',
        slug: 'forrest-gump',
        category: 'Drama',
        duration: '2h 22m',
        synopsis: 'La vida de un hombre con un coeficiente intelectual bajo que influye en varios eventos históricos del siglo XX.'
      },
      {
        title: 'Inception',
        imagePath: '/7uM4DyRVAcgagvhZoWrkrqMPbqV.jpg',
        slug: 'inception',
        category: 'Ciencia Ficción',
        duration: '2h 45m',
        synopsis: 'Un ladrón que roba secretos corporativos a través de la tecnología de los sueños debe realizar una última misión imposible.'
      },
      {
        title: 'Interstellar',
        imagePath: '/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
        slug: 'interstellar',
        category: 'Ciencia Ficción',
        duration: '1h 49m',
        synopsis: 'Un grupo de exploradores viaja a través de un agujero de gusano en el espacio en busca de un nuevo hogar para la humanidad.'
      },
      {
        title: 'The Dark Knight',
        imagePath: '/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
        slug: 'the-dark-knight',
        category: 'Acción',
        duration: '2h 08m',
        synopsis: 'Batman enfrenta al Joker, un criminal que siembra el caos en Gotham City.'
      },
      {
        title: 'The Matrix',
        imagePath: '/t1wm4PgOQ8e4z1C6tk1yDNrps4T.jpg',
        slug: 'the-matrix',
        category: 'Ciencia Ficción',
        duration: '1h 59m',
        synopsis: 'Un hacker descubre la verdadera naturaleza de su realidad y su papel en la guerra contra sus opresores.'
      },
      {
        title: 'Finding Nemo',
        imagePath: '/eHuGQ10FUzK1mdOY69wF5pGgEf5.jpg',
        slug: 'finding-nemo',
        category: 'Animación',
        duration: '1h 40m',
        synopsis: 'Un pez payaso viaja por el océano en busca de su hijo secuestrado.'
      },
      {
        title: 'The Lion King',
        imagePath: '/2bXbqYdUdNVa8VIWXVfclP2ICtT.jpg',
        slug: 'the-lion-king',
        category: 'Animación',
        duration: '1h 28m',
        synopsis: 'El joven león Simba escapa de la Sabana después de la trágica muerte de su padre.'
      },
      {
        title: 'Toy Story',
        imagePath: '/yFWQkz2ynjwsazT6xQiIXEUsyuh.jpg',
        slug: 'toy-story',
        category: 'Animación',
        duration: '1h 15m',
        synopsis: 'Los juguetes de un niño cobran vida, pero la llegada de un nuevo juguete espacial complica las cosas.'
      },
      {
        title: 'Up',
        imagePath: '/mFvoEwSfLqbcWwFsDjQebn9bzFe.jpg',
        slug: 'up',
        category: 'Animación',
        duration: '1h 36m',
        synopsis: 'Un viudo de 78 años cumple su sueño de toda la vida al atar miles de globos a su casa y volar a Sudamérica.'
      },
      {
        title: 'Wall-E',
        imagePath: '/exWtYT7eiWx2c2ziXFAeqG3Pxkk.jpg',
        slug: 'wall-e',
        category: 'Animación',
        duration: '1h 38m',
        synopsis: 'En un futuro lejano, un robot de limpieza solitario se embarca en una aventura para salvar a la humanidad.'
      }
    ]
  },
  {
    title: 'series',
    programs: [
      {
        title: 'Stranger Things',
        imagePath: '/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg',
        slug: 'stranger-things',
        category: 'Ciencia Ficción',
        duration: '4 Temporadas',
        synopsis: 'En un pequeño pueblo, un grupo de amigos descubre una serie de misterios sobrenaturales.'
      },
      {
        title: 'The Crown',
        imagePath: '/1DDE0Z2Y805rqfkEjPbZsMLyPwa.jpg',
        slug: 'the-crown',
        category: 'Drama',
        duration: '6 Temporadas',
        synopsis: 'Una dramatización de la historia de la Reina Isabel II y los eventos que moldearon su reinado.'
      },
      {
        title: 'Anne with an E',
        imagePath: '/6P6tXhjT5tK3qOXzxF9OMLlG7iz.jpg',
        slug: 'anne-with-an-e',
        category: 'Drama',
        duration: '3 Temporadas',
        synopsis: 'Una adaptación moderna de la clásica historia de la huérfana Ana de las Tejas Verdes.'
      },
      {
        title: 'Heartland',
        imagePath: '/uc2gtWczT58BiAUJWFz9P5aZmNF.jpg',
        slug: 'heartland',
        category: 'Drama',
        duration: '16 Temporadas',
        synopsis: 'La historia de una familia que enfrenta los desafíos y triunfos de la vida en su rancho de caballos.'
      },
      {
        title: 'A Series of Unfortunate Events',
        imagePath: '/qg7WXAatXyQq6zO3SnWnRJEayeZ.jpg',
        slug: 'a-series-of-unfortunate-events',
        category: 'Drama',
        duration: '3 Temporadas',
        synopsis: 'Los huérfanos Baudelaire son perseguidos por un malvado guardián que quiere su fortuna.'
      },
      {
        title: 'The Slap',
        imagePath: '/x31d878edbJnHmJ1w2IMTPP81nx.jpg',
        slug: 'the-slap',
        category: 'Drama',
        duration: '1 Temporada',
        synopsis: 'La vida de varias personas se ve afectada después de que un hombre abofetea al hijo de otra pareja en una fiesta.'
      },
      {
        title: 'The Middle',
        imagePath: '/pBYSSxbs2vllON4DemdnG5AODJt.jpg',
        slug: 'the-middle',
        category: 'Comedia',
        duration: '9 Temporadas',
        synopsis: 'Una familia de clase media del Medio Oeste se enfrenta a los desafíos de la vida cotidiana.'
      },
      {
        title: 'Modern Family',
        imagePath: '/brI95f1gyHAw8RanmclWOJOnr6B.jpg',
        slug: 'modern-family',
        category: 'Comedia',
        duration: '11 Temporadas',
        synopsis: 'Una comedia sobre tres familias interconectadas que navegan por los altibajos de la vida moderna.'
      },
      {
        title: 'New Amsterdam',
        imagePath: '/jsH4AeGZn5Q6h314A3OTUHKxHhR.jpg',
        slug: 'new-amsterdam',
        category: 'Drama',
        duration: '5 Temporadas',
        synopsis: 'El nuevo director médico de uno de los hospitales públicos más antiguos de Estados Unidos se propone reformarlo todo.'
      },
      {
        title: 'The Good Doctor',
        imagePath: '/luhKkdD80qe62fwop6sdrXK9jUT.jpg',
        slug: 'the-good-doctor',
        category: 'Drama',
        duration: '6 Temporadas',
        synopsis: 'Un joven cirujano con autismo y síndrome de Savant se muda para trabajar en un prestigioso hospital.'
      }
    ]
  },
  {
    title: 'retro',
    programs: [
      { title: 'My Wife and Kids', imagePath: '/eyQsN8bU27fdIs2D66gFmcIo0dM.jpg', slug: 'my-wife-and-kids', category: 'Comedia', duration: '5 Temporadas', synopsis: 'Un padre de familia y su esposa intentan mantener la calma mientras crían a sus tres hijos.' },
      { title: 'The Fresh Prince of Bel-Air', imagePath: '/fJXzwxCVr2TEkhhKRKcih9o5DYK.jpg', slug: 'the-fresh-prince', category: 'Comedia', duration: '6 Temporadas', synopsis: 'Un adolescente de West Philadelphia es enviado a vivir con sus parientes ricos en Bel-Air.' },
      { title: 'MacGyver', imagePath: '/2zAogx9dmSAu2HYxbWzHe4ZaNY5.jpg', slug: 'macgyver', category: 'Acción', duration: '7 Temporadas', synopsis: 'Un agente secreto que resuelve problemas con ingenio y objetos cotidianos.' },
      { title: 'The Wayans Bros.', imagePath: '/xmbV7HcX9hXvxSvd6WJDBg6GHtr.jpg', slug: 'the-wayans-bros', category: 'Comedia', duration: '5 Temporadas', synopsis: 'La vida de dos hermanos que viven y trabajan juntos en el vecindario de Harlem.' },
      { title: 'Saved by the Bell', imagePath: '/9YC576fs6XQR2pfPDJn4kcmG8T5.jpg', slug: 'saved-by-the-bell', category: 'Comedia', duration: '4 Temporadas', synopsis: 'Un grupo de estudiantes de secundaria navega por los problemas de la adolescencia.' },
      { title: 'Family Ties', imagePath: '/vxERANdozlMKgl7VqGxbAvZ6u1O.jpg', slug: 'family-ties', category: 'Comedia', duration: '7 Temporadas', synopsis: 'Un matrimonio de exhippies liberales se enfrenta a los desafíos de criar a sus hijos conservadores.' },
      { title: 'Fuller House', imagePath: '/kdvngQRxOq6nYmiLkB32FL6ODke.jpg', slug: 'fuller-house', category: 'Comedia', duration: '5 Temporadas', synopsis: 'Las hijas de la familia Tanner se mudan de nuevo a la casa de la infancia para criar a sus propios hijos.' },
      { title: 'Diff’rent Strokes', imagePath: '/7Z8BcfA2CD0CQ0m4ltgPqT5rdr9.jpg', slug: 'diffrent-strokes', category: 'Comedia', duration: '8 Temporadas', synopsis: 'Un empresario de Manhattan adopta a los dos hijos afroamericanos de su ama de llaves fallecida.' },
      { title: 'Cheers', imagePath: '/nD1ZQBKbgKSmKcrAkWTofohsScj.jpg', slug: 'cheers', category: 'Comedia', duration: '11 Temporadas', synopsis: 'Las vidas de un grupo de amigos que se reúnen en un bar de Boston para beber, socializar y compartir sus problemas.' },
      { title: 'Mork & Mindy', imagePath: '/mzWJikslTFFeRloUNQmbAWbdU28.jpg', slug: 'mork-mindy', category: 'Ciencia Ficción', duration: '4 Temporadas', synopsis: 'Un alienígena amigable de otro planeta llega a la Tierra para estudiarla.' }
    ]
  },
  {
    title: 'novelas',
    programs: [
      { title: 'Emperatriz', imagePath: '/xrFjmOiEXyIIBQj8YbMOBZWSBHc.jpg', slug: 'emperatriz', category: 'Novela', duration: '1 Temporada', synopsis: 'Una mujer ambiciosa busca vengarse del hombre que la abandonó y de la familia que la traicionó.' },
      { title: 'El Manantial', imagePath: '/y3ZcSZwgXKL5ycBVl04llvYKh3b.jpg', slug: 'el-manantial', category: 'Novela', duration: '1 Temporada', synopsis: 'La historia de dos familias rivales y el amor prohibido que surge entre sus herederos.' },
      { title: 'Betty la Fea', imagePath: '/huEeQQBmZsZ5qDXkWl0pS5vPWIU.jpg', slug: 'betty-la-fea', category: 'Novela', duration: '1 Temporada', synopsis: 'Una secretaria inteligente y poco atractiva conquista el mundo de la moda.' },
      { title: 'Sueños y Caramelos', imagePath: '/7DOJyCS4Gz242PMsjsCM5hrJQjc.jpg', slug: 'suenos-y-caramelos', category: 'Novela', duration: '1 Temporada', synopsis: 'Una niña vive una serie de aventuras mágicas mientras busca a su madre.' },
      { title: 'Rubí', imagePath: '/5q8w0yawoJc8xcHNWEEmQcIE7zu.jpg', slug: 'rubi', category: 'Novela', duration: '1 Temporada', synopsis: 'Una mujer de belleza impactante usa su físico para ascender socialmente sin importarle a quién lastime.' },
      { title: 'Misión S.O.S', imagePath: '/AkKbgctkm5Zr5KbkAmmK00oGOCJ.jpg', slug: 'mision-sos', category: 'Novela', duration: '1 Temporada', synopsis: 'Un grupo de niños investiga una serie de misterios en un pueblo abandonado.' },
      { title: 'Not My Fault: Mexico', imagePath: '/vMk4QF87ULxVbhMPqzA17HDtpUR.jpg', slug: 'not-my-fault-mexico', category: 'Novela', duration: '1 Temporada', synopsis: 'Basada en hechos reales, esta serie aborda la violencia de género en México.' },
      { title: 'Blood', imagePath: '/aY23kASw02LgWBfoqBjLhCTZDTH.jpg', slug: 'blood', category: 'Novela', duration: '1 Temporada', synopsis: 'Una novela surcoreana sobre un médico cirujano vampiro.' },
      { title: 'Mirada de mujer: El regreso', imagePath: '/3keQAYPMrXAx1THf1LKhAjo2M5W.jpg', slug: 'mirada-de-mujer', category: 'Novela', duration: '1 Temporada', synopsis: 'La historia de una mujer que busca su identidad y felicidad después de su divorcio.' },
      { title: 'Wounded Birds', imagePath: '/80GrjkbOiigGdOtsGrFroj3Q14w.jpg', slug: 'wounded-birds', category: 'Novela', duration: '1 Temporada', synopsis: 'Dos hermanos, una niña y un niño, se enfrentan a la vida después de ser abandonados por su padre.' }
    ]
  },
  {
    title: 'reality',
    programs: [
      { title: 'Survivor', imagePath: '/oFkZGAAcK1dzy3lcCwZKqhOpjy3.jpg', slug: 'survivor', category: 'Reality', duration: '44 Temporadas', synopsis: 'Un grupo de extraños es abandonado en un lugar remoto para competir por un premio.' },
      { title: 'The Voice', imagePath: '/iQGfigdKWe4UcaBEW25TGuTg39h.jpg', slug: 'the-voice', category: 'Reality', duration: '24 Temporadas', synopsis: 'Un concurso de canto donde la voz es lo único que importa.' },
      { title: 'Big Brother', imagePath: '/eE1urwKSsl8Kprw2PgszD0W5YoV.jpg', slug: 'big-brother', category: 'Reality', duration: '25 Temporadas', synopsis: 'Un grupo de concursantes vive juntos en una casa, aislados del mundo exterior, mientras son vigilados constantemente.' },
      { title: 'MasterChef Junior', imagePath: '/eF6jXEiUcUtwrg3k4aI7qSTVJpR.jpg', slug: 'masterchef-junior', category: 'Reality', duration: '9 Temporadas', synopsis: 'Jóvenes talentos culinarios compiten por el título de MasterChef Junior.' },
      { title: 'The Amazing Race', imagePath: '/z4Ou3cXvRZMAzAXsSiifi3TuJCq.jpg', slug: 'the-amazing-race', category: 'Reality', duration: '35 Temporadas', synopsis: 'Equipos de dos personas compiten en una carrera alrededor del mundo.' },
      { title: 'Top Chef', imagePath: '/vGf3epvYVFc6AzO2JU0QJCxUzTo.jpg', slug: 'top-chef', category: 'Reality', duration: '21 Temporadas', synopsis: 'Chef profesionales compiten en una serie de desafíos culinarios para ganar un gran premio.' },
      { title: 'Nailed It!', imagePath: '/56aZxJsjrTg58drdgHA6YFPnHir.jpg', slug: 'nailed-it', category: 'Reality', duration: '7 Temporadas', synopsis: 'Concursantes de repostería amateur intentan recrear obras maestras de la pastelería.' },
      { title: 'Chopped Junior', imagePath: '/98edwGR4cAXVBWoZwH6tYltvw3N.jpg', slug: 'chopped-junior', category: 'Reality', duration: '10 Temporadas', synopsis: 'Jóvenes chefs compiten con una canasta de ingredientes misteriosos.' },
      { title: 'Dance Moms', imagePath: '/1NJVs5sCHGzkYoEAPcA12CpSzfs.jpg', slug: 'dance-moms', category: 'Reality', duration: '8 Temporadas', synopsis: 'Un grupo de jóvenes bailarinas compiten por la fama bajo la estricta dirección de su profesora.' },
      { title: 'Project Runway Junior', imagePath: '/kyRtJWOaFXgbEERySS7W60hUvpr.jpg', slug: 'project-runway-junior', category: 'Reality', duration: '3 Temporadas', synopsis: 'Jóvenes diseñadores de moda compiten por un premio que los ayudará a lanzar su carrera.' }
    ]
  },
  {
    title: 'competencia',
    programs: [
      { title: 'MasterChef', imagePath: '/2hyhgRQz1aJIukQhjjvOlDxG84E.jpg', slug: 'masterchef', category: 'Competencia', duration: '13 Temporadas', synopsis: 'Cocineros aficionados compiten en una serie de desafíos culinarios.' },
      { title: 'American Ninja Warrior', imagePath: '/tJu7tBzRw7dOpJ8ii63m7tWGbPC.jpg', slug: 'american-ninja-warrior', category: 'Competencia', duration: '15 Temporadas', synopsis: 'Concursantes de élite compiten en la carrera de obstáculos más difícil del mundo.' },
      { title: 'The Amazing Race', imagePath: '/AaVzStjkJGJYBN6evmiDuk7t1N8.jpg', slug: 'the-amazing-race-comp', category: 'Competencia', duration: '35 Temporadas', synopsis: 'Equipos de dos personas compiten en una carrera alrededor del mundo.' },
      { title: 'Lego Masters', imagePath: '/7DaargwupHi85QCxZ0XwpvXoTnC.jpg', slug: 'lego-masters', category: 'Competencia', duration: '4 Temporadas', synopsis: 'Equipos de constructores de Lego compiten en una serie de desafíos creativos.' },
      { title: 'Junior Bake Off', imagePath: '/A2BGLw6nP0cS9Uj0WY2t6y2S8lo.jpg', slug: 'junior-bake-off', category: 'Competencia', duration: '8 Temporadas', synopsis: 'Jóvenes panaderos compiten para ser el mejor de su clase.' },
      { title: 'Top Chef Junior', imagePath: '/lFSWQQ7T9nNeef3bhDVf9BNBcBS.jpg', slug: 'top-chef-junior', category: 'Competencia', duration: '2 Temporadas', synopsis: 'Jóvenes talentos culinarios compiten por el título de Top Chef Junior.' },
      { title: 'GRAND PRIX Driver', imagePath: '/lGMdHO0pduVmsESPhB5hjyyFPpo.jpg', slug: 'grand-prix-driver', category: 'Documental', duration: '1 Temporada', synopsis: 'Una mirada detrás de las cámaras de un equipo de Fórmula 1 durante una temporada.' },
      { title: 'WandaVision', imagePath: '/7qHVYIzYIoD0Ul2gMAMCr9dVLHO.jpg', slug: 'wandavision', category: 'Ciencia Ficción', duration: '1 Temporada', synopsis: 'Wanda y Visión, dos seres superpoderosos, viven una vida suburbana ideal, pero sospechan que las cosas no son lo que parecen.' },
      { title: 'The Test', imagePath: '/7dxzUrCNttaTKzlfbIzZGYoc4YP.jpg', slug: 'the-test', category: 'Documental', duration: '2 Temporadas', synopsis: 'Sigue a la selección australiana de cricket mientras intentan recuperar el respeto del público.' },
      { title: 'American Ninja Warrior Junior', imagePath: '/iLQKVYuoOFGWIHTNUMZvMJY99Q2.jpg', slug: 'american-ninja-warrior-junior', category: 'Competencia', duration: '3 Temporadas', synopsis: 'Jóvenes deportistas compiten en versiones de la famosa carrera de obstáculos.' }
    ]
  },
  {
    title: 'kids',
    programs: [
      { title: 'Peppa Pig', imagePath: '/4iKa2PWRB28ON5sBV7IQm7HjK6c.jpg', slug: 'peppa-pig', category: 'Infantil', duration: '10 Temporadas', synopsis: 'Las aventuras de una cerdita llamada Peppa, su hermano menor George y sus amigos.' },
      { title: 'Paw Patrol', imagePath: '/9S65uEjDqepU7d71CNmxIBHHdo.jpg', slug: 'paw-patrol', category: 'Infantil', duration: '9 Temporadas', synopsis: 'Un grupo de cachorros de rescate que trabajan juntos para proteger a su comunidad.' },
      { title: 'Dora la Exploradora', imagePath: '/pxIdz7qk38TeAiiEzg8rltJABGM.jpg', slug: 'dora-la-exploradora', category: 'Infantil', duration: '8 Temporadas', synopsis: 'Una niña de 7 años y su mono Botas exploran el mundo y resuelven acertijos.' },
      { title: 'Bluey', imagePath: '/b9mY0X5T20ZM073hoa5n0dgmbfN.jpg', slug: 'bluey', category: 'Infantil', duration: '3 Temporadas', synopsis: 'Un cachorro de seis años llamado Bluey explora su mundo a través del juego.' },
      { title: 'Mickey Mouse Clubhouse', imagePath: '/gHtEhlAZHxMawOiPq7JoKwkmETQ.jpg', slug: 'mickey-mouse-clubhouse', category: 'Infantil', duration: '4 Temporadas', synopsis: 'Mickey Mouse y sus amigos resuelven problemas con la ayuda de la audiencia.' },
      { title: 'Sesame Street', imagePath: '/14k9BfZ2p4rQBMeJ5crKTfUZVwD.jpg', slug: 'sesame-street', category: 'Infantil', duration: '55 Temporadas', synopsis: 'Un programa educativo que enseña a los niños letras y números a través de canciones y juegos.' },
      { title: 'Bubble Guppies', imagePath: '/zJ50jTHpOY3wKmuxiONOL77t9DW.jpg', slug: 'bubble-guppies', category: 'Infantil', duration: '6 Temporadas', synopsis: 'Las aventuras de un grupo de sirenas en edad preescolar en un mundo submarino.' },
      { title: 'Thomas & Friends', imagePath: '/iqUETXxUVPp6sXIjGJZJfnqs631.jpg', slug: 'thomas-friends', category: 'Infantil', duration: '25 Temporadas', synopsis: 'Las aventuras de una locomotora antropomórfica y sus amigos en la isla de Sodor.' },
      { title: 'Octonauts', imagePath: '/iYUhUSKWKpSBahaWLUQIPckAy8p.jpg', slug: 'octonauts', category: 'Infantil', duration: '5 Temporadas', synopsis: 'Un equipo de exploradores submarinos que protegen a las criaturas marinas.' },
      { title: 'The Amazing World of Gumball', imagePath: '/6pbhXcDYJviMBXTYHW0rqyN1IsI.jpg', slug: 'the-amazing-world-of-gumball', category: 'Infantil', duration: '6 Temporadas', synopsis: 'Las desventuras de un gato azul llamado Gumball y su familia en el extraño mundo de Elmore.' }
    ]
  }
];