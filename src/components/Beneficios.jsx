function Beneficios() {
  const beneficios = [
    {
      color: "teal",
      icon: (
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none"
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
          <strong style={{ color: "#04342C", fontWeight: 500 }}>comunicación en cualquier entorno</strong>,
          con versatilidad de adaptación independiente para cada simulación.
        </>
      ),
    },
    {
      color: "blue",
      icon: (
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none"
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
          <strong style={{ color: "#042C53", fontWeight: 500 }}>altamente entrenado para predecir gestos biométricos</strong>,
          interpretando palabras y frases en tiempo real.
        </>
      ),
    },
    {
      color: "purple",
      icon: (
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none"
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
          <strong style={{ color: "#26215C", fontWeight: 500 }}>reducción significativa de errores de comunicación</strong>{" "}
          entre personas con discapacidad y la comunidad.
        </>
      ),
    },
  ];

  const accentMap = {
    teal: {
      bg: "#E1F5EE",
      border: "#9FE1CB",
      iconBg: "#0F6E56",
      label: "#0F6E56",
      bar: "#0F6E56",
      body: "#085041",
      subtitle: "#1D9E75",
      waveFill1: "#9FE1CB",
      waveFill2: "#1D9E75",
      waveDir: false,
    },
    blue: {
      bg: "#E6F1FB",
      border: "#B5D4F4",
      iconBg: "#185FA5",
      label: "#185FA5",
      bar: "#185FA5",
      body: "#0C447C",
      subtitle: "#378ADD",
      waveFill1: "#B5D4F4",
      waveFill2: "#378ADD",
      waveDir: true,
    },
    purple: {
      bg: "#EEEDFE",
      border: "#CECBF6",
      iconBg: "#534AB7",
      label: "#534AB7",
      bar: "#534AB7",
      body: "#3C3489",
      subtitle: "#7F77DD",
      waveFill1: "#CECBF6",
      waveFill2: "#7F77DD",
      waveDir: false,
    },
  };

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {beneficios.map(({ color, icon, label, titulo, subtitulo, texto }) => {
          const a = accentMap[color];
          const w = a.waveDir;
          return (
            <div
              key={titulo}
              className="relative overflow-hidden rounded-2xl"
              style={{
                background: a.bg,
                border: `0.5px solid ${a.border}`,
                minHeight: "280px",
              }}
            >
              {/* Círculo decorativo grande */}
              <div
                className="absolute rounded-full pointer-events-none"
                style={{
                  right: "-40px", top: "-40px",
                  width: "160px", height: "160px",
                  background: `${a.iconBg}12`,
                }}
              />
              {/* Círculo decorativo anillo */}
              <div
                className="absolute rounded-full pointer-events-none"
                style={{
                  right: "15px", top: "15px",
                  width: "80px", height: "80px",
                  border: `1.5px solid ${a.iconBg}22`,
                }}
              />

              {/* Contenido */}
              <div className="relative z-10 p-7 pb-0">
                <div className="flex items-start gap-4">
                  {/* Ícono */}
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: a.iconBg }}
                  >
                    {icon}
                  </div>

                  <div>
                    <p
                      className="text-xs font-semibold tracking-widest uppercase mb-1"
                      style={{ color: a.label }}
                    >
                      {label}
                    </p>
                    <h2 className="text-2xl font-serif mb-1" style={{ color: a.body.replace("0C", "04").replace("08", "04").replace("3C", "26") }}>
                      {titulo}
                    </h2>
                    <p className="text-xs mb-2" style={{ color: a.subtitle }}>{subtitulo}</p>
                    <div className="w-8 mb-4" style={{ height: "3px", borderRadius: "2px", background: a.bar }} />
                    <p className="text-sm leading-relaxed font-light" style={{ color: a.body }}>
                      {texto}
                    </p>
                  </div>
                </div>
              </div>

              {/* Olas inferiores */}
              <svg
                className="block w-full mt-8"
                viewBox="0 0 400 60"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {w ? (
                  <>
                    <path d={`M400,30 C320,5 240,55 150,25 C80,5 30,45 0,25 L0,60 L400,60 Z`} fill={a.waveFill1} opacity="0.5" />
                    <path d={`M400,42 C300,15 200,58 100,35 C40,18 10,50 0,40 L0,60 L400,60 Z`} fill={a.waveFill2} opacity="0.2" />
                  </>
                ) : (
                  <>
                    <path d={`M0,30 C80,5 160,55 250,25 C320,5 370,45 400,25 L400,60 L0,60 Z`} fill={a.waveFill1} opacity="0.5" />
                    <path d={`M0,42 C100,15 200,58 300,35 C360,18 390,50 400,40 L400,60 L0,60 Z`} fill={a.waveFill2} opacity="0.2" />
                  </>
                )}
              </svg>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Beneficios;