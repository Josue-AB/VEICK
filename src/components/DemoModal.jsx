import { useEffect } from "react";

const demoSteps = [
  {
    num: "01",
    title: "El usuario hace señas",
    desc: "La cámara capta el movimiento en tiempo real sin lag visible.",
  },
  {
    num: "02",
    title: "IA lo interpreta",
    desc: "El modelo reconoce la seña y genera texto en menos de 1 segundo.",
  },
  {
    num: "03",
    title: "Señas a voz",
    desc: "El interlocutor escucha el mensaje de forma clara e inmediata.",
  },
  {
    num: "04",
    title: "Respuesta en señas",
    desc: "El avatar traduce la respuesta de vuelta a LSM automáticamente.",
  },
];

function DemoModal({ onClose }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-2xl w-full max-w-lg overflow-hidden">

        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <h2 className="text-base font-medium text-gray-900">
            Demostración — VEICK en acción
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-xl leading-none px-1"
          >
            ✕
          </button>
        </div>

        {/* Video */}
        <div className="bg-[#0f0f1a] h-56 flex flex-col items-center justify-center gap-3">
          {/*
            REEMPLAZA este bloque con tu video real:

            Opción A — video local:
            <video controls className="w-full h-full object-cover">
              <source src="/videos/demo.mp4" type="video/mp4" />
            </video>

            Opción B — YouTube embed:
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/TU_VIDEO_ID"
              title="Demo VEICK"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          */}
          <div className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-orange-600 transition-colors">
            <svg className="w-6 h-6 ml-1" viewBox="0 0 24 24" fill="white">
              <path d="M5 3l14 9-14 9z" />
            </svg>
          </div>
          <p className="text-xs text-white/40">Tu video de demostración va aquí</p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-2 gap-3 p-5">
          {demoSteps.map((s) => (
            <div key={s.num} className="bg-gray-50 rounded-xl p-4">
              <p className="text-[10px] font-medium text-orange-500 uppercase tracking-wider mb-1">
                Paso {s.num}
              </p>
              <h3 className="text-sm font-medium text-gray-900 mb-1">{s.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex gap-3 px-5 pb-5">
          <button
            onClick={onClose}
            className="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-700 hover:bg-orange-200 transition-colors"
          >
            Cerrar
          </button>
        </div>

      </div>
    </div>
  );
}

export default DemoModal;
