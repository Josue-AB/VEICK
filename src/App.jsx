import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import ResetPassword from "./components/ResetPassword";

function App() {

  // Mantener sesión aunque recargues
  const [usuario, setUsuario] = useState(() => {
    const savedUser =
      localStorage.getItem("usuario");

    return savedUser
      ? JSON.parse(savedUser)
      : null;
  });

  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={
            <Home
              usuario={usuario}
              setUsuario={setUsuario}
            />
          }
        />

        <Route
          path="/reset-password/:token"
          element={<ResetPassword />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;