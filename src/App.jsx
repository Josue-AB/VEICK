import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ResetPassword from "./components/ResetPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Home />}
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