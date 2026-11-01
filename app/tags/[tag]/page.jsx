import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  const tags = [...new Set(posts.flatMap(p => p.tags || []))];
  return tags.map(t => ({ tag: t }));
}

export async function generateMetadata({ params }) {
  return { title: `#${params.tag}`, description: `All posts tagged with #${params.tag} on HealthyStep.` };
}

export default async function TagPage({ params }) {
  const { tag } = params;
  const posts = (await getAllPosts()).filter(p => (p.tags || []).includes(tag));

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm opacity-60 mb-6 flex items-center gap-2">
        <a href="/" className="hover:underline">Home</a>
        <span>›</span>
        <a href="/blog" className="hover:underline">Blog</a>
        <span>›</span>
        <span className="font-semibold text-slate-900 dark:text-slate-100">#{tag}</span>
      </nav>

      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">
          Posts tagged <span className="text-emerald-600">#{tag}</span>
        </h1>
        <p className="mt-2 text-sm opacity-60">{posts.length} post{posts.length !== 1 ? 's' : ''} found</p>
      </div>

      {posts.length === 0 ? (
        <p className="opacity-60">No posts with this tag yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map(p => <PostCard key={p.slug} post={p} />)}
        </div>
      )}
    </main>
  );
}
