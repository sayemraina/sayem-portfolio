import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Work from "@/components/Work";
import Podcast from "@/components/Podcast";
import Footer from "@/components/Footer";
import SectionNav from "@/components/SectionNav";

const sections = [
  { id: "projects", label: "Projects" },
  { id: "work", label: "Experience" },
  { id: "project-podcast", label: "Podcast" },
];

export default function Home() {
  return (
    <>
      <main className="mx-auto max-w-[1280px] px-6 md:px-12 lg:grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
        <Intro />
        <div>
          <SectionNav items={sections} />
          <div className="space-y-24 pb-16">
            <Projects />
            <Work />
            <Podcast />
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
}
