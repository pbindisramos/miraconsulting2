import type { ReactNode } from "react";

type PersonService = {
  icon: ReactNode;
  title: string;
  description: string;
};

const SERVICES: PersonService[] = [
  {
    icon: <IconLife />,
    title: "Life Coaching",
    description:
      "Un espacio para clarificar tus metas personales, superar bloqueos y tomar decisiones alineadas con quién querés ser.",
  },
  {
    icon: <IconTransition />,
    title: "Coaching de Transición Laboral",
    description:
      "Acompañamiento para quienes están cambiando de carrera, buscando trabajo o enfrentando un momento de incertidumbre profesional.",
  },
  {
    icon: <IconMentor />,
    title: "Mentoría Ejecutiva",
    description:
      "Proceso con una mentora experimentada que te ayuda a navegar desafíos de liderazgo con perspectiva y criterio.",
  },
  {
    icon: <IconSkill />,
    title: "Desarrollo de Habilidades de Liderazgo",
    description:
      "Fortalecé tu capacidad de comunicar, influir y liderar equipos — desde el autoconocimiento hasta las habilidades relacionales.",
  },
];

export default function ServicesPeople() {
  return (
    <section
      id="servicios-personas"
      className="py-20 lg:py-28"
      style={{ backgroundColor: "#f5f0eb" }}
      aria-label="Servicios para personas"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span
            className="inline-block mb-3 text-sm font-semibold uppercase tracking-widest"
            style={{ color: "#e8704a" }}
          >
            Para personas
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: "#1e3a5f" }}
          >
            Servicios para Personas
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Procesos personalizados para profesionales que quieren crecer,
            liderar y vivir con más claridad y propósito.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <article
              key={service.title}
              className="p-6 rounded-2xl bg-white border border-orange-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: "#fef0eb" }}
              >
                <div style={{ color: "#e8704a" }}>{service.icon}</div>
              </div>
              <h3
                className="text-lg font-bold mb-3 leading-snug"
                style={{ color: "#1e3a5f" }}
              >
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function IconLife() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function IconTransition() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function IconMentor() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function IconSkill() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  );
}
