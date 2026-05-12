import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} - Sayem Raina`,
    description: post.description,
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen px-6 py-24">
      <article className="max-w-[720px] mx-auto">
        <Link
          href="/blog"
          className="text-sm text-[#6B7280] hover:text-[#1A1A1A] transition-colors mb-12 block"
        >
          &larr; Back to writing
        </Link>

        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1A1A1A] mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-[#9CA3AF]">
            <span>{post.date}</span>
            <span>&middot;</span>
            <span>{post.readingTime}</span>
          </div>
        </header>

        <div className="prose prose-lg prose-neutral max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-[#D97706] prose-a:no-underline hover:prose-a:underline">
          <MDXRemote source={post.content} />
        </div>
      </article>
    </div>
  );
}
