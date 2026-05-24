import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Snapshot from "@/components/Snapshot";
import ResearchEquity from "@/components/ResearchEquity";
import ProfessionalEquity from "@/components/ProfessionalEquity";
import EducationEquity from "@/components/EducationEquity";
import TeachingEquity from "@/components/TeachingEquity";
import Toolbox from "@/components/Toolbox";
import Goals from "@/components/Goals";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Snapshot />
        <ResearchEquity />
        <ProfessionalEquity />
        <EducationEquity />
        <TeachingEquity />
        <Toolbox />
        <Goals />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
