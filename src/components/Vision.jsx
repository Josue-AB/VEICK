function Vision() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div
          className="relative overflow-hidden rounded-2xl border border-blue-200"
          style={{ background: "#E6F1FB", minHeight: "260px" }}
        >
          {/* Círculos decorativos */}
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              right: "-50px",
              top: "-50px",
              width: "200px",
              height: "200px",
              background: "rgba(55,138,221,0.08)",
            }}
          />
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              right: "20px",
              top: "20px",
              width: "100px",
              height: "100px",
              border: "1.5px solid rgba(55,138,221,0.15)",
            }}
          />

          {/* Contenido */}
          <div className="relative z-10 p-10 pb-0">
            <div className="flex items-start gap-4">
              {/* Ícono */}
              <div className="w-11 h-11 rounded-xl bg-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                <svg
                  className="w-5 h-5 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="3" />
                  <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
                </svg>
              </div>

              <div>
                {/* Etiqueta */}
                <p className="text-xs font-semibold tracking-widest uppercase text-blue-700 mb-1">
                  Visión
                </p>

                {/* Título */}
                <h2 className="text-3xl font-serif text-blue-950 mb-3">
                  Hacia dónde vamos
                </h2>

                {/* Línea divisora */}
                <div className="w-8 h-0.5 bg-blue-600 rounded mb-5" />

                {/* Texto */}
                <p className="text-base text-blue-800 font-light leading-relaxed max-w-xl">
                  Ser un{" "}
                  <span className="font-medium text-blue-950">
                    referente en soluciones tecnológicas
                  </span>{" "}
                  para personas con discapacidad auditiva y verbal, promoviendo
                  la inclusividad y la igualdad de oportunidades para todos.
                </p>
              </div>
            </div>
          </div>

          {/* Olas inferiores */}
          <svg
            className="block w-full mt-8"
            viewBox="0 0 700 70"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,35 C100,5 200,65 350,35 C500,5 600,55 700,30 L700,70 L0,70 Z"
              fill="#B5D4F4"
              opacity="0.5"
            />
            <path
              d="M0,50 C120,20 250,70 400,40 C520,15 630,60 700,45 L700,70 L0,70 Z"
              fill="#378ADD"
              opacity="0.25"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Vision;