import ProjectImages from "./ProjectImages";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-32">
      <div className="space-y-16">
        {projects.map((project, index) => {
          const external = !project.url.startsWith("#");
          return (
            <div key={project.title}>
              <a
                id={`project-${project.title.toLowerCase()}`}
                href={project.url}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="group block scroll-mt-32"
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
                    {project.year}
                  </span>
                </div>
              </a>
              <p className="mt-1 leading-relaxed text-[#6B7280]">
                {project.link &&
                project.description.includes(project.link.text) ? (
                  <>
                    {project.description.split(project.link.text)[0]}
                    <a
                      href={project.link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-[#1A1A1A]/50 decoration-2 underline-offset-2 transition-colors hover:text-[#1A1A1A] hover:decoration-[#1A1A1A]"
                    >
                      {project.link.text}
                    </a>
                    {project.description.split(project.link.text)[1]}
                  </>
                ) : (
                  project.description
                )}
              </p>
            </div>
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
