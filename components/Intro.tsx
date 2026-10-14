import { siteConfig } from "@/lib/data";

const links = [
  { label: "X", href: siteConfig.social.twitter },
  { label: "GitHub", href: siteConfig.social.github },
  { label: "LinkedIn", href: siteConfig.social.linkedin },
  { label: "Email", href: `mailto:${siteConfig.email}` },
];

export default function Intro() {
  return (
    <header className="flex flex-col justify-between gap-12 py-12 lg:sticky lg:top-0 lg:h-screen lg:py-16 animate-fade-in">
      <p className="pl-[2px] text-base font-medium text-[#1A1A1A]">
        {siteConfig.name}
      </p>

      <div className="space-y-6">
        <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold leading-[1.15] tracking-tight text-[#1A1A1A]">
          {siteConfig.taglineLines.join(" ")}
        </h1>
        <div className="space-y-2">
          {siteConfig.bioLines.map((line) => (
            <p key={line} className="text-lg leading-relaxed text-[#6B7280]">
              {line}
            </p>
          ))}
        </div>
      </div>

      <nav className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-[#1A1A1A]">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={
              link.href.startsWith("http") ? "noopener noreferrer" : undefined
            }
            className="underline-offset-4 hover:underline"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
