import "./CoberturasSection.css";
import coberturas from "../../../data/coberturas";
import CoberturaCard from "../../cards/CoberturaCard/CoberturaCard";

export default function Coberturas() {
  return (
    <section className="coberturas">
      <div className="coberturas-container">
        <span className="coberturas-subtitle">Periodismo Musical</span>

        <h2 className="coberturas-title">Últimas Coberturas</h2>

        <p className="coberturas-description">
          Recitales, festivales y eventos contados desde adentro, con
          fotografías exclusivas y toda la energía del rock.
        </p>

        <div className="coberturas-grid">
          {coberturas.slice(0, 3).map((item) => (
            <CoberturaCard
             key={item.id}
             imagen={item.imagen}
             titulo={item.titulo}
             categoria={item.categoria}
             fecha={item.fecha}
             lugar={item.lugar}
             slug={item.slug} />
          ))}
        </div>
      </div>
    </section>
  );
}
