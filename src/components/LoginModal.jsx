import { useState, useEffect } from "react";

export default function LoginModal({ onClose, onLoginSuccess }) {
  const [vista, setVista]             = useState("login");
  const [form, setForm]               = useState({ correo: "", password: "" });
  const [forgotEmail, setForgotEmail] = useState("");
  const [errors, setErrors]           = useState({});
  const [loading, setLoading]         = useState(false);
  const [sentOk, setSentOk]           = useState(false);
  const [showPass, setShowPass]       = useState(false);

  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

const handleLogin = async () => {
  const e = {};

  if (!form.correo.trim()) {
    e.correo = "Ingresa tu correo";
  }

  if (!form.password.trim()) {
    e.password = "Ingresa tu contraseña";
  }

  if (Object.keys(e).length) {
    setErrors(e);
    return;
  }

  setLoading(true);

  try {
    const response = await fetch(
      "http://localhost:3001/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          correo: form.correo.trim().toLowerCase(),
          password: form.password,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      setErrors({
        password: data.message || "Error al iniciar sesión",
      });
      return;
    }

    onLoginSuccess(data.nombre);
    onClose();

  } catch (error) {
    console.error("Error login:", error);

    setErrors({
      password: "No se pudo conectar al servidor",
    });
  } finally {
    setLoading(false);
  }
};

const handleForgot = async () => {
  if (
    !forgotEmail.trim() ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(forgotEmail)
  ) {
    setErrors({
      forgotEmail: "Ingresa un correo válido",
    });
    return;
  }

  setLoading(true);

  try {
    const response = await fetch(
      "http://localhost:3001/forgot-password",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          correo: forgotEmail.trim().toLowerCase(),
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      setErrors({
        forgotEmail:
          data.message || "Error al enviar correo",
      });
      return;
    }

    setSentOk(true);

  } catch (error) {
    console.error("Forgot password error:", error);

    setErrors({
      forgotEmail:
        "No se pudo conectar al servidor",
    });
  } finally {
    setLoading(false);
  }
};

  const inputBase = (key) => ({
    width: "100%",
    padding: "10px 14px",
    borderRadius: "10px",
    border: `0.5px solid ${errors[key] ? "#F09595" : "#B5D4F4"}`,
    background: errors[key] ? "#FCEBEB" : "#E6F1FB",
    fontSize: "14px",
    color: "#042C53",
    outline: "none",
  });

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      style={{ background: "rgba(4,44,83,0.75)" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="w-full max-w-sm overflow-hidden rounded-2xl"
        style={{ border: "0.5px solid #B5D4F4" }}
      >

        {/* Header */}
        <div
          className="flex items-start justify-between px-6 pt-5 pb-4"
          style={{ background: "#E6F1FB", borderBottom: "0.5px solid #B5D4F4" }}
        >
          <div>
            <h2 className="text-lg font-semibold" style={{ color: "#042C53" }}>
              {vista === "login" ? "Iniciar sesión" : "Recuperar contraseña"}
            </h2>
            <p className="text-xs mt-0.5" style={{ color: "#378ADD" }}>
              {vista === "login"
                ? "Bienvenido de vuelta a VEICK"
                : "Te enviaremos tu contraseña por correo"}
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg flex items-center justify-center mt-0.5 flex-shrink-0"
            style={{ background: "#fff", border: "0.5px solid #B5D4F4", color: "#185FA5" }}
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Vista: Login */}
        {vista === "login" && (
          <div className="px-6 py-5 space-y-4" style={{ background: "#fff" }}>

            {/* Correo */}
            <div>
              <label className="block text-xs font-medium mb-1" style={{ color: "#0C447C" }}>
                Correo electrónico
              </label>
              <input
                type="email"
                placeholder="tu@correo.com"
                value={form.correo}
                onChange={(e) => { setForm({ ...form, correo: e.target.value }); setErrors({ ...errors, correo: "" }); }}
                style={inputBase("correo")}
              />
              {errors.correo && <p className="text-xs mt-1" style={{ color: "#E24B4A" }}>{errors.correo}</p>}
            </div>

            {/* Contraseña */}
            <div>
              <label className="block text-xs font-medium mb-1" style={{ color: "#0C447C" }}>
                Contraseña
              </label>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  placeholder="••••••••"
                  value={form.password}
                  onChange={(e) => { setForm({ ...form, password: e.target.value }); setErrors({ ...errors, password: "" }); }}
                  onKeyDown={(e) => { if (e.key === "Enter") handleLogin(); }}
                  style={{ ...inputBase("password"), paddingRight: "42px" }}
                />
                <button
                  type="button"
                  onClick={() => setShowPass((p) => !p)}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                  style={{ background: "none", border: "none", cursor: "pointer", color: "#378ADD" }}
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
              {errors.password && <p className="text-xs mt-1" style={{ color: "#E24B4A" }}>{errors.password}</p>}
            </div>

            {/* ¿Olvidaste tu contraseña? */}
            <div className="text-right">
              <button
                onClick={() => { setVista("forgot"); setErrors({}); }}
                className="text-xs hover:underline transition-colors"
                style={{ color: "#185FA5", background: "none", border: "none", cursor: "pointer" }}
              >
                ¿Olvidaste tu contraseña?
              </button>
            </div>

            {/* Botones */}
            <div className="flex gap-3 pt-1">
              <button
                onClick={onClose}
                className="flex-1 py-2.5 rounded-xl text-sm font-medium transition-colors"
                style={{ border: "0.5px solid #B5D4F4", background: "#fff", color: "#185FA5" }}
              >
                Cancelar
              </button>
              <button
  onClick={handleLogin}
  disabled={loading}
  className="flex-1 py-2.5 rounded-xl text-sm font-medium transition-opacity hover:opacity-90 disabled:opacity-60"
  style={{
    background: "#185FA5",
    color: "#fff",
    border: "none"
  }}
>
  {loading ? "Ingresando..." : "Entrar"}
</button>
            </div>
          </div>
        )}

        {/* Vista: Recuperar contraseña */}
        {vista === "forgot" && (
          <div className="px-6 py-5 space-y-4" style={{ background: "#fff" }}>
            {!sentOk ? (
              <>
                <p className="text-sm leading-relaxed" style={{ color: "#0C447C" }}>
                  Ingresa el correo con el que te registraste y te enviaremos tu contraseña.
                </p>
                <div>
                  <label className="block text-xs font-medium mb-1" style={{ color: "#0C447C" }}>
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    placeholder="tu@correo.com"
                    value={forgotEmail}
                    onChange={(e) => { setForgotEmail(e.target.value); setErrors({}); }}
                    onKeyDown={(e) => { if (e.key === "Enter") handleForgot(); }}
                    style={inputBase("forgotEmail")}
                  />
                  {errors.forgotEmail && <p className="text-xs mt-1" style={{ color: "#E24B4A" }}>{errors.forgotEmail}</p>}
                </div>

                <div className="flex gap-3 pt-1">
                  <button
                    onClick={() => { setVista("login"); setErrors({}); setSentOk(false); }}
                    className="flex-1 py-2.5 rounded-xl text-sm font-medium"
                    style={{ border: "0.5px solid #B5D4F4", background: "#fff", color: "#185FA5" }}
                  >
                    Volver
                  </button>
                  <button
                    onClick={handleForgot}
                    disabled={loading}
                    className="flex-1 py-2.5 rounded-xl text-sm font-medium flex items-center justify-center gap-2 transition-opacity hover:opacity-90 disabled:opacity-60"
                    style={{ background: "#185FA5", color: "#fff", border: "none" }}
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
              <div className="text-center py-4 space-y-3">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto"
                  style={{ background: "#E1F5EE" }}
                >
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none"
                    stroke="#0F6E56" strokeWidth={2}>
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <h3 className="font-semibold" style={{ color: "#042C53" }}>¡Correo enviado!</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#0C447C" }}>
                  Revisa tu bandeja de entrada en{" "}
                  <span className="font-medium" style={{ color: "#042C53" }}>{forgotEmail}</span>.
                  Si no lo ves, revisa tu carpeta de spam.
                </p>
                <button
                  onClick={() => { setVista("login"); setSentOk(false); setForgotEmail(""); }}
                  className="w-full py-2.5 rounded-xl text-sm font-medium mt-2 transition-opacity hover:opacity-90"
                  style={{ background: "#185FA5", color: "#fff", border: "none" }}
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
