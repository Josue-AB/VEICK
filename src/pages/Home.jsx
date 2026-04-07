import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import VideoSection from "../components/VideoSection";
import Beneficios from "../components/Beneficios";
import Footer from "../components/Footer";
import Vision from "../components/Vision";
import Mision from "../components/Mision";

function Home() {
  return (
    <>
      <Navbar />

      {/* CONTENIDO */}
      <div className="bg-blue-100 text-gray-800 pt-20 min-h-screen">
        <Hero />
        <VideoSection />
        <Vision />
        <Mision />
        <Beneficios />
        <Footer />
      </div>
    </>
  );
}

export default Home;