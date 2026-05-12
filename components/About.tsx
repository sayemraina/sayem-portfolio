import { siteConfig } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="max-w-[720px] mx-auto">
        <p className="text-lg md:text-xl leading-relaxed text-[#4B5563]">
          {siteConfig.bio}
        </p>
      </div>
    </section>
  );
}
