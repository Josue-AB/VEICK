import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300
      ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        {/* LOGO */}
        <h1
          className={`text-2xl md:text-3xl lg:text-4xl font-bold transition-colors duration-300
          ${scrolled ? "text-blue-600" : "text-white"}`}
        >
          VEICK
        </h1>

        {/* MENÚ */}
        <div
          className={`hidden md:flex space-x-8 font-medium transition-colors duration-300
          ${scrolled ? "text-gray-700" : "text-white"}`}
        >
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
            Contáctanos
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all group-hover:w-full"></span>
          </a>
        </div>

        {/* BOTÓN */}
        <Link to="/login">
          <button
            className={`px-5 py-2 rounded-lg transition-all duration-300
            ${
              scrolled
                ? "bg-orange-500 text-white hover:bg-orange-600"
                : "bg-white text-black hover:bg-gray-200"
            }`}
          >
            Inicia sesión
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;