import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import VideoSection from "../components/VideoSection";
import Problema from "../components/Problema";
import Solucion from "../components/Solucion";
import Beneficios from "../components/Beneficios";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      {/* CONTENIDO */}
      <div className="bg-blue-100 text-gray-800 pt-20 min-h-screen">
        <Hero />
        <VideoSection />
        <Problema />
        <Solucion />
        <Beneficios />
        <Footer />
      </div>
    </>
  );
}

export default Home;