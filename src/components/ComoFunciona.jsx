function ComoFunciona() {
  const steps = [
    {
      num: "1",
      title: "Captura en tiempo real",
      desc: "La cámara detecta las manos y el movimiento corporal del usuario con precisión frame a frame.",
    },
    {
      num: "2",
      title: "Reconocimiento con IA",
      desc: "Nuestro modelo interpreta la Lengua de Señas Mexicana y la convierte en texto en milisegundos.",
    },
    {
      num: "3",
      title: "Diálogos automáticos",
      desc: "El audio del entorno se transcribe al instante para que el usuario lea lo que ocurre a su alrededor.",
    },
    {
      num: "4",
      title: "Intérpretacion bidireccional",
      desc: "Un algoritmo traduce texto o voz a señas, permitiendo comunicación completamente bidireccional.",
    },
  ];

  const benefits = [
    {
      title: "Privacidad garantizada",
      desc: "El procesamiento ocurre en el dispositivo. Tus señas no se almacenan ni se envían a servidores externos.",
      bg: "bg-orange-50",
      iconColor: "text-orange-500",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
    {
      title: "Respuesta en menos de 1s",
      desc: "Latencia mínima para que la conversación fluya de manera natural y sin interrupciones.",
      bg: "bg-purple-50",
      iconColor: "text-purple-600",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
    },
    {
      title: "Para toda la familia",
      desc: "Interfaz intuitiva diseñada para cualquier edad, sin necesidad de conocimientos técnicos.",
      bg: "bg-teal-50",
      iconColor: "text-teal-600",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="como-funciona"
      className="py-20 px-6 bg-white"
    >
      <div className="max-w-5xl mx-auto">

        <p className="text-sm font-medium text-orange-500 uppercase tracking-widest mb-2">
          ¿Cómo funciona?
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
          Todo lo que VEICK hace por ti
        </h2>
        <p className="text-gray-500 text-base max-w-xl leading-relaxed mb-12">
          Cuatro pasos simples que eliminan la barrera entre el mundo sonoro
          y el mundo silencioso.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {steps.map((s) => (
            <div
              key={s.num}
              className="bg-gray-50 rounded-2xl p-5"
            >
              <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-medium mb-4">
                {s.num}
              </div>
              <h3 className="text-sm font-medium text-gray-900 mb-1">{s.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="flex gap-4 items-start border border-gray-100 rounded-2xl p-5"
            >
              <div className={`w-9 h-9 ${b.bg} ${b.iconColor} rounded-xl flex items-center justify-center flex-shrink-0`}>
                {b.icon}
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-1">{b.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ComoFunciona;