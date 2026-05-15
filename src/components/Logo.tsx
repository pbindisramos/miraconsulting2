import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/images/logo-miraconsulting.png"
      alt="Mira Consulting"
      width={240}
      height={143}
      priority
      className="h-10 w-auto"
    />
  );
}
