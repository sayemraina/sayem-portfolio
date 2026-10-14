import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Projects from "@/components/Projects";
import Podcast from "@/components/Podcast";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Work />
      <Podcast />
      <Footer />
    </>
  );
}
