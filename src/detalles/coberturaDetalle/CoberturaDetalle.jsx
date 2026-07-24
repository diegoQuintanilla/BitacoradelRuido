import { useParams, Link } from "react-router-dom";
import "./CoberturaDetalle.css";
import { PortableText } from "@portabletext/react";
import { portableTextComponents } from "../../componentes/PortableTextComponents";
import { useEffect, useState } from "react";
import { getCobertura } from "../../services/coberturas";
import { urlFor } from "../../sanity/image";

export default function CoberturaDetalle() {
  const { slug } = useParams();

  const [cobertura, setCobertura] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function cargarCobertura() {
      try {
        const data = await getCobertura(slug);
        setCobertura(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    cargarCobertura();
  }, [slug]);

  if (loading) {
    return (
      <main className="cobertura-detalle">
        <div className="cobertura-container">
          <h2>Cargando cobertura...</h2>
        </div>
      </main>
    );
  }

  if (!cobertura) {
    return (
      <main className="cobertura-detalle">
        <div className="cobertura-container">
          <h1>La cobertura no existe.</h1>
        </div>
      </main>
    );
  }

  return (
    <main className="cobertura-detalle">
      <section className="cobertura-hero">
        <img
          src={urlFor(cobertura.imagen).width(1800).url()}
          alt={cobertura.titulo}
        />
      </section>

      <div className="cobertura-container">
        <span className="cobertura-category">{cobertura.categoria}</span>

        <h1 className="coberturaDetalle-title">{cobertura.titulo}</h1>

        <p className="cobertura-banda">{cobertura.banda}</p>

        <div className="cobertura-meta">
          <span>{cobertura.fecha}</span>
          <span>{cobertura.lugar}</span>
        </div>

        <div className="cobertura-content">
          <PortableText
            value={cobertura.contenido}
            components={portableTextComponents}
          />
        </div>

        <div className="cobertura-gallery">
          {cobertura.galeria?.map((img, index) => (
            <img
              key={index}
              src={urlFor(img).width(1400).url()}
              alt={cobertura.titulo}
            />
          ))}
        </div>

        {cobertura.videoYoutube && (
          <div className="cobertura-video">
            <iframe
              src={cobertura.videoYoutube.replace("watch?v=", "embed/")}
              title={cobertura.titulo}
              allowFullScreen
            />
          </div>
        )}

        <Link to="/coberturas" className="back-button">
          ← Volver a coberturas
        </Link>
      </div>
    </main>
  );
}
