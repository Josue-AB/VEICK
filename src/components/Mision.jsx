function Mision() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div
          className="relative overflow-hidden rounded-2xl border border-blue-200"
          style={{ background: "#E6F1FB", minHeight: "260px" }}
        >
          {/* Círculos decorativos (lado opuesto a Vision) */}
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              left: "-40px",
              top: "-40px",
              width: "180px",
              height: "180px",
              background: "rgba(55,138,221,0.08)",
            }}
          />
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              left: "30px",
              top: "30px",
              width: "90px",
              height: "90px",
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
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v4l3 3" />
                </svg>
              </div>

              <div>
                {/* Etiqueta */}
                <p className="text-xs font-semibold tracking-widest uppercase text-blue-700 mb-1">
                  Misión
                </p>

                {/* Título */}
                <h2 className="text-3xl font-serif text-blue-950 mb-3">
                  Lo que hacemos hoy
                </h2>

                {/* Línea divisora */}
                <div className="w-8 h-0.5 bg-blue-600 rounded mb-5" />

                {/* Texto */}
                <p className="text-base text-blue-800 font-light leading-relaxed max-w-xl">
                  Brindar apoyo a personas con discapacidad auditiva y verbal
                  mediante{" "}
                  <span className="font-medium text-blue-950">
                    tecnología de reconocimiento de señas
                  </span>{" "}
                  y un comunicador de texto a voz, mejorando su calidad de vida
                  y comunicación diaria.
                </p>
              </div>
            </div>
          </div>

          {/* Olas inferiores (espejo) */}
          <svg
            className="block w-full mt-8"
            viewBox="0 0 700 70"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M700,35 C600,5 500,65 350,35 C200,5 100,55 0,30 L0,70 L700,70 Z"
              fill="#B5D4F4"
              opacity="0.5"
            />
            <path
              d="M700,50 C580,20 450,70 300,40 C180,15 70,60 0,45 L0,70 L700,70 Z"
              fill="#378ADD"
              opacity="0.25"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Mision;