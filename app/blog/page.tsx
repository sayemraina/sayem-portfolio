import { getAllPosts } from "@/lib/blog";
import Link from "next/link";

export const metadata = {
  title: "Writing - Sayem Raina",
  description: "Thoughts on building, AI, and information.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen px-6 py-24">
      <div className="max-w-[720px] mx-auto">
        <Link
          href="/"
          className="text-sm text-[#6B7280] hover:text-[#1A1A1A] transition-colors mb-12 block"
        >
          &larr; Back
        </Link>

        <h1 className="text-3xl font-bold tracking-tight text-[#1A1A1A] mb-12">
          Writing
        </h1>

        {posts.length === 0 ? (
          <p className="text-[#6B7280]">Posts coming soon.</p>
        ) : (
          <div className="space-y-10">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block group"
              >
                <div className="flex items-baseline justify-between mb-1">
                  <h2 className="text-xl font-semibold text-[#1A1A1A] group-hover:text-[#D97706] transition-colors">
                    {post.title}
                  </h2>
                  <span className="text-sm text-[#9CA3AF] flex-shrink-0 ml-4">
                    {post.readingTime}
                  </span>
                </div>
                <p className="text-[#6B7280] mb-1">{post.description}</p>
                <span className="text-sm text-[#9CA3AF]">{post.date}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
