function Mision() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white border border-gray-100 rounded-2xl p-10 shadow-sm relative overflow-hidden hover:bg-blue-100">

          {/* Barra de acento superior */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-blue-500 rounded-t-2xl" />

          {/* Ícono */}
          <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
            <svg className="w-5 h-5 text-blue-700" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v4l3 3" />
            </svg>
          </div>

          {/* Etiqueta */}
          <p className="text-xs font-semibold tracking-widest uppercase text-blue-700 mb-1">
            Misión
          </p>

          {/* Título */}
          <h2 className="text-3xl font-serif text-gray-900 mb-3">
            Lo que hacemos hoy
          </h2>

          {/* Línea divisora */}
          <div className="w-8 h-0.5 bg-blue-500 rounded mb-5" />

          {/* Texto */}
          <p className="text-base text-gray-500 font-light leading-relaxed max-w-xl">
            Brindar apoyo a personas con discapacidad auditiva y verbal mediante{" "}
            <span className="font-medium text-gray-800">
              tecnología de reconocimiento de señas
            </span>{" "}
            y un comunicador de texto a voz, mejorando su calidad de vida y
            comunicación diaria.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Mision;