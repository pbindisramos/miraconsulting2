import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/images/logo-miraconsulting.png"
      alt="Mira Consulting"
      width={480}
      height={286}
      priority
      className="h-20 w-auto md:h-24"
    />
  );
}
