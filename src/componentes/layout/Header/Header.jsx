import { useState } from "react";
import "./Header.css";
import { NavLink, Link } from "react-router-dom";
import { Camera, Images, Newspaper, Mic2, Menu, X } from "lucide-react";
import guitarra from "../../../assets/guitarra.png";

const links = [
  { title: "Coberturas", icon: Camera },
  { title: "Shows", icon: Images },
  { title: "Noticias", icon: Newspaper },
  { title: "Especiales", icon: Mic2 },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      {menuOpen && (
        <div className="overlay" onClick={() => setMenuOpen(false)} />
      )}
      <div className="header-container">
        <NavLink to="/" className="logo">
          <img
            src={guitarra}
            alt="La Bitácora del Ruido"
            className="logo-img"
          />
        </NavLink>

        {/* Botón hamburguesa */}
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        <nav className={`nav ${menuOpen ? "active" : ""}`}>
          <ul className="nav-list">
            {links.map(({ title, icon: Icon }) => (
              <li key={title}>
                <NavLink
                  to={title.toLowerCase()}
                  className="nav-link"
                  onClick={() => setMenuOpen(false)}
                >
                  <Icon size={18} className="nav-icon" />
                  <span>{title}</span>
                  <span className="nav-line"></span>
                </NavLink>
              </li>
            ))}
          </ul>

          <Link
            to="/contacto"
            className="contact-btn mobile-btn"
            onClick={() => setMenuOpen(false)}
          >
            Contacto
          </Link>
        </nav>

        <div className="header-buttons">
          <Link to="/contacto" className="contact-btn">
            Contacto
          </Link>
        </div>
      </div>
    </header>
  );
}
