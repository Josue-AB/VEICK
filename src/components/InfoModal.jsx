function InfoModal({ onClose }) {
  const images = [
    { src: "A_F.jpeg", emoji: "🤟", label: "Señas A – F", description: "Primeras letras del abecedario en LSM capturadas para entrenamiento." },
    { src: "G_N.jpeg", emoji: "✋", label: "Señas G – N", description: "Gestos intermedios con variaciones de posición y ángulo de mano." },
    { src: "O_T.jpeg", emoji: "🖐️", label: "Señas O – T", description: "Señas con dedos extendidos y configuraciones de mano más complejas." },
  ];

  const steps = [
    { num: "01", icon: "📷", title: "Captura en cámara", desc: "La cámara detecta la mano del usuario frame a frame en tiempo real." },
    { num: "02", icon: "🧠", title: "Modelado con IA", desc: "El modelo clasifica el gesto usando una red neuronal entrenada con señas del LSM." },
    { num: "03", icon: "💬", title: "Traducción al texto", desc: "El resultado se muestra como texto legible, facilitando la comunicación." },
  ];

  const techs = ["🐍 Python", "🤖 TensorFlow / Keras", "👁️ OpenCV", "🗂️ MediaPipe", "📊 Dataset LSM", "🌐 React"];

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-[#f5f2ec] rounded-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto relative shadow-2xl">

        {/* Cerrar */}
        <button onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full border border-stone-300 bg-white text-sm flex items-center justify-center z-10 hover:bg-black hover:text-white transition-all hover:rotate-90">
          ✕
        </button>

        {/* HERO */}
        <div className="bg-[#1a6b4a] rounded-t-2xl px-9 py-10 relative overflow-hidden">
          <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 text-white text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-green-300 animate-pulse" />
            Sistema Activo · LSM + IA
          </div>
          <h2 className="text-3xl font-black text-white leading-tight mb-2">
            Intérprete Inteligente de<br/>
            <span className="text-green-300">Lengua de Señas Mexicana</span>
          </h2>
          <p className="text-white/75 text-sm leading-relaxed max-w-lg">
            Sistema de visión artificial que reconoce y traduce gestos del LSM en tiempo real, eliminando barreras comunicativas entre la comunidad sorda y oyente.
          </p>
          <div className="flex border-t border-white/20 mt-6 pt-5">
            {[["LSM","Lengua de señas mexicana"],["CNN","Red neuronal base"],["Real-time","Detección en vivo"],["A–Z","Abecedario + señas"]].map(([n,l]) => (
              <div key={n} className="flex-1 text-center border-l border-white/20 first:border-0">
                <span className="block text-xl font-black text-white">{n}</span>
                <span className="block text-[10px] text-white/60 mt-0.5">{l}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="px-9 py-8 space-y-8">

          {/* PASOS */}
          <div>
            <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-[#1a6b4a] mb-4 flex items-center gap-2 after:content-[''] after:flex-1 after:h-px after:bg-stone-200">¿Cómo funciona?</p>
            <div className="grid grid-cols-3 gap-3">
              {steps.map(s => (
                <div key={s.num} className="bg-white border border-stone-200 rounded-xl p-4 hover:shadow-md hover:-translate-y-0.5 transition-all">
                  <span className="text-[11px] font-bold text-[#1a6b4a] tracking-wide">PASO {s.num}</span>
                  <span className="text-2xl block my-2">{s.icon}</span>
                  <p className="font-bold text-[13px] text-stone-900 mb-1">{s.title}</p>
                  <p className="text-[12px] text-stone-500 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* IMÁGENES */}
          <div>
            <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-[#1a6b4a] mb-4 flex items-center gap-2 after:content-[''] after:flex-1 after:h-px after:bg-stone-200">Dataset de señas</p>
            <div className="grid grid-cols-3 gap-3">
              {images.map((img, i) => (
                <div key={i} className="bg-white border border-stone-200 rounded-xl overflow-hidden hover:scale-[1.02] transition-transform">
                  <img src={img.src} alt={img.label}
                    className="w-full aspect-[4/3] object-cover"
                    onError={e => { e.target.style.display='none'; e.target.nextSibling.style.display='flex'; }}
                  />
                  <div className="hidden aspect-[4/3] bg-green-50 items-center justify-center flex-col gap-1 text-3xl">
                    {img.emoji}
                    <span className="text-[10px] text-green-700 opacity-60">{img.src}</span>
                  </div>
                  <div className="p-3">
                    <strong className="block text-[12px] font-bold text-stone-900 mb-1">{img.label}</strong>
                    <p className="text-[11px] text-stone-500 leading-snug">{img.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* TECNOLOGÍAS */}
          <div>
            <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-[#1a6b4a] mb-3 flex items-center gap-2 after:content-[''] after:flex-1 after:h-px after:bg-stone-200">Tecnologías empleadas</p>
            <div className="flex flex-wrap gap-2">
              {techs.map(t => (
                <span key={t} className="bg-white border border-stone-200 rounded-full px-3 py-1.5 text-[12px] text-stone-800 font-medium hover:border-[#1a6b4a] hover:bg-green-50 transition-colors">{t}</span>
              ))}
            </div>
          </div>

          {/* IMPACTO */}
          <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex gap-3">
            <span className="text-xl">♿</span>
            <p className="text-[12.5px] text-[#1a6b4a] leading-relaxed">
              <strong>Impacto social:</strong> En México existen más de 2.3 millones de personas con discapacidad auditiva. Este sistema busca ser una herramienta accesible para reducir la brecha comunicativa y promover la inclusión.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default InfoModal;