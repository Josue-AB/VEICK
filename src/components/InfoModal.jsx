function InfoModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

      <div className="bg-white rounded-2xl max-w-3xl w-full p-6 relative">

        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black text-xl"
        >
          ✕
        </button>

        {/* Contenido */}
        <h2 className="text-2xl font-bold mb-4">Sobre el sistema</h2>

        <p className="mb-4">
          Este sistema permite interpretar lenguaje de señas mediante IA...
        </p>

        {/* Imagen */}
        <img
          src="/demo.jpg"
          alt="demo"
          className="rounded-lg w-full mb-4"
        />

        <p>
          Mejora la comunicación inclusiva en tiempo real.
        </p>

      </div>
    </div>
  );
}

export default InfoModal;