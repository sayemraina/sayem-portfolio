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
              <span className="shrink-0 text-sm text-[#9CA3AF]">{job.period}</span>
            </div>
            <p className="text-sm text-[#6B7280]">{job.role}</p>
            <p className="mt-2 leading-relaxed text-[#4B5563]">{job.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
