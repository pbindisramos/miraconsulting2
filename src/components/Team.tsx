import Image from "next/image";

type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
};

const TEAM: TeamMember[] = [
  {
    name: "Sandra Ramos",
    role: "Directora & Coach Ejecutiva",
    bio: "Psicóloga organizacional con más de 15 años acompañando procesos de cambio en empresas de distintos sectores. Especialista en coaching ejecutivo, desarrollo de liderazgo y cultura organizacional. Fundadora de Mira Consulting.",
    image: "/images/team/team-sandra-ramos.png",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Esther Munizaga",
    role: "Consultora & Coach",
    bio: "Coach certificada y consultora en desarrollo organizacional, con amplia experiencia en programas de liderazgo, bienestar laboral y selección de talentos. Especialista en acompañamiento de transiciones personales y profesionales.",
    image: "/images/team/team-ester-munizaga.png",
    linkedin: "https://www.linkedin.com/",
  },
];

export default function Team() {
  return (
    <section
      id="equipo"
      className="py-20 lg:py-28 bg-white"
      aria-label="Nuestro equipo"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span
            className="inline-block mb-3 text-sm font-semibold uppercase tracking-widest"
            style={{ color: "#2a7f7f" }}
          >
            Quiénes somos
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: "#1e3a5f" }}
          >
            Nuestro Equipo
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Profesionales apasionadas por el desarrollo humano y el cambio
            organizacional auténtico.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {TEAM.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article className="group flex flex-col items-center text-center p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="relative w-40 h-40 rounded-full overflow-hidden mb-6 ring-4 ring-offset-2 ring-teal-100 group-hover:ring-teal-300 transition-all duration-300">
        <Image
          src={member.image}
          alt={`Foto de ${member.name}`}
          fill
          className="object-cover object-top"
          sizes="160px"
        />
      </div>
      <h3
        className="text-xl font-bold mb-1"
        style={{ color: "#1e3a5f" }}
      >
        {member.name}
      </h3>
      <span
        className="inline-block mb-4 text-sm font-medium px-3 py-1 rounded-full"
        style={{ backgroundColor: "#e8f5f5", color: "#2a7f7f" }}
      >
        {member.role}
      </span>
      <p className="text-gray-500 text-sm leading-relaxed mb-5">
        {member.bio}
      </p>
      {member.linkedin && (
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200 hover:opacity-80"
          style={{ color: "#2a7f7f" }}
          aria-label={`LinkedIn de ${member.name}`}
        >
          <LinkedInIcon />
          Ver perfil en LinkedIn
        </a>
      )}
    </article>
  );
}

function LinkedInIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
