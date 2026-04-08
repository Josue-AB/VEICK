import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const sections = {
  quienes: {
    badge: "Nuestro equipo",
    title: "¿Quiénes somos?",
    subtitle:
      "Somos un equipo comprometido con eliminar las barreras de comunicación para las personas con discapacidad auditiva en México.",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {[
          {
            icon: "👥",
            title: "Equipo multidisciplinario",
            desc: "Ingenieros, diseñadores y especialistas en inclusión trabajando juntos por un mismo propósito.",
          },
          {
            icon: "♿",
            title: "Enfoque en accesibilidad",
            desc: "Diseñamos pensando primero en las necesidades reales de la comunidad sorda y con hipoacusia.",
          },
          {
            icon: "💬",
            title: "Comunicación inclusiva",
            desc: "Nuestros materiales y prototipos están diseñados con y para la comunidad, no solo para ella.",
          },
        ].map((c) => (
          <div key={c.title} className="bg-white border border-gray-100 rounded-xl p-5">
            <div className="text-2xl mb-3">{c.icon}</div>
            <h3 className="font-medium text-gray-900 mb-1">{c.title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{c.desc}</p>
          </div>
        ))}
        <div className="md:col-span-3 grid grid-cols-2 gap-4 mt-2">
          {[
            { num: "2.3M", label: "personas con discapacidad auditiva en México" },
            { num: "1 de 5", label: "personas sordas tiene acceso a intérprete profesional" },
          ].map((s) => (
            <div key={s.num} className="bg-purple-50 rounded-xl p-4">
              <p className="text-2xl font-medium text-purple-700">{s.num}</p>
              <p className="text-sm text-purple-500 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },

  problema: {
    badge: "Contexto",
    title: "El problema",
    subtitle:
      "Las personas con discapacidad auditiva enfrentan barreras diarias en espacios que deberían ser accesibles para todos.",
    content: (
      <div className="mt-6 space-y-4">
        <div className="grid grid-cols-3 gap-4">
          {[
            { num: "2.3M", label: "personas con discapacidad auditiva en México (INEGI)" },
            { num: "80%", label: "de entornos públicos sin intérpretes de LSM" },
            { num: "60%", label: "enfrentan exclusión en servicios de salud y educación" },
          ].map((s) => (
            <div key={s.num} className="bg-orange-50 rounded-xl p-4">
              <p className="text-2xl font-medium text-orange-700">{s.num}</p>
              <p className="text-sm text-orange-500 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              title: "Barrera de comunicación",
              desc: "Sin intérpretes ni subtítulos en tiempo real, acceder a servicios básicos se vuelve un obstáculo diario.",
            },
            {
              title: "Exclusión en espacios públicos",
              desc: "Hospitales, escuelas y oficinas gubernamentales rara vez cuentan con recursos adaptados.",
            },
            {
              title: "Tecnología inaccesible",
              desc: "La mayoría de las plataformas digitales no contemplan la Lengua de Señas Mexicana (LSM).",
            },
          ].map((c) => (
            <div key={c.title} className="bg-white border border-orange-100 rounded-xl p-5">
              <div className="w-2 h-2 rounded-full bg-orange-400 mb-3" />
              <h3 className="font-medium text-gray-900 mb-1">{c.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },

  solucion: {
    badge: "Nuestra propuesta",
    title: "La solución",
    subtitle:
      "Un sistema tecnológico que traduce, subtitula e interpreta en tiempo real, rompiendo las barreras de comunicación.",
    content: (
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          {[
            { n: "1", title: "Reconocimiento de señas en tiempo real", desc: "Cámara + IA que interpreta la LSM y la convierte en texto o voz al instante." },
            { n: "2", title: "Subtítulos automáticos", desc: "Transcripción inmediata del audio ambiente para que el usuario pueda leer lo que ocurre." },
            { n: "3", title: "Avatar intérprete de LSM", desc: "Personaje animado que traduce texto o voz a Lengua de Señas para comunicación bidireccional." },
            { n: "4", title: "Interfaz accesible y simple", desc: "Diseño visual claro, botones grandes y flujos intuitivos pensados desde cero para la comunidad sorda." },
          ].map((s) => (
            <div key={s.n} className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">
                {s.n}
              </div>
              <div>
                <h3 className="font-medium text-gray-900 text-sm">{s.title}</h3>
                <p className="text-sm text-gray-500 mt-0.5 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-4 content-start">
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <p className="text-xs text-gray-400 mb-2 font-medium uppercase tracking-wide">Antes</p>
            <p className="text-sm text-gray-600 leading-relaxed">El usuario sordo llega a una cita médica sin intérprete. No puede comunicarse. Sale sin atención.</p>
          </div>
          <div className="bg-teal-50 border-2 border-teal-400 rounded-xl p-5">
            <span className="inline-block text-xs font-medium bg-teal-100 text-teal-800 px-2 py-0.5 rounded-full mb-2">Con nuestra solución</span>
            <p className="text-xs text-gray-400 mb-2 font-medium uppercase tracking-wide">Después</p>
            <p className="text-sm text-gray-700 leading-relaxed">El usuario usa la app: subtítulos en tiempo real + avatar en LSM. La consulta ocurre sin barreras.</p>
          </div>
        </div>
      </div>
    ),
  },

  contacto: {
    badge: "Hablemos",
    title: "Contáctanos",
    subtitle:
      "¿Tienes preguntas, quieres colaborar o eres parte de la comunidad sorda? Escríbenos — respondemos en LSM también.",
    content: (
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3">
          {[
            { icon: "✉️", title: "Correo electrónico", desc: "contacto@proyecto.mx" },
            { icon: "📹", title: "Videollamada en LSM", desc: "Agenda una sesión con intérprete certificado." },
            { icon: "📍", title: "Ubicación", desc: "Ciudad de México, México." },
          ].map((c) => (
            <div key={c.title} className="flex items-start gap-3 bg-white border border-gray-100 rounded-xl p-4">
              <span className="text-lg mt-0.5">{c.icon}</span>
              <div>
                <h3 className="font-medium text-gray-900 text-sm">{c.title}</h3>
                <p className="text-sm text-gray-500">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-3">
          <input
            type="text"
            placeholder="Tu nombre"
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-100"
          />
          <input
            type="email"
            placeholder="Tu correo"
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-100"
          />
          <textarea
            rows={4}
            placeholder="Tu mensaje..."
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-100 resize-none"
          />
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2.5 rounded-lg transition-colors">
            Enviar mensaje
          </button>
        </div>
      </div>
    ),
  },
};

const navItems = [
  { key: "quienes", label: "¿Quiénes Somos?" },
  { key: "problema", label: "Problema" },
  { key: "solucion", label: "Solución" },
  { key: "contacto", label: "Contáctanos" },
];

const badgeColors = {
  quienes: "bg-purple-100 text-purple-800",
  problema: "bg-orange-100 text-orange-800",
  solucion: "bg-teal-100 text-teal-800",
  contacto: "bg-blue-100 text-blue-800",
};

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggle = (key) => {
    setActiveSection((prev) => (prev === key ? null : key));
  };

  const current = activeSection ? sections[activeSection] : null;

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300
        ${scrolled || activeSection ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

          {/* LOGO */}
          <h1
            className={`text-2xl md:text-3xl lg:text-4xl font-bold transition-colors duration-300
            ${scrolled || activeSection ? "text-blue-600" : "text-white"}`}
          >
            VEICK
          </h1>

          {/* MENÚ */}
          <div className="hidden md:flex space-x-8 font-medium">
            {navItems.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => toggle(key)}
                className={`relative group transition-colors duration-300
                ${activeSection === key
                  ? "text-blue-600"
                  : scrolled || activeSection
                  ? "text-gray-700 hover:text-blue-600"
                  : "text-white hover:text-blue-200"
                }`}
              >
                {label}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-blue-600 transition-all duration-300
                  ${activeSection === key ? "w-full" : "w-0 group-hover:w-full"}`}
                />
              </button>
            ))}
          </div>

          {/* BOTÓN */}
          <Link to="/login">
            <button
              className={`px-5 py-2 rounded-lg transition-all duration-300
              ${scrolled || activeSection
                ? "bg-orange-500 text-white hover:bg-orange-600"
                : "bg-white text-black hover:bg-gray-200"
              }`}
            >
              Inicia sesión
            </button>
          </Link>
        </div>

        {/* PANEL DESPLEGABLE */}
        {current && (
          <div className="border-t border-gray-100 bg-white">
            <div className="max-w-7xl mx-auto px-8 py-6">
              <div className="flex items-start justify-between mb-1">
                <div>
                  <span
                    className={`inline-block text-xs font-medium px-3 py-1 rounded-full mb-2 ${badgeColors[activeSection]}`}
                  >
                    {current.badge}
                  </span>
                  <h2 className="text-xl font-medium text-gray-900">{current.title}</h2>
                  <p className="text-sm text-gray-500 mt-1 max-w-xl leading-relaxed">{current.subtitle}</p>
                </div>
                <button
                  onClick={() => setActiveSection(null)}
                  className="text-gray-400 hover:text-gray-600 text-xl mt-1 leading-none"
                >
                  ✕
                </button>
              </div>
              {current.content}
            </div>
          </div>
        )}
      </nav>

      {/* OVERLAY para cerrar al hacer clic fuera */}
      {activeSection && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setActiveSection(null)}
        />
      )}
    </>
  );
}

export default Navbar;
