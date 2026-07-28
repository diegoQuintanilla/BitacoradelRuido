import { client } from "../sanity/client";

export async function getEspeciales() {
  return await client.fetch(`
    *[_type == "especial"] | order(_createdAt desc){
      _id,
      titulo,
      slug,
      artista,
      categoria,
      descripcion,
      imagen,
      destacado
    }
  `);
}

export async function getEspecial(slug) {
  return await client.fetch(
    `
    *[_type == "especial" && slug.current == $slug][0]{
      _id,
      titulo,
      slug,
      artista,
      categoria,
      descripcion,
      contenido,
      imagen,
      destacado
    }
    `,
    { slug }
  );
}