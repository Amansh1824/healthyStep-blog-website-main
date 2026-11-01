import { getPostBySlug, getAllPosts, getRelatedPosts } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import components from "@/components/mdx-components";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import TableOfContents from "@/components/TableOfContents";
import PostCard from "@/components/PostCard";
import Image from "next/image";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: { images: post.cover ? [post.cover] : [] },
  };
}

export default async function PostPage({ params }) {
  const post = await getPostBySlug(params.slug);
  if (!post) return (
    <div className="mx-auto max-w-3xl p-6 py-24 text-center">
      <p className="text-5xl mb-4">😕</p>
      <h1 className="text-2xl font-bold">Post not found</h1>
      <a href="/blog" className="mt-4 inline-block underline text-emerald-600">← Back to Blog</a>
    </div>
  );

  const all = await getAllPosts();
  const related = getRelatedPosts(all, post);

  return (
    <>
      {/* Back link */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-6">
        <a href="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-emerald-600 hover:text-emerald-700 transition-colors group">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
          </svg>
          Back to Blog
        </a>
      </div>

      <article className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10">
          <div>
            <header>
              {/* Category + meta row */}
              <div className="flex flex-wrap items-center gap-2 text-sm">
                {post.category && (
                  <a
                    href={`/categories/${post.category}`}
                    className="rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300 px-3 py-0.5 font-semibold capitalize text-xs"
                  >
                    {post.category}
                  </a>
                )}
                <span className="opacity-60 text-xs">{new Date(post.date).toLocaleDateString('en-IN', { year:'numeric', month:'long', day:'numeric' })} · {post.readingTime.text}</span>
              </div>

              <h1 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">{post.title}</h1>
              {post.description && <p className="mt-3 text-lg opacity-75">{post.description}</p>}
              {post.cover && (
                <Image src={post.cover} alt={post.title} width={1200} height={630} className="mt-6 rounded-2xl w-full h-auto shadow-md" />
              )}
            </header>

            {/* MDX content */}
            <div className="prose dark:prose-invert prose-emerald max-w-none mt-8">
              {/* @ts-expect-error Async MDX */}
              <MDXRemote
                source={post.content}
                components={components}
                options={{ mdxOptions: { remarkPlugins: [remarkGfm], rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap' }]] } }}
              />
            </div>

            {/* Related posts */}
            {related.length > 0 && (
              <section className="mt-14">
                <h2 className="text-xl font-bold mb-4">You might also like</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {related.map(r => <PostCard key={r.slug} post={r} />)}
                </div>
              </section>
            )}

            {/* Disclaimer */}
            <section className="mt-10 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 p-4 text-sm opacity-70">
              <strong>Disclaimer:</strong> General wellness information only, not medical advice. Consult a qualified professional before starting any fitness or nutrition program.
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <TableOfContents items={post.headings} />
            {post.tags?.length > 0 && (
              <div className="rounded-xl border border-slate-200 dark:border-slate-700 p-4 text-sm">
                <p className="font-semibold mb-2">Tags</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(t => (
                    <a key={t} href={`/tags/${t}`} className="rounded-full border px-2 py-0.5 text-xs hover:bg-slate-100 dark:hover:bg-slate-800 transition">#{t}</a>
                  ))}
                </div>
              </div>
            )}
            {post.category && (
              <div className="rounded-xl border border-slate-200 dark:border-slate-700 p-4 text-sm">
                <p className="font-semibold mb-2">Category</p>
                <a href={`/categories/${post.category}`} className="inline-block rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300 px-3 py-0.5 font-semibold capitalize text-xs hover:opacity-80 transition">
                  {post.category}
                </a>
              </div>
            )}
          </aside>
        </div>
      </article>
    </>
  );
}
