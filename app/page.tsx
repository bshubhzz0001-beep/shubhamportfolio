import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ResearchEquity from "@/components/ResearchEquity";
import ProfessionalEquity from "@/components/ProfessionalEquity";
import Skills from "@/components/Skills";
import EducationEquity from "@/components/EducationEquity";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <ProfessionalEquity />
        <ResearchEquity />
        <Skills />
        <EducationEquity />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
