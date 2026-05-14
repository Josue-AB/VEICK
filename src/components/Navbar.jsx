import { useState, useEffect, useRef } from "react";
import DemoModal from "./DemoModal";
import LoginModal from "./LoginModal";

const idiomas = [
  { code: "es", label: "Español", flag: "🇲🇽" },
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "lsm", label: "LSM",    flag: "🤟" },
];

const sections = {
  quienes: {
    badge: "Nuestro equipo",
    title: "¿Quiénes somos?",
    subtitle: "Somos un equipo comprometido con eliminar las barreras de comunicación para las personas con discapacidad auditiva en México.",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {[
          { icon: "👥", title: "Equipo multidisciplinario", desc: "Ingenieros, diseñadores y especialistas en inclusión trabajando juntos por un mismo propósito." },
          { icon: "♿", title: "Enfoque en accesibilidad",  desc: "Diseñamos pensando primero en las necesidades reales de la comunidad sorda y con hipoacusia." },
          { icon: "💬", title: "Comunicación inclusiva",   desc: "Nuestros materiales y prototipos están diseñados con y para la comunidad, no solo para ella." },
        ].map((c) => (
          <div key={c.title} className="bg-white border border-gray-100 rounded-xl p-5">
            <div className="text-2xl mb-3">{c.icon}</div>
            <h3 className="font-medium text-gray-900 mb-1">{c.title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{c.desc}</p>
          </div>
        ))}
        <div className="md:col-span-3 grid grid-cols-2 gap-4 mt-2">
          {[
            { num: "2.3M",   label: "personas con discapacidad auditiva en México" },
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
    subtitle: "Las personas con discapacidad auditiva enfrentan barreras diarias en espacios que deberían ser accesibles para todos.",
    content: (
      <div className="mt-6 space-y-4">
        {/* FIX: grid-cols-3 → responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { num: "2.3M", label: "personas con discapacidad auditiva en México (INEGI)" },
            { num: "80%",  label: "de entornos públicos sin intérpretes de LSM" },
            { num: "60%",  label: "enfrentan exclusión en servicios de salud y educación" },
          ].map((s) => (
            <div key={s.num} className="bg-orange-50 rounded-xl p-4">
              <p className="text-2xl font-medium text-orange-700">{s.num}</p>
              <p className="text-sm text-orange-500 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: "Barrera de comunicación",       desc: "Sin intérpretes ni subtítulos en tiempo real, acceder a servicios básicos se vuelve un obstáculo diario." },
            { title: "Exclusión en espacios públicos", desc: "Hospitales, escuelas y oficinas gubernamentales rara vez cuentan con recursos adaptados." },
            { title: "Tecnología inaccesible",         desc: "La mayoría de las plataformas digitales no contemplan la Lengua de Señas Mexicana (LSM)." },
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
    subtitle: "Un sistema tecnológico que traduce, vocaliza e interpreta en tiempo real, rompiendo las barreras de comunicación.",
    content: (
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          {[
            { n: "1", title: "Reconocimiento de señas en tiempo real", desc: "Cámara + IA que interpreta la LSM y la convierte en texto o voz al instante." },
            { n: "2", title: "Diálogos automáticos",                   desc: "Transcripción inmediata del audio ambiente para que el usuario pueda leer lo que ocurre." },
            { n: "3", title: "Intérprete de LSM",                      desc: "Algoritmo que traduce texto o voz a Lengua de Señas para comunicación bidireccional." },
            { n: "4", title: "Interfaz accesible y simple",            desc: "Diseño visual claro, botones grandes y flujos intuitivos pensados desde cero para la comunidad sorda." },
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
          <div className="bg-white border border-red-200 rounded-xl p-5">
            <p className="text-xs text-red-400 mb-2 font-medium uppercase tracking-wide">Antes</p>
            <p className="text-sm text-red-600 leading-relaxed">El usuario sordo llega a una cita médica sin intérprete. No puede comunicarse. Sale sin atención.</p>
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
    subtitle: "¿Tienes preguntas, quieres colaborar o eres parte de la comunidad sorda? Escríbenos — respondemos en LSM también.",
    content: (
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3">
          {[
            { icon: "✉️", title: "Correo electrónico", desc: "contacto@proyecto.mx" },
            { icon: "📹", title: "Videollamada en LSM", desc: "Agenda una sesión con intérprete certificado." },
            { icon: "📍", title: "Ubicación",           desc: "Guadalajara, Jalisco, México." },
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
          <input type="text"  placeholder="Tu nombre"    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-100" />
          <input type="email" placeholder="Tu correo"    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-100" />
          <textarea rows={4}  placeholder="Tu mensaje..." className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-100 resize-none" />
          <button className="w-full bg-[#1a3f7a] hover:bg-[#15336a] text-white text-sm font-medium py-2.5 rounded-lg transition-colors">Enviar mensaje</button>
        </div>
      </div>
    ),
  },
};

const navItems = [
  { key: "quienes",  label: "¿Quiénes Somos?" },
  { key: "problema", label: "Problema" },
  { key: "solucion", label: "Solución" },
  { key: "contacto", label: "Contáctanos" },
];

const badgeColors = {
  quienes:  "bg-purple-100 text-purple-800",
  problema: "bg-orange-100 text-orange-800",
  solucion: "bg-teal-100 text-teal-800",
  contacto: "bg-blue-100 text-blue-800",
};

/* ─── Modal de Registro ─── */
function RegisterModal({ onClose, onSuccess }) {
  const [form, setForm] = useState({ nombre: "", edad: "", nacionalidad: "", telefono: "" });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const validate = () => {
    const e = {};
    if (!form.nombre.trim()) e.nombre = "El nombre es requerido";
    if (!form.edad || form.edad < 1 || form.edad > 120) e.edad = "Ingresa una edad válida";
    if (!form.nacionalidad.trim()) e.nacionalidad = "La nacionalidad es requerida";
    if (!/^\d{7,15}$/.test(form.telefono.replace(/\s/g, ""))) e.telefono = "Número inválido (7-15 dígitos)";
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    onSuccess(form.nombre.trim());
    onClose();
  };

  const field = (key, label, type = "text", extra = {}) => (
    <div>
      <label className="block text-xs font-medium text-gray-600 mb-1">{label}</label>
      <input
        type={type}
        value={form[key]}
        onChange={(ev) => { setForm({ ...form, [key]: ev.target.value }); setErrors({ ...errors, [key]: "" }); }}
        className={`w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none transition-colors
          ${errors[key] ? "border-red-300 focus:border-red-400 bg-red-50" : "border-gray-200 focus:border-[#1a3f7a] focus:ring-1 focus:ring-blue-100"}`}
        {...extra}
      />
      {errors[key] && <p className="text-xs text-red-500 mt-1">{errors[key]}</p>}
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="bg-white rounded-2xl w-full max-w-md overflow-hidden">
        <div className="px-6 pt-6 pb-4 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-medium text-gray-900">Crear cuenta</h2>
              <p className="text-xs text-gray-400 mt-0.5">Únete a la comunidad VEICK</p>
            </div>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-xl leading-none px-1">✕</button>
          </div>
        </div>
        <div className="px-6 py-5 space-y-4">
          {field("nombre", "Nombre completo")}
          <div className="grid grid-cols-2 gap-3">
            {field("edad",         "Edad",         "number", { min: 1, max: 120, placeholder: "Ej. 25" })}
            {field("nacionalidad", "Nacionalidad", "text",   { placeholder: "Ej. Mexicana" })}
          </div>
          {field("telefono", "Número de teléfono", "tel", { placeholder: "Ej. 5512345678" })}
        </div>
        <div className="px-6 pb-6 flex gap-3">
          <button onClick={onClose}
            className="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
            Cancelar
          </button>
          <button onClick={handleSubmit}
            className="flex-1 py-2.5 rounded-xl bg-[#1a3f7a] hover:bg-[#15336a] text-white text-sm font-medium transition-colors">
            Registrarme
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── Menú de usuario logueado ─── */
function UserMenu({ nombre, onLogout }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const initials = nombre.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase();

  useEffect(() => {
    const handleClick = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button onClick={() => setOpen((p) => !p)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/30 bg-white/15 hover:bg-white/25 transition-colors">
        <div className="w-6 h-6 rounded-full bg-white text-[#1a3f7a] text-xs font-medium flex items-center justify-center">
          {initials}
        </div>
        <span className="text-sm font-medium text-white max-w-[120px] truncate">{nombre}</span>
        <svg className={`w-3 h-3 text-white/70 transition-transform ${open ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-100 rounded-xl overflow-hidden z-50 shadow-lg">
          <div className="px-4 py-3 border-b border-gray-100">
            <p className="text-xs font-medium text-gray-900 truncate">{nombre}</p>
            <p className="text-xs text-gray-400 mt-0.5">Usuario registrado</p>
          </div>
          <button onClick={() => { setOpen(false); onLogout(); }}
            className="w-full flex items-center gap-2 px-4 py-2.5 text-xs text-red-500 hover:bg-red-50 transition-colors text-left">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
            Cerrar sesión
          </button>
        </div>
      )}
    </div>
  );
}

/* ─── Navbar principal ─── */
function Navbar() {
  const [scrolled, setScrolled]           = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [showDemo, setShowDemo]           = useState(false);
  const [langOpen, setLangOpen]           = useState(false);
  const [selectedLang, setSelectedLang]   = useState(idiomas[0]);
  const [showRegister, setShowRegister]   = useState(false);
  const [showLogin, setShowLogin]         = useState(false);
  const [usuario, setUsuario]             = useState(null);
  const [menuOpen, setMenuOpen]           = useState(false); // ← NUEVO: menú móvil
  const langRef                           = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) setLangOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Bloquear scroll cuando menú móvil está abierto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const toggle  = (key) => setActiveSection((prev) => (prev === key ? null : key));
  const current = activeSection ? sections[activeSection] : null;

  const navBg = scrolled || activeSection || menuOpen
    ? "bg-[#1a3f7a] shadow-lg"
    : "bg-transparent";

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${navBg}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8 py-3">

          {/* LOGO */}
          <div className="flex items-center gap-2">
            <img src="Veick.png" alt="Logo VEICK" className="w-20 h-20 md:w-20 md:h-20 object-contain mix-blend-screen center" />
            <h1 className="text-xl md:text-2xl font-bold text-white tracking-wide">VEICK</h1>
          </div>

          {/* MENÚ DESKTOP */}
          <div className="hidden md:flex space-x-8 font-medium">
            {navItems.map(({ key, label }) => (
              <button key={key} onClick={() => toggle(key)}
                className={`relative group transition-colors duration-200 text-sm
                  ${activeSection === key ? "text-blue-300" : "text-white/85 hover:text-white"}`}>
                {label}
                <span className={`absolute left-0 -bottom-1 h-[2px] bg-blue-300 transition-all duration-300
                  ${activeSection === key ? "w-full" : "w-0 group-hover:w-full"}`} />
              </button>
            ))}
          </div>

          {/* DERECHA DESKTOP */}
          <div className="hidden md:flex items-center gap-3">
            <button onClick={() => setShowDemo(true)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/25 bg-white/10 text-white text-xs font-medium hover:bg-white/20 transition-all">
              <span className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse" />
              En vivo
            </button>

            <div className="relative" ref={langRef}>
              <button onClick={() => setLangOpen((p) => !p)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/25 bg-white/10 text-white text-xs font-medium hover:bg-white/20 transition-all">
                <span>{selectedLang.flag}</span>
                <span>{selectedLang.code.toUpperCase()}</span>
                <svg className={`w-3 h-3 transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              {langOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-white border border-gray-100 rounded-xl overflow-hidden z-50 shadow-lg">
                  {idiomas.map((lang) => (
                    <button key={lang.code}
                      onClick={() => { setSelectedLang(lang); setLangOpen(false); }}
                      className={`w-full flex items-center gap-2 px-3 py-2.5 text-xs text-left transition-colors
                        ${selectedLang.code === lang.code ? "bg-blue-50 text-[#1a3f7a] font-medium" : "text-gray-700 hover:bg-gray-50"}`}>
                      <span>{lang.flag}</span>
                      <span>{lang.label}</span>
                      {selectedLang.code === lang.code && (
                        <svg className="w-3 h-3 ml-auto text-[#1a3f7a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {usuario ? (
              <UserMenu nombre={usuario} onLogout={() => setUsuario(null)} />
            ) : (
              <>
                <button onClick={() => setShowRegister(true)}
                  className="px-5 py-2 rounded-lg text-sm font-medium border border-white/60 text-white hover:bg-white/10 transition-all">
                  Regístrate
                </button>
                <button onClick={() => setShowLogin(true)}
                  className="px-5 py-2 rounded-lg text-sm font-semibold bg-white text-[#1a3f7a] hover:bg-blue-50 transition-all">
                  Inicia sesión
                </button>
              </>
            )}
          </div>

          {/* BOTÓN HAMBURGUESA (solo móvil) */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
            onClick={() => { setMenuOpen((p) => !p); setActiveSection(null); }}
            aria-label="Menú"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* PANEL DESPLEGABLE DESKTOP */}
        {current && !menuOpen && (
          <div className="border-t border-white/15 bg-[#f0f5fc]">
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
              <div className="flex items-start justify-between mb-1">
                <div>
                  <span className={`inline-block text-xs font-medium px-3 py-1 rounded-full mb-2 ${badgeColors[activeSection]}`}>
                    {current.badge}
                  </span>
                  <h2 className="text-xl font-medium text-gray-900">{current.title}</h2>
                  <p className="text-sm text-gray-500 mt-1 max-w-xl leading-relaxed">{current.subtitle}</p>
                </div>
                <button onClick={() => setActiveSection(null)} className="text-gray-400 hover:text-gray-600 text-xl mt-1 leading-none">✕</button>
              </div>
              {current.content}
            </div>
          </div>
        )}

        {/* MENÚ MÓVIL DESPLEGABLE */}
        {menuOpen && (
          <div className="md:hidden bg-[#1a3f7a] border-t border-white/15 pb-6">
            {/* Links de navegación */}
            <div className="px-4 pt-2 space-y-1">
              {navItems.map(({ key, label }) => (
                <button key={key}
                  onClick={() => { toggle(key); }}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors
                    ${activeSection === key ? "bg-white/20 text-blue-300" : "text-white/85 hover:bg-white/10 hover:text-white"}`}>
                  {label}
                </button>
              ))}
            </div>

            {/* Sección expandida en móvil */}
            {current && (
  <div className="mx-4 mt-3 bg-[#f0f5fc] rounded-2xl p-4 overflow-y-auto max-h-[60vh]">
                <div className="flex items-start justify-between mb-1">
                  <div>
                    <span className={`inline-block text-xs font-medium px-3 py-1 rounded-full mb-2 ${badgeColors[activeSection]}`}>
                      {current.badge}
                    </span>
                    <h2 className="text-base font-medium text-gray-900">{current.title}</h2>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">{current.subtitle}</p>
                  </div>
                  <button onClick={() => setActiveSection(null)} className="text-gray-400 hover:text-gray-600 text-lg leading-none ml-2">✕</button>
                </div>
                {current.content}
              </div>
            )}

            {/* Divider */}
            <div className="mx-4 my-4 border-t border-white/15" />

            {/* Botones en vivo e idioma */}
            <div className="px-4 flex items-center gap-2 mb-3">
              <button onClick={() => { setShowDemo(true); setMenuOpen(false); }}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/25 bg-white/10 text-white text-xs font-medium">
                <span className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse" />
                En vivo
              </button>
              <div className="flex gap-1">
                {idiomas.map((lang) => (
                  <button key={lang.code}
                    onClick={() => setSelectedLang(lang)}
                    className={`px-2.5 py-1.5 rounded-full text-xs font-medium transition-colors
                      ${selectedLang.code === lang.code ? "bg-white text-[#1a3f7a]" : "border border-white/25 bg-white/10 text-white"}`}>
                    {lang.flag} {lang.code.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Auth buttons */}
            <div className="px-4 space-y-2">
              {usuario ? (
                <div className="flex items-center justify-between bg-white/10 rounded-xl px-4 py-3">
                  <span className="text-white text-sm font-medium">{usuario}</span>
                  <button onClick={() => { setUsuario(null); setMenuOpen(false); }}
                    className="text-xs text-red-300 hover:text-red-200">Cerrar sesión</button>
                </div>
              ) : (
                <>
                  <button onClick={() => { setShowRegister(true); setMenuOpen(false); }}
                    className="w-full py-3 rounded-xl text-sm font-medium border border-white/60 text-white hover:bg-white/10 transition-all">
                    Regístrate
                  </button>
                  <button onClick={() => { setShowLogin(true); setMenuOpen(false); }}
                    className="w-full py-3 rounded-xl text-sm font-semibold bg-white text-[#1a3f7a] hover:bg-blue-50 transition-all">
                    Inicia sesión
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </nav>

      {activeSection && !menuOpen && <div className="fixed inset-0 z-40" onClick={() => setActiveSection(null)} />}

      {showDemo     && <DemoModal    onClose={() => setShowDemo(false)} />}
      {showRegister && <RegisterModal onClose={() => setShowRegister(false)} onSuccess={(n) => setUsuario(n)} />}
      {showLogin    && <LoginModal   onClose={() => setShowLogin(false)} onLoginSuccess={(n) => setUsuario(n)} />}
    </>
  );
}

export default Navbar;