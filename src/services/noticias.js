import { client } from "../sanity/client";

export async function getNoticias() {
  return await client.fetch(`
    *[_type == "noticia"] | order(fecha desc){
      _id,
      titulo,
      slug,
      fecha,
      categoria,
      descripcion,
      imagen,
      destacada
    }
  `);
}

export async function getNoticia(slug) {
  return await client.fetch(
    `
    *[_type == "noticia" && slug.current == $slug][0]{
      _id,
      titulo,
      slug,
      fecha,
      categoria,
      descripcion,
      contenido,
      imagen,
      destacada
    }
  `,
    { slug }
  );
}