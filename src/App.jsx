import { Routes, Route } from "react-router-dom";

import Header from "./componentes/layout/Header/Header";
import Footer from "./componentes/layout/Footer/Footer";

import Home from "./pages/Home";
import Noticias from "./pages/Noticias/Noticias";
import Coberturas from "./pages/Coberturas/Coberturas";
import Especiales from "./pages/Especiales/Especiales";
import Shows from "./pages/Shows/Shows";
import Contacto from "./pages/Contacto/Contacto";

import CoberturaDetalle from "./detalles/coberturaDetalle/CoberturaDetalle";
import NoticiaDetalle from "./detalles/noticiaDetalle/NoticiaDetalle";
import EspecialDetalle from "./detalles/especialDetalle/EspecialDetalle";
import ShowDetalle from "./detalles/showDetalle/ShowDetalle";

import ScrollToTop from "./componentes/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/noticias" element={<Noticias />} />

        <Route path="/coberturas" element={<Coberturas />} />

        <Route path="/especiales" element={<Especiales />} />

        <Route path="/contacto" element={<Contacto />} />

        <Route path="/shows" element={<Shows />} />

        <Route path="/coberturas/:slug" element={<CoberturaDetalle />} />

        <Route path="/noticias/:slug" element={<NoticiaDetalle />} />

        <Route path="/especiales/:slug" element={<EspecialDetalle />} />

        <Route path="/shows/:slug" element={<ShowDetalle />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
