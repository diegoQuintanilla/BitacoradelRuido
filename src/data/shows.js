import airbag from "../assets/images/Shows/airbag.webp";
import babasonicos from "../assets/images/Shows/babasonicos.webp";
import cosquinRock from "../assets/images/Shows/cosquin-rock.webp";
import divididos from "../assets/images/Shows/divididos.webp";
import laRenga from "../assets/images/Shows/laRenga.webp";
import ntvg from "../assets/images/Shows/ntvg.webp";



const shows = [
  {
    id: 1,
    slug: "airbag-river-2026",
    artista: "Airbag",
    titulo: "Airbag presenta su nueva gira",
    categoria: "Recital",
    fecha: "15 Agosto 2026",
    hora: "21:00 hs",
    lugar: "Estadio River Plate",
    ciudad: "Buenos Aires",
    precio: "Desde $75.000",
    estado: "Entradas disponibles",
    imagen: airbag,
contenido: [
  "Airbag escribió un nuevo capítulo en su historia con un imponente concierto en el Estadio Monumental durante 2026. Frente a una multitud que colmó las tribunas y el campo de juego, los hermanos Sardelli ofrecieron un espectáculo que combinó la fuerza del rock con una producción de nivel internacional. El show recorrió todas las etapas de la banda, desde sus primeros éxitos hasta las canciones más recientes, demostrando el crecimiento artístico que los convirtió en uno de los grupos más convocantes del país.",

  "La puesta en escena fue uno de los grandes protagonistas de la noche. Un enorme despliegue de pantallas LED, un sofisticado diseño de luces, efectos especiales y un sonido de primer nivel acompañaron cada momento del recital. La conexión con el público fue permanente: miles de voces cantaron cada canción de principio a fin, mientras clásicos como 'Cae el Sol' y 'Por Mil Noches' generaron algunos de los momentos más emocionantes de una jornada inolvidable para los fanáticos.",

  "Con este concierto en River, Airbag reafirmó su lugar entre las bandas más importantes del rock argentino actual. La convocatoria masiva y la calidad del espectáculo reflejan una carrera construida con trabajo, evolución y una identidad musical cada vez más sólida. Más que un simple recital, la presentación en el Monumental fue una verdadera celebración del presente de la banda y una muestra de que su crecimiento parece no tener techo."
],
    descripcion:
      "Airbag vuelve a River con un show cargado de clásicos y canciones de su último álbum.",
  },

  {
    id: 2,
    slug: "divididos-obras",
    artista: "Divididos",
    titulo: "La Aplanadora del Rock",
    categoria: "Recital",
    fecha: "30 Agosto 2026",
    hora: "20:30 hs",
    lugar: "Estadio Obras",
    ciudad: "Buenos Aires",
    precio: "Desde $55.000",
    estado: "Últimas entradas",
    imagen: divididos,
    descripcion:
      "Divididos vuelve a Obras con un recorrido por toda su carrera.",
  },

  {
    id: 3,
    slug: "la-renga-unico",
    artista: "La Renga",
    titulo: "Show Único",
    categoria: "Recital",
    fecha: "12 Septiembre 2026",
    hora: "21:00 hs",
    lugar: "Estadio Único",
    ciudad: "La Plata",
    precio: "Desde $65.000",
    estado: "Entradas disponibles",
    imagen: laRenga,
    descripcion:
      "Una noche histórica con La Renga en el Estadio Único de La Plata.",
  },

  {
    id: 4,
    slug: "cosquin-rock",
    artista: "Cosquín Rock",
    titulo: "Festival Cosquín Rock",
    categoria: "Festival",
    fecha: "14 Febrero 2027",
    hora: "12:00 hs",
    lugar: "Aeródromo Santa María de Punilla",
    ciudad: "Córdoba",
    precio: "Desde $120.000",
    estado: "Entradas disponibles",
    imagen: cosquinRock,
    descripcion:
      "El festival más importante del país reúne a más de 100 artistas durante dos jornadas.",
  },

  {
    id: 5,
    slug: "babasonicos-movistar",
    artista: "Babasónicos",
    titulo: "Tour 2026",
    categoria: "Recital",
    fecha: "28 Septiembre 2026",
    hora: "21:00 hs",
    lugar: "Movistar Arena",
    ciudad: "Buenos Aires",
    precio: "Desde $68.000",
    estado: "Agotado",
    imagen: babasonicos,
    descripcion:
      "Babasónicos presenta su gira nacional con un show completamente renovado.",
  },

  {
    id: 6,
    slug: "no-te-va-gustar",
    artista: "No Te Va Gustar",
    titulo: "30 Años",
    categoria: "Gira",
    fecha: "10 Octubre 2026",
    hora: "20:30 hs",
    lugar: "Hipódromo de Rosario",
    ciudad: "Rosario",
    precio: "Desde $58.000",
    estado: "Entradas disponibles",
    imagen: ntvg,
    descripcion:
      "No Te Va Gustar celebra tres décadas de historia con una gira especial.",
  }
];

export default shows;