import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/images/logo-miraconsulting.png"
      alt="Mira Consulting"
      width={320}
      height={191}
      priority
      className="h-14 w-auto md:h-16"
    />
  );
}
