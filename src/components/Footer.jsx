function Footer() {
  return (
    <footer style={{ background: "#E6F1FB", borderTop: "1px solid #B5D4F4" }} className="px-8 pt-10 pb-6">
      <div className="max-w-4xl mx-auto">

        {/* Marca centrada */}
        <div className="text-center mb-8">
          <p className="text-xl font-semibold tracking-wide text-blue-950 mb-1">
            VEICK
          </p>
          <p className="text-xs text-blue-400">
            Tecnología para la inclusión auditiva y verbal
          </p>
        </div>

        {/* Divider */}
        <div style={{ height: "0.5px" }} className="bg-blue-200 mb-5" />

        {/* Bottom centrado */}
        <div className="flex flex-col items-center gap-3">
          <span className="text-xs font-medium tracking-widest uppercase bg-blue-700 text-blue-100 px-3 py-1 rounded-full">
            Proyecto académico
          </span>
          <p className="text-xs text-blue-400">
            © 2026 VEICK — Todos los derechos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
