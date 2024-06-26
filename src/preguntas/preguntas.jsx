const preguntas = [
    {
        titulo: "¿Cómo se llama el zorro amigo de Sonic?",
        opciones: [
            {textoRespuesta: "Tails", isCorrect: true},
            {textoRespuesta: "Shadow", isCorrect: false},
            {textoRespuesta: "Knuckles", isCorrect: false},
            {textoRespuesta: "Big", isCorrect: false}
        ]
    },
    {
        titulo: "¿En que consola se lanzó originalmente Zelda: Ocarina of Time?",
        opciones: [
            {textoRespuesta: "Playstation", isCorrect: false},
            {textoRespuesta: "Dreamcast", isCorrect: false},
            {textoRespuesta: "Nintendo 64", isCorrect: true},
            {textoRespuesta: "Game Boy Advance", isCorrect: false}
        ]
    },
    {
        titulo: "¿Cuántas estrellas podemos conseguir en total en Super Mario 64?",
        opciones: [
            {textoRespuesta: "60", isCorrect: false},
            {textoRespuesta: "120", isCorrect: true},
            {textoRespuesta: "150", isCorrect: false},
            {textoRespuesta: "90", isCorrect: false}
        ]
    },
    {
        titulo: "¿Que juego ha vendido más copias a lo largo de su historia?",
        opciones: [
            {textoRespuesta: "Minecraft", isCorrect: false},
            {textoRespuesta: "Tetris", isCorrect: true},
            {textoRespuesta: "GTA 5", isCorrect: false},
            {textoRespuesta: "Super Mario 64", isCorrect: false}
        ]
    },
    {
        titulo: "¿Que pokémon aparece en la carátula del juego Pokémon: Edición Ruby?",
        opciones: [
            {textoRespuesta: "Groudon", isCorrect: true},
            {textoRespuesta: "Entei", isCorrect: false},
            {textoRespuesta: "Charizard", isCorrect: false},
            {textoRespuesta: "Ho-Oh", isCorrect: false}
        ]
    },
    {
        titulo: "¿Cómo se llama el jefe final de Dark Souls 3?",
        opciones: [
            {textoRespuesta: "Gwyn, Señor de la Ceniza", isCorrect: false},
            {textoRespuesta: "Manus, Padre del Abismo", isCorrect: false},
            {textoRespuesta: "Alma de ceniza", isCorrect: true},
            {textoRespuesta: "Radagon de la Orden Dorada", isCorrect: false}
        ]
    },
    {
        titulo: "¿Qué entrega de Resident Evil está ubicada en España?",
        opciones: [
            {textoRespuesta: "Resident Evil 4", isCorrect: true},
            {textoRespuesta: "Resident Evil 2", isCorrect: false},
            {textoRespuesta: "Resident Evil Village", isCorrect: false},
            {textoRespuesta: "Resident Evil 7", isCorrect: false}
        ]
    },
    {
        titulo: "¿En qué año salió al mercado el videojuego Pac Man?",
        opciones: [
            {textoRespuesta: "1977", isCorrect: false},
            {textoRespuesta: "1983", isCorrect: false},
            {textoRespuesta: "1985", isCorrect: false},
            {textoRespuesta: "1980", isCorrect: true}
        ]
    },
    {
        titulo: "¿A que compañía pertenece en exclusiva la saga de videojuegos Halo?",
        opciones: [
            {textoRespuesta: "Nintendo", isCorrect: false},
            {textoRespuesta: "Sony", isCorrect: false},
            {textoRespuesta: "Microsoft", isCorrect: true},
            {textoRespuesta: "A ninguna", isCorrect: false}
        ]
    },
    {
        titulo: "¿Cual de los siguientes juegos no pertenece a la compañía FromSoftware?",
        opciones: [
            {textoRespuesta: "Dark Souls 2", isCorrect: false},
            {textoRespuesta: "Sekiro", isCorrect: false},
            {textoRespuesta: "Elden Ring", isCorrect: false},
            {textoRespuesta: "Lies of Pi", isCorrect: true}
        ]
    },
    {
        titulo: "¿En Darkest Dungeon como se llama la ciudad principal?",
        opciones: [
            {textoRespuesta: "La ciudadela", isCorrect: false},
            {textoRespuesta: "El Pueblo", isCorrect: false},
            {textoRespuesta: "La Villa", isCorrect: false},
            {textoRespuesta: "El Feudo", isCorrect: true}
        ]
    },
    {
        titulo: "¿Cual de los siguientes personajes de League of Legends es un yordle?",
        opciones: [
            {textoRespuesta: "Tristana", isCorrect: true},
            {textoRespuesta: "Yasuo", isCorrect: false},
            {textoRespuesta: "Riven", isCorrect: false},
            {textoRespuesta: "Ashe", isCorrect: false}
        ]
    },
    {
        titulo: "¿Que tipo de juego es League of Legends?",
        opciones: [
            {textoRespuesta: "Shooter", isCorrect: false},
            {textoRespuesta: "MOBA", isCorrect: true},
            {textoRespuesta: "MMO", isCorrect: false},
            {textoRespuesta: "RogueLike", isCorrect: false}
        ]
    },
    {
        titulo: "¿En que año se lanzó a la venta el juego Los Sims?",
        opciones: [
            {textoRespuesta: "1998", isCorrect: false},
            {textoRespuesta: "2003", isCorrect: false},
            {textoRespuesta: "2000", isCorrect: true},
            {textoRespuesta: "2007", isCorrect: false}
        ]
    },
    {
        titulo: "¿Cómo se llama el protagonista de la saga Halo?",
        opciones: [
            {textoRespuesta: "Master Chief", isCorrect: true},
            {textoRespuesta: "Solid Snake", isCorrect: false},
            {textoRespuesta: "Duke Nukem", isCorrect: false},
            {textoRespuesta: "Terminator", isCorrect: false}
        ]
    },
    {
        titulo: "¿Qué héroe empuña la llave espada en Kingdom Hearts?",
        opciones: [
            {textoRespuesta: "Mickey", isCorrect: false},
            {textoRespuesta: "Donald", isCorrect: false},
            {textoRespuesta: "Sora", isCorrect: true},
            {textoRespuesta: "Daniel", isCorrect: false}
        ]
    },
    {
        titulo: "¿Cual es el nombre del animatrónico amarillo en Five Nights At Freddys?",
        opciones: [
            {textoRespuesta: "Chica", isCorrect: true},
            {textoRespuesta: "Freddy", isCorrect: false},
            {textoRespuesta: "Foxy", isCorrect: false},
            {textoRespuesta: "Mangle", isCorrect: false}
        ]
    },
    {
        titulo: "¿Qué consola de Nintendo presentaba el innovador controlador de pantalla táctil?",
        opciones: [
            {textoRespuesta: "Nintendo 64", isCorrect: false},
            {textoRespuesta: "Nintendo DS", isCorrect: true},
            {textoRespuesta: "Game Boy Advance", isCorrect: false},
            {textoRespuesta: "Game Boy Color", isCorrect: false}
        ]
    },
    {
        titulo: "¿De que compañía de juegos provienen Diablo y World Of Warcraft?",
        opciones: [
            {textoRespuesta: "Blizzard", isCorrect: true},
            {textoRespuesta: "Riot Games", isCorrect: false},
            {textoRespuesta: "Epic Games", isCorrect: false},
            {textoRespuesta: "Bethesda", isCorrect: false}
        ]
    },
    {
        titulo: "¿En qué año se publicó el videojuego Portal?",
        opciones: [
            {textoRespuesta: "2013", isCorrect: false},
            {textoRespuesta: "2000", isCorrect: false},
            {textoRespuesta: "2007", isCorrect: true},
            {textoRespuesta: "2017", isCorrect: false}
        ]
    },
    {
        titulo: "¿Cual es el nombre del protagonista del juego Hades?",
        opciones: [
            {textoRespuesta: "Zagreo", isCorrect: true},
            {textoRespuesta: "Hades", isCorrect: false},
            {textoRespuesta: "Zeus", isCorrect: false},
            {textoRespuesta: "Kratos", isCorrect: false}
        ]
    },
    {
        titulo: "¿Cual es el jefe principal en The Binding Of Isaac?",
        opciones: [
            {textoRespuesta: "Satan", isCorrect: false},
            {textoRespuesta: "Mom", isCorrect: true},
            {textoRespuesta: "Isaac", isCorrect: false},
            {textoRespuesta: "Krampus", isCorrect: false}
        ]
    },
    {
        titulo: "¿Quién ganó el GOTY a mejor juego del año en 2023?",
        opciones: [
            {textoRespuesta: "Elden Ring", isCorrect: false},
            {textoRespuesta: "Alan Wake 2", isCorrect: false},
            {textoRespuesta: "Baldurs Gate 3", isCorrect: true},
            {textoRespuesta: "Starfield", isCorrect: false}
        ]
    },
    {
        titulo: "¿Qué género de videojuego es Hollow Knight?",
        opciones: [
            {textoRespuesta: "Simulator", isCorrect: false},
            {textoRespuesta: "RPG", isCorrect: false},
            {textoRespuesta: "Roguelike", isCorrect: false},
            {textoRespuesta: "Metroidvania", isCorrect: true}
        ]
    },
    {
        titulo: "¿Cómo se llama el protagonista de Blasphemous?",
        opciones: [
            {textoRespuesta: "El castigador", isCorrect: false},
            {textoRespuesta: "Judas Tadeo", isCorrect: false},
            {textoRespuesta: "El Penitente", isCorrect: true},
            {textoRespuesta: "Lázaro", isCorrect: false}
        ]
    },
    {
        titulo: "¿Qué tipo de animal es el protagonista de Stray?",
        opciones: [
            {textoRespuesta: "Zebra", isCorrect: false},
            {textoRespuesta: "León", isCorrect: false},
            {textoRespuesta: "Perro", isCorrect: false},
            {textoRespuesta: "Gato", isCorrect: true}
        ]
    },
    {
        titulo: "¿Por quíen fue creado Undertale?",
        opciones: [
            {textoRespuesta: "Larian Studios", isCorrect: false},
            {textoRespuesta: "Toby Fox", isCorrect: true},
            {textoRespuesta: "Chris Stevenson", isCorrect: false},
            {textoRespuesta: "Frisk Sans", isCorrect: false}
        ]
    },
    {
        titulo: "¿Quién es el antagonista principal en Resident Evil 3?",
        opciones: [
            {textoRespuesta: "Nemesis", isCorrect: true},
            {textoRespuesta: "Albert Wesker", isCorrect: false},
            {textoRespuesta: "Salazar", isCorrect: false},
            {textoRespuesta: "Tyrant", isCorrect: false}
        ]
    },
    {
        titulo: "¿Quién no es un hijo de Bowser?",
        opciones: [
            {textoRespuesta: "Morton", isCorrect: false},
            {textoRespuesta: "Roy", isCorrect: false},
            {textoRespuesta: "Goomba", isCorrect: true},
            {textoRespuesta: "Ludwig", isCorrect: false}
        ]
    },
    {
        titulo: "¿Que consola vendió más copias a lo largo de la historia?",
        opciones: [
            {textoRespuesta: "Playstation 2", isCorrect: true},
            {textoRespuesta: "NES", isCorrect: false},
            {textoRespuesta: "Playstation", isCorrect: false},
            {textoRespuesta: "Wii", isCorrect: false}
        ]
    },
    {
        titulo: "¿Quién protagoniza la saga Metroid?",
        opciones: [
            {textoRespuesta: "Epona", isCorrect: false},
            {textoRespuesta: "Samus Aran", isCorrect: true},
            {textoRespuesta: "Rogue", isCorrect: false},
            {textoRespuesta: "Fox", isCorrect: false}
        ]
    },
    {
        titulo: "¿Cómo se llama el mundo de Super Mario?",
        opciones: [
            {textoRespuesta: "Dream Land", isCorrect: false},
            {textoRespuesta: "Forgotten Land ", isCorrect: false},
            {textoRespuesta: "Star City", isCorrect: false},
            {textoRespuesta: "Mushroom Kingdom", isCorrect: true}
        ]
    },
    {
        titulo: "¿Quién es el antagonista principal en la saga Kirby?",
        opciones: [
            {textoRespuesta: "Rey Dedede", isCorrect: true},
            {textoRespuesta: "Meta Knight", isCorrect: false},
            {textoRespuesta: "Ridley", isCorrect: false},
            {textoRespuesta: "Rey Boo", isCorrect: false}
        ]
    },
    {
        titulo: "¿Qué compañía lanzó y diseñó Pacman?",
        opciones: [
            {textoRespuesta: "Nintendo", isCorrect: false},
            {textoRespuesta: "Sony", isCorrect: false},
            {textoRespuesta: "Game Freak", isCorrect: false},
            {textoRespuesta: "Namco", isCorrect: true}
        ]
    },
    {
        titulo: "¿Quién es el dueño del castillo en Castlevania?",
        opciones: [
            {textoRespuesta: "Rey Félix", isCorrect: false},
            {textoRespuesta: "Conde Drácula", isCorrect: true},
            {textoRespuesta: "Príncipe Héctor", isCorrect: false},
            {textoRespuesta: "Conde de Montecristo", isCorrect: false}
        ]
    },
    {
        titulo: "¿Cuál fue el primer juego 3D de la historia?",
        opciones: [
            {textoRespuesta: "Super Mario", isCorrect: false},
            {textoRespuesta: "Pacman", isCorrect: false},
            {textoRespuesta: "Battlezone", isCorrect: true},
            {textoRespuesta: "Call Of Duty", isCorrect: false}
        ]
    },
    {
        titulo: "¿Cuál fue la segunda Xbox creada por Microsoft?",
        opciones: [
            {textoRespuesta: "Xbox 360", isCorrect: true},
            {textoRespuesta: "Xbox Series X", isCorrect: false},
            {textoRespuesta: "Xbox Series S", isCorrect: false},
            {textoRespuesta: "Xbox One X", isCorrect: false}
        ]
    },
    {
        titulo: "¿Qué compañía inventó la primera consola de videojuegos?",
        opciones: [
            {textoRespuesta: "Nintendo", isCorrect: false},
            {textoRespuesta: "Atari", isCorrect: true},
            {textoRespuesta: "Namco", isCorrect: false},
            {textoRespuesta: "Sony", isCorrect: false}
        ]
    },
    {
        titulo: "¿Qué personaje de Mortal Kombat es un ninja?",
        opciones: [
            {textoRespuesta: "Jax", isCorrect: false},
            {textoRespuesta: "Kung Lao", isCorrect: false},
            {textoRespuesta: "Sub-zero", isCorrect: true},
            {textoRespuesta: "Law", isCorrect: false}
        ]
    },
    {
        titulo: "¿De que color es Knuckles el amigo de Sonic?",
        opciones: [
            {textoRespuesta: "Rojo", isCorrect: true},
            {textoRespuesta: "Naranja", isCorrect: false},
            {textoRespuesta: "Violeta", isCorrect: false},
            {textoRespuesta: "Rosa", isCorrect: false}
        ]
    },
    {
        titulo: "¿Qué tipo de juego es The Forest?",
        opciones: [
            {textoRespuesta: "Survival Horror", isCorrect: true},
            {textoRespuesta: "Gestión de Recursos", isCorrect: false},
            {textoRespuesta: "Estrategia", isCorrect: false},
            {textoRespuesta: "Simulación", isCorrect: false}
        ]
    },
    {
        titulo: "¿Qué nacionalidad tiene Blanka en Street Fighter?",
        opciones: [
            {textoRespuesta: "Española", isCorrect: false},
            {textoRespuesta: "Polaca", isCorrect: false},
            {textoRespuesta: "Rusa", isCorrect: false},
            {textoRespuesta: "Brasileña", isCorrect: true}
        ]
    },
]


export default preguntas;