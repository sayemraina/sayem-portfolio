import ProjectImages from "./ProjectImages";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-32">
      <div className="space-y-16">
        {projects.map((project, index) => {
          const external = !project.url.startsWith("#");
          return (
            <a
              key={project.title}
              href={project.url}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="group block"
            >
              <div className="rounded-2xl bg-[#EFEEEA] p-5 md:p-8">
                <div
                  className="relative overflow-hidden rounded-lg bg-white shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-transform duration-300 group-hover:-translate-y-1"
                  style={{ aspectRatio: "2940 / 1540" }}
                >
                  <ProjectImages
                    images={project.images}
                    title={project.title}
                    offsetMs={index * 900}
                  />
                </div>
              </div>
              <div className="mt-5 flex items-baseline justify-between gap-4">
                <h3 className="text-lg font-semibold text-[#1A1A1A] group-hover:underline underline-offset-4">
                  {project.title}
                </h3>
                <span className="text-sm tabular-nums text-[#9CA3AF]">
                  {project.year} &middot; {String(index + 1).padStart(2, "0")} /{" "}
                  {String(projects.length).padStart(2, "0")}
                </span>
              </div>
              <p className="mt-1 leading-relaxed text-[#6B7280]">
                {project.description}
              </p>
            </a>
          );
        })}
      </div>
      <a
        href="#work"
        className="mt-14 inline-block text-sm font-medium uppercase tracking-widest text-[#9CA3AF] transition-colors hover:text-[#1A1A1A]"
      >
        Next: Experience &darr;
      </a>
    </section>
  );
}
