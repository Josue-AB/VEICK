function Vision() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white border border-gray-100 rounded-2xl p-10 shadow-sm relative overflow-hidden hover:bg-green-100">

          {/* Barra de acento superior */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-teal-500 rounded-t-2xl" />

          {/* Ícono */}
          <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center mb-5">
            <svg className="w-5 h-5 text-teal-700" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3" />
              <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
            </svg>
          </div>

          {/* Etiqueta */}
          <p className="text-xs font-semibold tracking-widest uppercase text-teal-700 mb-1">
            Visión
          </p>

          {/* Título */}
          <h2 className="text-3xl font-serif text-gray-900 mb-3">
            Hacia dónde vamos
          </h2>

          {/* Línea divisora */}
          <div className="w-8 h-0.5 bg-teal-500 rounded mb-5" />

          {/* Texto */}
          <p className="text-base text-gray-500 font-light leading-relaxed max-w-xl">
            Ser un{" "}
            <span className="font-medium text-gray-800">
              referente en soluciones tecnológicas
            </span>{" "}
            para personas con discapacidad auditiva y verbal, promoviendo la
            inclusividad y la igualdad de oportunidades para todos.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Vision;
