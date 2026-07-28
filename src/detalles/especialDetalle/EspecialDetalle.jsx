import "./EspecialDetalle.css";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Clock3 } from "lucide-react";
import { useEffect, useState } from "react";
import { PortableText } from "@portabletext/react";

import { getEspecial } from "../../services/especiales";
import { urlFor } from "../../sanity/image";
import { portableTextComponents } from "../../componentes/PortableTextComponents";

export default function EspecialDetalle() {
  const { slug } = useParams();

  const [especial, setEspecial] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function cargarEspecial() {
      try {
        const data = await getEspecial(slug);
        setEspecial(data);
      } catch (error) {
        console.error("Error al cargar especial:", error);
      } finally {
        setLoading(false);
      }
    }

    cargarEspecial();
  }, [slug]);

  if (loading) {
    return (
      <main className="especial-detalle">
        <div className="especial-container">
          <h2>Cargando especial...</h2>
        </div>
      </main>
    );
  }

  if (!especial) {
    return (
      <main className="especial-detalle">
        <div className="especial-container">
          <h1>Especial no encontrado.</h1>
        </div>
      </main>
    );
  }

  return (
    <main className="especial-detalle">

      <section className="especial-hero">
        <img
          src={urlFor(especial.imagen).width(1600).url()}
          alt={especial.titulo}
        />
      </section>

      <div className="especial-container">


        <span className="especial-categoria">
          {especial.categoria}
        </span>

        <h1 className="especial-title">
          {especial.titulo}
        </h1>

        <h3 className="especial-artista">
          {especial.artista}
        </h3>

        <div className="especial-meta">
          <div className="meta-item">
            <Clock3 size={18} />
            <span>10 min de lectura</span>
          </div>
        </div>

        <div className="especial-content">
          <PortableText
            value={especial.contenido}
            components={portableTextComponents}
          />
        </div>

        <Link to="/especiales" className="volver">
          <ArrowLeft size={18} />
          Volver a Especiales
        </Link>
      </div>

    </main>
  );
}