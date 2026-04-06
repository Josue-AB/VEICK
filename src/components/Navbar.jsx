import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        {/* LOGO */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-600">
        VEICK
        </h1>

        {/* MENÚ */}
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
 <a href="#" className="relative group hover:text-blue-600 transition">
    ¿Quiénes Somos?
    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all group-hover:w-full"></span>
  </a>

  <a href="#" className="relative group hover:text-blue-600 transition">
    Problema
    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all group-hover:w-full"></span>
  </a>

  <a href="#" className="relative group hover:text-blue-600 transition">
    Solución
    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all group-hover:w-full"></span>
  </a>
          <a href="#" className="relative group hover:text-blue-600 transition">
    Contactanos
    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all group-hover:w-full"></span>
  </a>
        </div>

        {/* BOTÓN */}
        <Link to="/login">
          <button className="bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600 transition">
            Inicia sesión
          </button>
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;