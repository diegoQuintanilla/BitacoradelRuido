import "./ComingSoon.css";
import { Construction, Hammer, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function ComingSoon({
  titulo = "Próximamente",
  descripcion = "Estamos trabajando para ofrecerte una nueva experiencia."
}) {
  return (
    <main className="coming-soon">

      <div className="coming-container">

        <div className="coming-icon">
          <Construction size={80} />
        </div>

        <span className="coming-tag">
          La Bitácora del Ruido
        </span>

        <h1>{titulo}</h1>

        <p>
          {descripcion}
        </p>

        <div className="coming-status">

          <Hammer size={18} />

          <span>
            Esta sección se encuentra en desarrollo.
          </span>

        </div>

        <Link
          to="/"
          className="coming-button"
        >
          <ArrowLeft size={20} />
          Volver al Inicio
        </Link>

      </div>

    </main>
  );
}