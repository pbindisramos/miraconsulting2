import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mira Consulting | Transformación Organizacional y Coaching Ejecutivo",
  description:
    "Consultoría de desarrollo organizacional, coaching ejecutivo y selección de talentos en Chile. Acompañamos cambios estratégicos respetando la esencia organizacional y humana.",
  keywords: [
    "consultoría organizacional",
    "coaching ejecutivo",
    "selección de talentos",
    "transformación organizacional",
    "liderazgo",
    "Chile",
  ],
  openGraph: {
    title: "Mira Consulting | Transformación Organizacional",
    description:
      "Cambios estratégicos respetando la esencia organizacional y humana. Coaching ejecutivo, desarrollo de liderazgo y selección de talentos en Chile.",
    url: "https://www.miraconsulting.cl",
    siteName: "Mira Consulting",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mira Consulting | Transformación Organizacional",
    description:
      "Consultoría de desarrollo organizacional y coaching ejecutivo en Chile.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
