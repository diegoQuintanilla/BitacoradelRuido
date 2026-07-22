import "./Contacto.css";
import {
  Mail,
  User,
  MessageSquare,
  Send,
} from "lucide-react";

import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

export default function Contacto() {
  return (
    <main className="contacto">

      <section className="contacto-hero">

        <span>La Bitácora del Ruido</span>

        <h1>Contacto</h1>

        <p>
          ¿Querés invitarnos a cubrir un recital, realizar una entrevista
          o simplemente ponerte en contacto con nosotros?
          Escribinos.
        </p>

      </section>

      <section className="contacto-container">

        {/* Información */}

        <div className="contacto-info">

          <h2>Hablemos de música 🎸</h2>

          <p>
            Estamos abiertos a propuestas, acreditaciones,
            colaboraciones y consultas generales.
          </p>

          <div className="info-item">
            <Mail />
            <span>contacto@labitacoradelruido.com</span>
          </div>

          <div className="redes">

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaFacebook />
            </a>

            <a href="#">
              <FaYoutube />
            </a>

          </div>

        </div>

        {/* Formulario */}

        <form className="contacto-form">

          <div className="input-group">
            <User size={18}/>
            <input
              type="text"
              placeholder="Nombre completo"
            />
          </div>

          <div className="input-group">
            <Mail size={18}/>
            <input
              type="email"
              placeholder="Correo electrónico"
            />
          </div>

          <div className="input-group textarea">
            <MessageSquare size={18}/>
            <textarea
              rows="6"
              placeholder="Escribí tu mensaje..."
            ></textarea>
          </div>

          <button>

            <Send size={18}/>

            Enviar mensaje

          </button>

        </form>

      </section>

    </main>
  );
}