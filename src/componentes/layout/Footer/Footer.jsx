import "./Footer.css";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaYoutube, FaSpotify } from "react-icons/fa";

import { Mail, MapPin, ArrowUp } from "lucide-react";

import logo from "../../../assets/logo.png";

const links = [
  "Noticias",
  "Coberturas",
  "Shows",
  "Especiales",
];

const social = [FaInstagram, FaFacebook, FaYoutube, FaSpotify];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Marca */}

          <div className="footer-brand">
            <img src={logo} alt="Logo" className="footer-logo" />

            <p className="footer-description">
              Coberturas, entrevistas, noticias, festivales y la pasión por el
              rock nacional e internacional.
            </p>

            <div className="footer-social">
              {social.map((Icon, index) => (
                <a key={index} href="#" className="social-link">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Navegación */}

          <div>
            <h3 className="footer-title">Explorar</h3>

            <ul className="footer-links">
              {links.map((item) => (
                <li key={item}>
                  <Link to={item.toLowerCase()}>{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}

          <div>
            <h3 className="footer-title">Contacto</h3>

            <div className="footer-contact">
              <div className="contact-item">
                <Mail size={20} />

                <span>contacto@labitacoradelruido.com</span>
              </div>

              <div className="contact-item">
                <MapPin size={20} />

                <span>Buenos Aires, Argentina</span>
              </div>
            </div>

            <button
              className="back-top-btn"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
            >
              <ArrowUp size={18} />
              Volver arriba
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 La Bitácora del Ruido.</p>

          <p>
            Diseñado y desarrollado por
            <span className="author">Diego Quintanilla</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
