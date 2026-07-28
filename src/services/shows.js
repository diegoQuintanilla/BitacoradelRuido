import { client } from "../sanity/client";

export async function getShows() {
  return await client.fetch(`
    *[_type == "show"] | order(fecha asc){
      _id,
      titulo,
      slug,
      artista,
      categoria,
      fecha,
      hora,
      lugar,
      ciudad,
      precio,
      estado,
      descripcion,
      imagen,
      destacado
    }
  `);
}

export async function getShow(slug) {
  return await client.fetch(
    `
    *[_type == "show" && slug.current == $slug][0]{
      _id,
      titulo,
      slug,
      artista,
      categoria,
      fecha,
      hora,
      lugar,
      ciudad,
      precio,
      estado,
      descripcion,
      contenido,
      linkEntradas,
      imagen,
      destacado
    }
    `,
    { slug }
  );
}