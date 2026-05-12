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
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      style={{ background: "rgba(4,44,83,0.75)" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="w-full max-w-lg overflow-hidden rounded-2xl"
        style={{ border: "0.5px solid #B5D4F4" }}
      >

        {/* Header */}
        <div
          className="flex items-center justify-between px-5 py-4"
          style={{ background: "#E6F1FB", borderBottom: "0.5px solid #B5D4F4" }}
        >
          <h2 className="text-base font-semibold" style={{ color: "#042C53" }}>
            Demostración — VEICK en acción
          </h2>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
            style={{ background: "#fff", border: "0.5px solid #B5D4F4", color: "#185FA5" }}
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Video */}
        <div
          className="relative h-52 flex flex-col items-center justify-center overflow-hidden"
          style={{ background: "#042C53" }}
        >
          {/* Puntos decorativos */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1.5px, transparent 1.5px)",
              backgroundSize: "20px 20px",
            }}
          />
          {/* Anillos */}
          <div className="absolute rounded-full pointer-events-none"
            style={{ width: "140px", height: "140px", border: "1px solid rgba(255,255,255,0.08)" }} />
          <div className="absolute rounded-full pointer-events-none"
            style={{ width: "100px", height: "100px", border: "1px solid rgba(255,255,255,0.1)" }} />

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
          <div
            className="relative z-10 w-14 h-14 rounded-full flex items-center justify-center cursor-pointer transition-opacity hover:opacity-80"
            style={{ background: "#185FA5", border: "3px solid rgba(255,255,255,0.2)" }}
          >
            <svg className="w-6 h-6 ml-1" viewBox="0 0 24 24" fill="white">
              <path d="M5 3l14 9-14 9z" />
            </svg>
          </div>
          <p className="relative z-10 text-xs mt-3" style={{ color: "rgba(255,255,255,0.4)" }}>
            Tu video de demostración va aquí
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-2 gap-3 p-5" style={{ background: "#fff" }}>
          {demoSteps.map((s) => (
            <div
              key={s.num}
              className="relative overflow-hidden rounded-xl p-4"
              style={{ background: "#E6F1FB", border: "0.5px solid #B5D4F4" }}
            >
              {/* Círculo decorativo */}
              <div
                className="absolute rounded-full pointer-events-none"
                style={{
                  right: "-16px", bottom: "-16px",
                  width: "64px", height: "64px",
                  background: "rgba(55,138,221,0.1)",
                }}
              />
              <p
                className="text-xs font-bold uppercase tracking-widest mb-1"
                style={{ color: "#185FA5" }}
              >
                Paso {s.num}
              </p>
              <h3 className="text-sm font-semibold mb-1" style={{ color: "#042C53" }}>
                {s.title}
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: "#0C447C" }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-5 pb-5" style={{ background: "#fff" }}>
          <button
            onClick={onClose}
            className="w-full py-3 rounded-xl text-sm font-medium transition-opacity hover:opacity-90"
            style={{ background: "#185FA5", color: "#fff" }}
          >
            Cerrar
          </button>
        </div>

      </div>
    </div>
  );
}

export default DemoModal;