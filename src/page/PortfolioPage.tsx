import Header from "../components/Header";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Education from "../components/Education";

const PortfolioPage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutMe />
        <Education />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </>
  );
};

export default PortfolioPage;
