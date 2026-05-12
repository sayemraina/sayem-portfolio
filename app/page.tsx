import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Projects from "@/components/Projects";
import Writing from "@/components/Writing";
import Podcast from "@/components/Podcast";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Work />
      <Projects />
      <Writing />
      <Podcast />
      <Footer />
    </>
  );
}
