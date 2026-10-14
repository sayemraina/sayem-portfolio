import { podcast, podcastEpisodes } from "@/lib/data";

export default function Podcast() {
  return (
    <section id="podcast" className="scroll-mt-32">
      <div>
        <h2 className="text-sm font-medium uppercase tracking-widest text-[#6B7280] mb-8">
          Podcast
        </h2>
        <h3 className="text-lg font-semibold text-[#1A1A1A] mb-1">
          {podcast.name}
        </h3>
        <p className="text-[#6B7280] mb-6">{podcast.description}</p>

        <div className="space-y-3">
          {podcastEpisodes.map((ep, i) => (
            <a
              key={i}
              href={ep.url}
              target={ep.url.startsWith("http") ? "_blank" : undefined}
              rel={ep.url.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-6 p-5 rounded-xl border border-[#E5E7EB] bg-white hover:border-[#D97706]/30 transition-colors group"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#FEF3C7] to-[#FDE68A] flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#D97706">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-semibold text-[#1A1A1A]">{ep.guest}</span>
                  {ep.company && (
                    <span className="text-sm text-[#9CA3AF]">{ep.company}</span>
                  )}
                </div>
                <p className="text-sm text-[#6B7280] truncate">{ep.topic}</p>
              </div>
              <svg width="16" height="16" viewBox="0 0 12 12" fill="none" className="text-[#9CA3AF] group-hover:text-[#D97706] transition-colors flex-shrink-0">
                <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
