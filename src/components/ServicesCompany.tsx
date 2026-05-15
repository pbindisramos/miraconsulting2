import type { ReactNode } from "react";

type Service = {
  icon: ReactNode;
  title: string;
  description: string;
};

const SERVICES: Service[] = [
  {
    icon: <IconOrg />,
    title: "Consultoría Organizacional y Gestión del Cambio",
    description:
      "Diagnóstico profundo y planes de acción para transformar estructuras y culturas respetando la identidad organizacional.",
  },
  {
    icon: <IconCoach />,
    title: "Coaching Ejecutivo y de Equipos",
    description:
      "Procesos individuales y grupales para potenciar el liderazgo, la comunicación efectiva y la cohesión de equipos.",
  },
  {
    icon: <IconLeader />,
    title: "Desarrollo de Liderazgo",
    description:
      "Programas a medida para líderes que quieren liderar con propósito, impacto y coherencia entre quienes son y cómo gestionan.",
  },
  {
    icon: <IconTalent />,
    title: "Reclutamiento y Selección",
    description:
      "Búsqueda de talento con foco cultural: encontramos personas que se alinean a los valores y necesidades reales de tu organización.",
  },
  {
    icon: <IconPerf />,
    title: "Sistemas de Gestión del Desempeño",
    description:
      "Diseño e implementación de modelos de evaluación y feedback que impulsan el crecimiento continuo y el compromiso.",
  },
  {
    icon: <IconAgile />,
    title: "Implementación Ágil",
    description:
      "Adopción de metodologías ágiles adaptadas a la cultura y madurez de cada equipo, con acompañamiento real en el proceso.",
  },
];

export default function ServicesCompany() {
  return (
    <section
      id="servicios-empresas"
      className="py-20 lg:py-28 bg-white"
      aria-label="Servicios para empresas"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span
            className="inline-block mb-3 text-sm font-semibold uppercase tracking-widest"
            style={{ color: "#2a7f7f" }}
          >
            Para organizaciones
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: "#1e3a5f" }}
          >
            Servicios para Empresas
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Acompañamos cada etapa del crecimiento organizacional — desde el
            diagnóstico hasta la implementación y el seguimiento.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300"
        style={{ backgroundColor: "#e8f5f5" }}
      >
        <div style={{ color: "#2a7f7f" }}>{service.icon}</div>
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
  );
}

function IconOrg() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="3" width="6" height="5" rx="1" />
      <rect x="9" y="3" width="6" height="5" rx="1" />
      <rect x="16" y="3" width="6" height="5" rx="1" />
      <rect x="7" y="14" width="10" height="7" rx="1" />
      <line x1="5" y1="8" x2="5" y2="14" />
      <line x1="12" y1="8" x2="12" y2="14" />
      <line x1="19" y1="8" x2="19" y2="14" />
      <line x1="5" y1="14" x2="19" y2="14" />
    </svg>
  );
}

function IconCoach() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function IconLeader() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function IconTalent() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
      <line x1="11" y1="8" x2="11" y2="14" />
      <line x1="8" y1="11" x2="14" y2="11" />
    </svg>
  );
}

function IconPerf() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  );
}

function IconAgile() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="23 4 23 10 17 10" />
      <polyline points="1 20 1 14 7 14" />
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
    </svg>
  );
}
