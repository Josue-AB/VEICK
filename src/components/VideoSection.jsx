import { useState } from "react";

function VideoSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="bg-[#f0f5fc] py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Encabezado */}
        <div className="text-center mb-12">
          <span className="inline-block bg-[#e6f1fb] text-[#1a3f7a] text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            ¿Cómo funciona?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a3f7a] mb-4">
            Mira VEICK en acción
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
            En menos de 2 minutos descubre cómo nuestra IA interpreta la Lengua de Señas
            Mexicana en tiempo real, eliminando barreras de comunicación.
          </p>
        </div>

        {/* Contenedor del video */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#1a3f7a]/20 border border-blue-100">

          {/* Barra superior estilo "ventana" */}
          <div className="bg-[#1a3f7a] px-5 py-3 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-white/20" />
            <span className="w-3 h-3 rounded-full bg-white/20" />
            <span className="w-3 h-3 rounded-full bg-white/20" />
            <span className="ml-4 text-white/60 text-xs font-medium tracking-wide">
              VEICK · Demo en vivo
            </span>
            <span className="ml-auto flex items-center gap-1.5 text-xs text-white/50">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-300 animate-pulse" />
              LSM + IA
            </span>
          </div>

          {/* Video o thumbnail */}
          <div className="relative aspect-video bg-[#0d2147]">

            {/* Reemplaza el src con tu video real */}
            <video
              src="Video_veick.mp4"
              className="w-full h-full object-cover"
              controls={playing}
              poster="/icon_principal.jpg"
            />

            {/* Overlay de play — desaparece al dar click */}
            {!playing && (
              <div
                className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer
                           bg-[#0d2147]/50 backdrop-blur-[2px] group"
                onClick={() => setPlaying(true)}
              >
                {/* Botón play */}
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center
                                shadow-xl shadow-[#1a3f7a]/30
                                group-hover:scale-110 group-hover:bg-blue-50 transition-all duration-300">
                  <svg className="w-8 h-8 text-[#1a3f7a] ml-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-white/80 text-sm font-medium mt-4 tracking-wide">
                  Ver presentación · 1:48 min
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Stats debajo del video */}
        <div className="grid grid-cols-3 gap-4 mt-6">
          {[
            { num: "< 1s",  label: "Tiempo de respuesta" },
            { num: "95%",   label: "Precisión del modelo" },
            { num: "A – Z", label: "Abecedario LSM completo" },
          ].map((s) => (
            <div key={s.num}
              className="bg-white border border-blue-100 rounded-xl py-4 text-center
                         hover:border-[#1a3f7a]/30 transition-colors">
              <p className="text-2xl font-bold text-[#1a3f7a]">{s.num}</p>
              <p className="text-xs text-gray-400 mt-1">{s.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default VideoSection;