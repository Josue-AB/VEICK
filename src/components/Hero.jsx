import { useState } from "react";
import DemoModal from "./DemoModal";
import InfoModal from "./InfoModal";

function Hero() {
  const [showDemo, setShowDemo] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

        {/* Imagen de fondo */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/icon_principal.jpg')" }}
        />


        {/* Contenido */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">

          {/* Etiqueta */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm
                          border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-300 animate-pulse" />
            <span className="text-black/90 text-sm font-medium tracking-wide">
              Tecnología de lenguaje de señas
            </span>
          </div>

          {/* Título */}
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
            Comunicación{" "}
            <span className="text-blue-300">sin Límites</span>
          </h1>

          {/* Subtítulo */}
          <p className="text-lg md:text-xl text-black/80 font-light max-w-xl mx-auto mb-10 leading-relaxed">
            Sistema intérprete de lenguaje de señas potenciado por{" "}
            <span className="text-black font-medium">modelado de IA</span> para una
            comunicación más inclusiva.
          </p>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">

            {/* CONOCER MÁS — azul fuerte sólido */}
            <button
  onClick={() => setShowInfo(true)}
  className="inline-flex items-center gap-2 
             bg-[#185FA5] hover:bg-[#0C447C] active:scale-95
             text-white font-semibold text-base
             px-8 py-3.5 rounded-full
             transition-all duration-200"
>
  Conocer más
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
</button>

            {/* VER DEMO */}
            <button
  onClick={() => setShowDemo(true)}
  className="inline-flex items-center gap-2.5 
             bg-[#185FA5] hover:bg-[#0C447C] active:scale-95
             text-white font-semibold text-base
             pl-2.5 pr-6 py-2.5 rounded-full
             transition-all duration-200"
>
  <span className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0
                   bg-white/15 border border-white/30">
    <svg className="w-4 h-4 ml-0.5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 5v14l11-7z" />
    </svg>
  </span>
  Ver demo
</button>
          </div>
        </div>

        {/* Flecha */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-blue-300/60" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>

      </section>

      {showDemo && <DemoModal onClose={() => setShowDemo(false)} />}
      {showInfo && <InfoModal onClose={() => setShowInfo(false)} />}
    </>
  );
}

export default Hero;