function Beneficios() {
  const beneficios = [
    {
      color: "teal",
      icon: (
        <svg className="w-5 h-5 text-teal-700" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 8h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2" />
          <path d="M12 2v13M9 5l3-3 3 3" />
        </svg>
      ),
      label: "Beneficio",
      titulo: "Accesibilidad",
      subtitulo: "Comunicación sin barreras",
      texto: (
        <>
          La accesibilidad que ofrece nuestro proyecto es la{" "}
          <span className="font-medium text-gray-800">comunicación en cualquier entorno</span>,
          con versatilidad de adaptación independiente para cada simulación.
        </>
      ),
    },
    {
      color: "blue",
      icon: (
        <svg className="w-5 h-5 text-blue-700" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
        </svg>
      ),
      label: "Beneficio",
      titulo: "Tecnología",
      subtitulo: "IA de reconocimiento gestual",
      texto: (
        <>
          Un modelo de IA{" "}
          <span className="font-medium text-gray-800">altamente entrenado para predecir gestos biométricos</span>,
          interpretando palabras y frases en tiempo real.
        </>
      ),
    },
    {
      color: "purple",
      icon: (
        <svg className="w-5 h-5 text-purple-700" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      label: "Beneficio",
      titulo: "Impacto social",
      subtitulo: "Inclusión real y medible",
      texto: (
        <>
          Inclusión para personas con discapacidad auditiva y{" "}
          <span className="font-medium text-gray-800">reducción significativa de errores de comunicación</span>{" "}
          entre personas con discapacidad y la comunidad.
        </>
      ),
    },
  ];

  const accentMap = {
    teal:   { bar: "bg-teal-500",   iconBg: "bg-teal-50",   label: "text-teal-700",   divider: "bg-teal-500"   },
    blue:   { bar: "bg-blue-500",   iconBg: "bg-blue-50",   label: "text-blue-700",   divider: "bg-blue-500"   },
    purple: { bar: "bg-purple-500", iconBg: "bg-purple-50", label: "text-purple-700", divider: "bg-purple-500" },
  };

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {beneficios.map(({ color, icon, label, titulo, subtitulo, texto }) => {
          const a = accentMap[color];
          return (
            <div
              key={titulo}
              className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm relative overflow-hidden
                         transition-transform duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              {/* Barra de acento superior */}
              <div className={`absolute top-0 left-0 right-0 h-1 ${a.bar} rounded-t-2xl`} />

              {/* Ícono */}
              <div className={`w-10 h-10 rounded-xl ${a.iconBg} flex items-center justify-center mb-5`}>
                {icon}
              </div>

              {/* Etiqueta */}
              <p className={`text-xs font-semibold tracking-widest uppercase ${a.label} mb-1`}>
                {label}
              </p>

              {/* Título */}
              <h2 className="text-2xl font-serif text-gray-900 mb-1">
                {titulo}
              </h2>

              {/* Subtítulo */}
              <p className="text-sm text-gray-400 mb-3">{subtitulo}</p>

              {/* Línea divisora */}
              <div className={`w-8 h-0.5 ${a.divider} rounded mb-4`} />

              {/* Texto */}
              <p className="text-base text-gray-500 font-light leading-relaxed">
                {texto}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Beneficios;
