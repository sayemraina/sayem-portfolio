import { siteConfig } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-[#E5E7EB] pt-8 text-sm text-[#9CA3AF]">
      {siteConfig.name} &middot; {new Date().getFullYear()}
    </footer>
  );
}
