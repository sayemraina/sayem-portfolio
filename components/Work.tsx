import { workExperience } from "@/lib/data";

export default function Work() {
  return (
    <section id="work" className="scroll-mt-32">
      <h2 className="mb-8 text-sm font-medium uppercase tracking-widest text-[#6B7280]">
        Experience
      </h2>
      <div className="divide-y divide-[#E5E7EB]">
        {workExperience.map((job) => (
          <div key={job.company} className="py-6 first:pt-0">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-semibold text-[#1A1A1A]">{job.company}</h3>
              <span className="shrink-0 text-sm text-[#9CA3AF]">
                {job.location} &middot; {job.period}
              </span>
            </div>
            <p className="text-sm text-[#6B7280]">{job.role}</p>
            <div className="mt-2 space-y-2">
              {job.description.map((paragraph, i) => (
                <p key={i} className="leading-relaxed text-[#4B5563]">
                  {job.link && paragraph.includes(job.link.text) ? (
                    <>
                      {paragraph.split(job.link.text)[0]}
                      <a
                        href={job.link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-[#1A1A1A]/50 decoration-2 underline-offset-2 transition-colors hover:text-[#1A1A1A] hover:decoration-[#1A1A1A]"
                      >
                        {job.link.text}
                      </a>
                      {paragraph.split(job.link.text)[1]}
                    </>
                  ) : (
                    paragraph
                  )}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
