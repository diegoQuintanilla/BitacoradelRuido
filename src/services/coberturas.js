import { client } from "../sanity/client";

export async function getCoberturas() {
  return client.fetch(`
    *[_type == "cobertura"] | order(fecha desc){
      _id,
      titulo,
      slug,
      banda,
      fecha,
      lugar,
      categoria,
      descripcion,
      imagen,
      destacada
    }
  `);
}

export async function getCobertura(slug) {
  return client.fetch(
    `
    *[_type == "cobertura" && slug.current == $slug][0]{
      _id,
      titulo,
      slug,
      banda,
      fecha,
      lugar,
      categoria,
      descripcion,
      contenido,
      imagen,
      galeria,
      videoYoutube,
      destacada
    }
    `,
    { slug }
  );
}