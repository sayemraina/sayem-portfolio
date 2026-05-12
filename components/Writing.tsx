import { getAllPosts } from "@/lib/blog";
import { externalWriting } from "@/lib/data";
import Link from "next/link";

export default function Writing() {
  const posts = getAllPosts().slice(0, 3);
  const hasContent = posts.length > 0 || externalWriting.length > 0;

  if (!hasContent) return null;

  return (
    <section id="writing" className="px-6 py-24">
      <div className="max-w-[720px] mx-auto">
        <h2 className="text-sm font-medium uppercase tracking-widest text-[#6B7280] mb-12">
          Writing
        </h2>

        {/* Blog posts */}
        {posts.length > 0 && (
          <div className="space-y-8 mb-12">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block group"
              >
                <div className="flex items-baseline justify-between mb-1">
                  <h3 className="text-lg font-semibold text-[#1A1A1A] group-hover:text-[#D97706] transition-colors">
                    {post.title}
                  </h3>
                  <span className="text-sm text-[#9CA3AF] flex-shrink-0 ml-4">
                    {post.readingTime}
                  </span>
                </div>
                <p className="text-[#6B7280]">{post.description}</p>
                <span className="text-sm text-[#9CA3AF] mt-1 block">
                  {post.date}
                </span>
              </Link>
            ))}
            <Link
              href="/blog"
              className="text-sm text-[#D97706] hover:underline"
            >
              View all posts &rarr;
            </Link>
          </div>
        )}

        {/* External writing */}
        {externalWriting.length > 0 && (
          <div>
            {posts.length > 0 && (
              <h3 className="text-xs font-medium uppercase tracking-widest text-[#9CA3AF] mb-6">
                Elsewhere
              </h3>
            )}
            <div className="space-y-4">
              {externalWriting.map((item, i) => (
                <a
                  key={i}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between py-2 group"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs px-2 py-0.5 rounded bg-[#F3F4F6] text-[#6B7280] font-medium">
                      {item.platform}
                    </span>
                    <span className="text-[#1A1A1A] group-hover:text-[#D97706] transition-colors">
                      {item.title}
                    </span>
                  </div>
                  <span className="text-sm text-[#9CA3AF]">{item.date}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
