import Hero from "../componentes/layout/Hero/Hero";
import NoticiasSection from "../componentes/sections/NoticiasSection/NoticiasSection";
import CoberturasSection from "../componentes/sections/CoberturasSection/CoberturasSection";
import EspecialesSection from "../componentes/sections/EspecialesSection/EspecialesSection";
import ShowsSection from "../componentes/sections/ShowsSection/ShowsSection";

const Home = () => {
  return (
    <>
      <Hero/>
      <CoberturasSection/>
      <ShowsSection/>
      <NoticiasSection/>
      <EspecialesSection/>
    </>
  );
};

export default Home;
