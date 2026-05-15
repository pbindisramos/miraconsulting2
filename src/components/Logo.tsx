export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="18" cy="18" r="18" fill="#2a7f7f" />
        <circle cx="18" cy="18" r="9" fill="none" stroke="#e8704a" strokeWidth="2.5" />
        <circle cx="18" cy="18" r="3" fill="#ffffff" />
        <line x1="18" y1="4" x2="18" y2="10" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
        <line x1="18" y1="26" x2="18" y2="32" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
        <line x1="4" y1="18" x2="10" y2="18" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
        <line x1="26" y1="18" x2="32" y2="18" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <span className="text-xl font-bold tracking-tight" style={{ color: "#1e3a5f" }}>
        Mira<span style={{ color: "#2a7f7f" }}>Consulting</span>
      </span>
    </div>
  );
}
