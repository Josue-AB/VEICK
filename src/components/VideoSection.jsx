import { useState } from "react";

function VideoSection() {
  const [open, setOpen] = useState(false);

  return (
    <section className="flex justify-center py-20 bg-blue-50">
      
      {/* MINIATURA / BOTÓN */}
      <div
        onClick={() => setOpen(true)}
        className="max-w-4xl w-full px-4 cursor-pointer group"
      >
        <div className="relative">
          
          {/* IMAGEN PREVIEW (puedes cambiarla) */}
          <img
            src="/preview2.jpg"
            alt="video preview"
            className="w-full rounded-2xl shadow-xl"
          />

          {/* BOTÓN PLAY */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/80 backdrop-blur-md p-6 rounded-full shadow-lg 
                            group-hover:scale-110 transition-all duration-300">
              ▶
            </div>
          </div>

        </div>
      </div>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          
          {/* CONTENEDOR VIDEO */}
          <div className="relative w-full max-w-4xl px-4">

            {/* BOTÓN CERRAR */}
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-10 right-0 text-white text-2xl"
            >
              ✕
            </button>

            {/* VIDEO */}
            <iframe
  className="w-full h-[500px] rounded-xl"
  src="https://www.youtube.com/embed/oEHjNclhCU0?autoplay=1"
  title="YouTube video"
  allow="autoplay; encrypted-media"
  allowFullScreen
></iframe>

          </div>

        </div>
      )}

    </section>
  );
}

export default VideoSection;