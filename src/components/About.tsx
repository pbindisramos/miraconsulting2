import Image from "next/image";

export default function About() {
  return (
    <section
      id="nosotros"
      className="py-20 lg:py-28"
      style={{ backgroundColor: "#f5f0eb" }}
      aria-label="Sobre Mira Consulting"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
            <Image
              src="/images/about-purpose.jpg"
              alt="Equipo de Mira Consulting trabajando juntos con propósito"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Accent block */}
            <div
              className="absolute bottom-0 left-0 right-0 h-1.5"
              style={{ backgroundColor: "#e8704a" }}
            />
          </div>

          {/* Text */}
          <div>
            <span
              className="inline-block mb-3 text-sm font-semibold uppercase tracking-widest"
              style={{ color: "#2a7f7f" }}
            >
              Nuestro propósito
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-6 leading-tight"
              style={{ color: "#1e3a5f" }}
            >
              Transformación real, desde adentro
            </h2>
            <p className="text-gray-600 text-lg mb-5 leading-relaxed">
              En Mira Consulting creemos que los cambios organizacionales más
              duraderos son los que respetan la cultura, las personas y la
              identidad de cada empresa. No imponemos soluciones: acompañamos
              procesos.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Trabajamos con líderes, equipos y personas que quieren crecer de
              forma auténtica — creando ambientes de confianza, colaboración y
              alto desempeño que perduran en el tiempo.
            </p>

            <div className="grid grid-cols-3 gap-6">
              {STATS.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div
                    className="text-3xl font-bold mb-1"
                    style={{ color: "#e8704a" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const STATS = [
  { value: "10+", label: "años de experiencia" },
  { value: "200+", label: "personas acompañadas" },
  { value: "50+", label: "organizaciones" },
];
