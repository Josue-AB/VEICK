import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function ResetPassword() {
  const { token } = useParams();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] =
    useState(false);

  const handleResetPassword = async () => {
    setError("");

    if (!password || !confirmPassword) {
      return setError(
        "Todos los campos son obligatorios"
      );
    }

    if (password.length < 6) {
      return setError(
        "La contraseña debe tener mínimo 6 caracteres"
      );
    }

    if (password !== confirmPassword) {
      return setError(
        "Las contraseñas no coinciden"
      );
    }

    try {
      const response = await fetch(
        "http://localhost:3001/reset-password",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            token,
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      setSuccess(true);

      setTimeout(() => {
        navigate("/");
      }, 3000);

    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{
        background:
          "linear-gradient(135deg,#0A2A4A,#185FA5)",
      }}
    >
      <div
        className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md"
      >
        <h1
          className="text-2xl font-bold text-center mb-2"
          style={{ color: "#042C53" }}
        >
          Restablecer contraseña
        </h1>

        <p
          className="text-center text-sm mb-6"
          style={{ color: "#378ADD" }}
        >
          Ingresa tu nueva contraseña
        </p>

        {success ? (
          <div className="text-center">
            <p
              className="font-medium"
              style={{ color: "#0F9D58" }}
            >
              ✅ Contraseña actualizada
            </p>

            <p className="text-sm mt-2 text-gray-500">
              Redirigiendo al login...
            </p>
          </div>
        ) : (
          <>
            <div className="space-y-4">

              <div>
                <label className="block text-sm mb-1">
                  Nueva contraseña
                </label>

                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">
                  Confirmar contraseña
                </label>

                <input
                  type="password"
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) =>
                    setConfirmPassword(
                      e.target.value
                    )
                  }
                  className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2"
                />
              </div>

              {error && (
                <p className="text-red-500 text-sm">
                  {error}
                </p>
              )}

              <button
                onClick={handleResetPassword}
                className="w-full py-3 rounded-xl text-white font-medium"
                style={{
                  background: "#185FA5",
                }}
              >
                Guardar nueva contraseña
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}