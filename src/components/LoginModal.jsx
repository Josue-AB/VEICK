import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

/*
  ─────────────────────────────────────────────────────
  CONFIGURACIÓN EMAILJS
  1. Crea cuenta gratis en https://www.emailjs.com
  2. Crea un Email Service (Gmail, Outlook, etc.)
  3. Crea un Email Template con estas variables:
       {{to_email}}   → correo del usuario
       {{password}}   → contraseña a enviar
       {{user_name}}  → nombre del usuario (opcional)
  4. Reemplaza los tres valores de abajo con los tuyos
  ─────────────────────────────────────────────────────
*/
const EMAILJS_SERVICE_ID  = "TU_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "TU_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY  = "TU_PUBLIC_KEY";

/*
  Base de usuarios simulada.
  En producción esto vendría de tu backend / Firebase.
  La clave es el correo en minúsculas.
*/
const USUARIOS_DB = {
  "usuario@correo.com": { password: "veick2024", nombre: "Juan García" },
  "demo@veick.mx":      { password: "demo1234",  nombre: "Usuario Demo" },
};

export default function LoginModal({ onClose, onLoginSuccess }) {
  const [vista, setVista]         = useState("login");   // "login" | "forgot"
  const [form, setForm]           = useState({ correo: "", password: "" });
  const [forgotEmail, setForgotEmail] = useState("");
  const [errors, setErrors]       = useState({});
  const [loading, setLoading]     = useState(false);
  const [sentOk, setSentOk]       = useState(false);
  const [showPass, setShowPass]   = useState(false);

  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  /* ── Login ── */
  const handleLogin = () => {
    const e = {};
    if (!form.correo.trim())   e.correo   = "Ingresa tu correo";
    if (!form.password.trim()) e.password = "Ingresa tu contraseña";
    if (Object.keys(e).length) { setErrors(e); return; }

    const user = USUARIOS_DB[form.correo.toLowerCase()];
    if (!user) {
      setErrors({ correo: "Correo no registrado" });
      return;
    }
    if (user.password !== form.password) {
      setErrors({ password: "Contraseña incorrecta" });
      return;
    }

    onLoginSuccess(user.nombre);
    onClose();
  };

  /* ── Recuperar contraseña ── */
  const handleForgot = async () => {
    if (!forgotEmail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(forgotEmail)) {
      setErrors({ forgotEmail: "Ingresa un correo válido" });
      return;
    }

    const user = USUARIOS_DB[forgotEmail.toLowerCase()];
    if (!user) {
      setErrors({ forgotEmail: "No encontramos una cuenta con ese correo" });
      return;
    }

    setLoading(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          to_email:  forgotEmail.toLowerCase(),
          user_name: user.nombre,
          password:  user.password,
        },
        EMAILJS_PUBLIC_KEY
      );
      setSentOk(true);
    } catch (err) {
      setErrors({ forgotEmail: "Error al enviar. Intenta de nuevo." });
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (key) =>
    `w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none transition-colors
    ${errors[key]
      ? "border-red-300 focus:border-red-400 bg-red-50"
      : "border-gray-200 focus:border-orange-400 focus:ring-1 focus:ring-orange-100"}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-2xl w-full max-w-sm overflow-hidden">

        {/* ── Header ── */}
        <div className="px-6 pt-6 pb-4 border-b border-gray-100 flex items-start justify-between">
          <div>
            <h2 className="text-lg font-medium text-gray-900">
              {vista === "login" ? "Iniciar sesión" : "Recuperar contraseña"}
            </h2>
            <p className="text-xs text-gray-400 mt-0.5">
              {vista === "login"
                ? "Bienvenido de vuelta a VEICK"
                : "Te enviaremos tu contraseña por correo"}
            </p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-xl leading-none px-1 mt-0.5">✕</button>
        </div>

        {/* ── Vista: Login ── */}
        {vista === "login" && (
          <div className="px-6 py-5 space-y-4">

            {/* Correo */}
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Correo electrónico</label>
              <input
                type="email"
                placeholder="tu@correo.com"
                value={form.correo}
                onChange={(e) => { setForm({ ...form, correo: e.target.value }); setErrors({ ...errors, correo: "" }); }}
                className={inputClass("correo")}
              />
              {errors.correo && <p className="text-xs text-red-500 mt-1">{errors.correo}</p>}
            </div>

            {/* Contraseña */}
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Contraseña</label>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  placeholder="••••••••"
                  value={form.password}
                  onChange={(e) => { setForm({ ...form, password: e.target.value }); setErrors({ ...errors, password: "" }); }}
                  onKeyDown={(e) => { if (e.key === "Enter") handleLogin(); }}
                  className={`${inputClass("password")} pr-10`}
                />
                <button
                  type="button"
                  onClick={() => setShowPass((p) => !p)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPass ? (
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
                      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
                      <line x1="1" y1="1" x2="23" y2="23"/>
                    </svg>
                  ) : (
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                  )}
                </button>
              </div>
              {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password}</p>}
            </div>

            {/* ¿Olvidaste tu contraseña? */}
            <div className="text-right">
              <button
                onClick={() => { setVista("forgot"); setErrors({}); }}
                className="text-xs text-orange-500 hover:text-orange-600 hover:underline transition-colors"
              >
                ¿Olvidaste tu contraseña?
              </button>
            </div>

            {/* Botones */}
            <div className="flex gap-3 pt-1">
              <button
                onClick={onClose}
                className="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={handleLogin}
                className="flex-1 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium transition-colors"
              >
                Entrar
              </button>
            </div>
          </div>
        )}

        {/* ── Vista: Recuperar contraseña ── */}
        {vista === "forgot" && (
          <div className="px-6 py-5 space-y-4">
            {!sentOk ? (
              <>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Ingresa el correo con el que te registraste y te enviaremos tu contraseña.
                </p>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Correo electrónico</label>
                  <input
                    type="email"
                    placeholder="tu@correo.com"
                    value={forgotEmail}
                    onChange={(e) => { setForgotEmail(e.target.value); setErrors({}); }}
                    onKeyDown={(e) => { if (e.key === "Enter") handleForgot(); }}
                    className={inputClass("forgotEmail")}
                  />
                  {errors.forgotEmail && <p className="text-xs text-red-500 mt-1">{errors.forgotEmail}</p>}
                </div>

                <div className="flex gap-3 pt-1">
                  <button
                    onClick={() => { setVista("login"); setErrors({}); setSentOk(false); }}
                    className="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
                  >
                    Volver
                  </button>
                  <button
                    onClick={handleForgot}
                    disabled={loading}
                    className="flex-1 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-white text-sm font-medium transition-colors flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                          <circle cx="12" cy="12" r="10" strokeOpacity={0.25}/>
                          <path d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round"/>
                        </svg>
                        Enviando…
                      </>
                    ) : "Enviar correo"}
                  </button>
                </div>
              </>
            ) : (
              /* Confirmación enviado */
              <div className="text-center py-4 space-y-3">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-7 h-7 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <h3 className="font-medium text-gray-900">¡Correo enviado!</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Revisa tu bandeja de entrada en <span className="font-medium text-gray-700">{forgotEmail}</span>.
                  Si no lo ves, revisa tu carpeta de spam.
                </p>
                <button
                  onClick={() => { setVista("login"); setSentOk(false); setForgotEmail(""); }}
                  className="w-full py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium transition-colors mt-2"
                >
                  Volver al login
                </button>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}

