import { useState } from "react";
import "./Contacto.css";
import { Mail, User, MessageSquare, Send } from "lucide-react";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

export default function Contacto() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const [loading, setLoading] = useState(false);
  const [estado, setEstado] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setEstado(null);

    if (!form.nombre.trim() || !form.email.trim() || !form.mensaje.trim()) {
      setEstado({
        tipo: "error",
        mensaje: "Todos los campos son obligatorios.",
      });
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("/api/contacto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Error desconocido");
      }

      setEstado({
        tipo: "ok",
        mensaje: "Mensaje enviado correctamente.",
      });

      setForm({
        nombre: "",
        email: "",
        mensaje: "",
      });
    } catch (error) {
      setEstado({
        tipo: "error",
        mensaje: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="contacto">
      <section className="contacto-hero">
        <span>La Bitácora del Ruido</span>

        <h1>Contacto</h1>

        <p>
          ¿Querés invitarnos a cubrir un recital, realizar una entrevista o
          simplemente ponerte en contacto con nosotros? Escribinos.
        </p>
      </section>

      <section className="contacto-container">
        {/* Información */}

        <div className="contacto-info">
          <h2>Hablemos de música 🎸</h2>

          <p>
            Estamos abiertos a propuestas, acreditaciones, colaboraciones y
            consultas generales.
          </p>

          <div className="info-item">
            <Mail />
            <span>Labitacoradelruido@gmail.com</span>
          </div>

          <div className="redes">
            <a href="https://www.instagram.com/labitacoradelruido?igsh=MXQ2cGtoeWZ5ZGlzbA==">
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

        <form className="contacto-form" onSubmit={handleSubmit}>
          <div className="input-group">
          <User size={18}/>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre completo"
            value={form.nombre}
            onChange={handleChange}
            />
            </div>

          <div className="input-group">
          <Mail size={18}/>
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={form.email}
            onChange={handleChange}
            />
            </div>

          <div className="input-group textarea">
          <MessageSquare size={18}/>
          <textarea
            rows="6"
            name="mensaje"
            placeholder="Escribí tu mensaje..."
            value={form.mensaje}
            onChange={handleChange}
            />
            </div>

          {estado && (
            <div
              className={estado.tipo === "ok" ? "mensaje-ok" : "mensaje-error"}
            >
              {estado.mensaje}
            </div>
          )}

          <button type="submit" disabled={loading}>
            <Send size={18} />

            {loading ? "Enviando..." : "Enviar mensaje"}
          </button>
        </form>
      </section>
    </main>
  );
}
