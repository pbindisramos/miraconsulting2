import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-12 border-t border-gray-100"
      style={{ backgroundColor: "#1e3a5f" }}
      aria-label="Pie de página"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Cambios estratégicos respetando la esencia organizacional y humana.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-white/80 text-sm font-semibold uppercase tracking-widest mb-4">
              Navegación
            </p>
            <nav className="flex flex-col gap-2">
              {[
                { href: "#inicio", label: "Inicio" },
                { href: "#servicios-empresas", label: "Servicios Empresas" },
                { href: "#servicios-personas", label: "Servicios Personas" },
                { href: "#equipo", label: "Equipo" },
                { href: "#contacto", label: "Contacto" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/60 text-sm hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white/80 text-sm font-semibold uppercase tracking-widest mb-4">
              Contacto
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/56995468913"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 text-sm hover:text-white transition-colors duration-200"
              >
                +56 9 9546 8913
              </a>
              <a
                href="mailto:sandra.ramos@miraconsulting.cl"
                className="text-white/60 text-sm hover:text-white transition-colors duration-200"
              >
                sandra.ramos@miraconsulting.cl
              </a>
              <p className="text-white/60 text-sm">Santiago, Chile</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            © {year} Mira Consulting. Todos los derechos reservados.
          </p>
          <p className="text-white/40 text-xs">
            www.miraconsulting.cl
          </p>
        </div>
      </div>
    </footer>
  );
}
