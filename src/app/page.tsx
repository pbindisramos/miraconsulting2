import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ServicesCompany from "@/components/ServicesCompany";
import ServicesPeople from "@/components/ServicesPeople";
import Team from "@/components/Team";
import CtaBanner from "@/components/CtaBanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <ServicesCompany />
        <ServicesPeople />
        <Team />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
