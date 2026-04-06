function Hero() {
  return (
    <section className="relative h-[500px] flex items-center justify-center">

      {/* IMAGEN DE FONDO */}
      <img
        src="/icon_principal.jpg"
        alt="hero"
        className="absolute w-full h-full object-cover"
      />

      {/* OVERLAY OSCURO */}
      <div className="absolute w-full h-full bg-black/50"></div>

      {/* CONTENIDO */}
      <div className="relative text-center text-white px-6">
        <h1 className="text-5xl font-bold">
          Comunicación sin Límites
        </h1>

        <p className="mt-4 text-lg max-w-xl mx-auto">
          Sistema interprete de lenguaje de señas por modelado de IA.
        </p>

        <button className="mt-6 bg-orange-500 px-6 py-3 rounded-lg hover:bg-orange-600 transition">
          Conocer más
        </button>
      </div>

    </section>
  );
}

export default Hero;