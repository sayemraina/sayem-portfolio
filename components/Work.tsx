import { workExperience } from "@/lib/data";

export default function Work() {
  return (
    <section id="work" className="px-6 py-24">
      <div className="max-w-[720px] mx-auto">
        <h2 className="text-sm font-medium uppercase tracking-widest text-[#6B7280] mb-12">
          Work
        </h2>
        <div className="space-y-12">
          {workExperience.map((job) => (
            <div key={job.company} className="group">
              <div className="flex items-baseline justify-between mb-2">
                <div className="flex items-baseline gap-3">
                  {job.url ? (
                    <a
                      href={job.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl font-bold text-[#1A1A1A] hover:text-[#D97706] transition-colors"
                    >
                      {job.company}
                    </a>
                  ) : (
                    <h3 className="text-xl font-bold text-[#1A1A1A]">
                      {job.company}
                    </h3>
                  )}
                  <span className="text-sm text-[#6B7280]">{job.role}</span>
                </div>
                <span className="text-sm text-[#9CA3AF]">{job.period}</span>
              </div>
              <p className="text-[#6B7280] leading-relaxed">{job.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
