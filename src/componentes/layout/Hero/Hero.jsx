import "./Hero.css";
import { Link } from 'react-router-dom';
import { ArrowRight, Play, ArrowBigDownDash } from "lucide-react";

import logo from "../../../assets/logo.png";
import hero from "../../../assets/hero-concierto.jpg";

export default function Hero() {
  return (
    <section className="hero">
      {/* Fondo */}

      <div className="hero-background">
        <img src={hero} alt="" className="hero-image" />

        <div className="hero-overlay"></div>
      </div>

      {/* Contenido */}

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>

            <span className="hero-badge-text">Cobertura en vivo</span>
          </div>

          <img src={logo} alt="La Bitácora del Ruido" className="hero-logo" />

          <p className="hero-subtitle">Coberturas · Historias</p>

          <h1 className="hero-title">
            Ruido
            <span> Real.</span>
          </h1>

          <p className="hero-description">
            Cobertura de recitales, shows, noticias, galerías fotográficas y
            toda la actualidad del rock nacional e internacional.
          </p>

          <div className="hero-buttons">
            <Link to={"/Coberturas"} className="btn-primary">
              Ver Coberturas
              <ArrowRight size={20} />
            </Link>

            <button className="btn-secondary">
              <Play size={18} />
              Último show
            </button>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <ArrowBigDownDash size={24} />

        <span>Scroll</span>
      </div>
    </section>
  );
}
