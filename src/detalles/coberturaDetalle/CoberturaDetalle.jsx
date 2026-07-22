import { useParams, Link } from "react-router-dom";
import coberturas from "../../data/coberturas";
import "./CoberturaDetalle.css";

export default function CoberturaDetalle() {

    const { slug } = useParams();

    const cobertura = coberturas.find(
        item => item.slug === slug
    );

    if(!cobertura){
        return <h1>Cobertura no encontrada</h1>;
    }

    return(

        <main className="cobertura-detalle">

  <section className="cobertura-hero">
    <img src={cobertura.imagen} alt={cobertura.titulo} />
  </section>

  <div className="cobertura-container">


    <span className="cobertura-category">
      {cobertura.categoria}
    </span>

    <h1 className="coberturaDetalle-title">
      {cobertura.titulo}
    </h1>

    <div className="cobertura-meta">
      ...
    </div>

    <div className="cobertura-content">
      {cobertura.contenido.map((parrafo, index) => (
        <p key={index}>{parrafo}</p>
      ))}
    </div>

    <div className="cobertura-gallery">
      {cobertura.galeria?.map((img, index) => (
        <img key={index} src={img} alt="" />
      ))}
    </div>

    <Link to="/coberturas" className="back-button">
      ← Volver a coberturas
    </Link>
  </div>

</main>

    )

}