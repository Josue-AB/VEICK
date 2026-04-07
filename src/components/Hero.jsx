function Hero() {
  const handleConocerMas = () => {
    
    const seccion = document.getElementById("beneficios");
    if (seccion) {
      seccion.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/icon_principal.jpg')" }}
      />

      {/* Overlay degradado: oscuro abajo, semitransparente arriba */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />

      {/* Contenido */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">

        {/* Etiqueta superior */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm
                        border border-white/20 rounded-full px-4 py-1.5 mb-6">
          <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
          <span className="text-white/90 text-sm font-medium tracking-wide">
            Tecnología de lenguaje de señas
          </span>
        </div>

        {/* Título */}
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
          Comunicación{" "}
          <span className="text-orange-400">sin Límites</span>
        </h1>

        {/* Subtítulo */}
        <p className="text-lg md:text-xl text-white/80 font-light max-w-xl mx-auto mb-10 leading-relaxed">
          Sistema intérprete de lenguaje de señas potenciado por{" "}
          <span className="text-white font-medium">modelado de IA</span> para una
          comunicación más inclusiva.
        </p>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleConocerMas}
            className="bg-orange-500 hover:bg-orange-400 active:scale-95
                       text-white font-semibold text-base px-8 py-3.5 rounded-full
                       shadow-lg shadow-orange-500/30 transition-all duration-200"
          >
            Conocer más
          </button>

          <button
            className="text-white/80 hover:text-white font-medium text-base
                       flex items-center gap-2 transition-colors duration-200"
          >
            <span className="w-9 h-9 rounded-full border border-white/30 flex items-center
                             justify-center hover:border-white transition-colors duration-200">
              <svg className="w-4 h-4 ml-0.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            Ver demo
          </button>
        </div>
      </div>

      {/* Flecha de scroll abajo */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/50" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>

    </section>
  );
}

export default Hero;
