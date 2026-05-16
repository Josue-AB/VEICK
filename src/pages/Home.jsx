import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import VideoSection from "../components/VideoSection";
import Beneficios from "../components/Beneficios";
import Footer from "../components/Footer";
import Vision from "../components/Vision";
import Mision from "../components/Mision";

export default function Home({
  usuario,
  setUsuario,
}) {

  const cerrarSesion = () => {
    localStorage.removeItem("usuario");
    setUsuario(null);
  };

  return (
    <>
      <Navbar
        usuario={usuario}
        cerrarSesion={cerrarSesion}
      />

      <div className="bg-blue-100 text-gray-800 pt-20 min-h-screen">

        {usuario && (
          <div className="text-center py-4">
            <h2 className="text-xl font-semibold text-[#1a3f7a]">
              Hola, {usuario?.nombre} 👋
            </h2>
          </div>
        )}

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