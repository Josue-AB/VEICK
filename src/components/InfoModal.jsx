function InfoModal({ onClose }) {
  const images = [
    {
      src: "A_F.jpeg",
      alt: "Detección de señas",
      description: "El sistema detecta señas en tiempo real usando la cámara del dispositivo.",
    },
    {
      src: "G_N.jpeg",
      alt: "Interpretación con IA",
      description: "La IA traduce los gestos al texto instantáneamente con alta precisión.",
    },
    {
      src: "O_T.jpeg",
      alt: "Comunicación inclusiva",
      description: "Facilita la comunicación entre personas sordas y oyentes sin barreras.",
    },
  ];

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-3xl w-full p-6 relative max-h-[90vh] overflow-y-auto">

        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black text-xl"
        >
          ✕
        </button>

        {/* Encabezado */}
        <h2 className="text-2xl font-bold mb-2">Sobre el sistema</h2>
        <p className="mb-6 text-gray-600">
          Este sistema permite interpretar lenguaje de señas mediante IA y mejora la comunicación inclusiva en tiempo real.
        </p>

        {/* Grid de 3 imágenes */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {images.map((img, index) => (
            <div key={index} className="flex flex-col">
              <img
                src={img.src}
                alt={img.alt}
                className="rounded-xl w-full aspect-video object-cover mb-2"
              />
              <p className="text-sm text-gray-600 text-center">
                {img.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default InfoModal;