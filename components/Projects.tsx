import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="max-w-[720px] mx-auto">
        <h2 className="text-sm font-medium uppercase tracking-widest text-[#6B7280] mb-12">
          Projects
        </h2>
        <div className="space-y-8">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.url}
              target={project.url.startsWith("#") ? undefined : "_blank"}
              rel={project.url.startsWith("#") ? undefined : "noopener noreferrer"}
              className="project-card block rounded-2xl border border-[#E5E7EB] bg-white overflow-hidden"
            >
              {/* Image placeholder */}
              <div className="aspect-[16/9] bg-gradient-to-br from-[#F3F4F6] to-[#E5E7EB] flex items-center justify-center">
                <span className="text-[#9CA3AF] text-sm">
                  {project.title} preview
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-[#1A1A1A]">
                    {project.title}
                  </h3>
                  <svg width="16" height="16" viewBox="0 0 12 12" fill="none" className="text-[#9CA3AF]">
                    <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-[#6B7280] leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-[#F3F4F6] text-[#6B7280]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
