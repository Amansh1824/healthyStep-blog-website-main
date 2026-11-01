import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";

const CATEGORY_META = {
  workouts: { label: "Workouts", emoji: "🏋️", description: "Home workouts, HIIT, mobility and beginner fitness guides." },
  recipes:  { label: "Recipes",  emoji: "🥗", description: "Healthy Indian recipes that are quick, nutritious and delicious." },
  habits:   { label: "Habits",   emoji: "🌱", description: "Daily habits for energy, mental health and lasting wellness." },
  gear:     { label: "Gear",     emoji: "🎽", description: "Honest reviews and recommendations for budget-friendly fitness gear." },
};

export async function generateStaticParams() {
  const posts = await getAllPosts();
  const cats = [...new Set(posts.map(p => p.category).filter(Boolean))];
  return cats.map(cat => ({ cat }));
}

export async function generateMetadata({ params }) {
  const { cat } = params;
  const meta = CATEGORY_META[cat] || { label: cat, emoji: "📂", description: `Posts in the ${cat} category.` };
  return { title: meta.label, description: meta.description };
}

export default async function CategoryPage({ params }) {
  const { cat } = params;
  const meta  = CATEGORY_META[cat] || { label: cat, emoji: "📂", description: `Posts in the ${cat} category.` };
  const posts = (await getAllPosts()).filter(p => p.category === cat);

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm opacity-60 mb-6 flex items-center gap-2">
        <a href="/" className="hover:underline">Home</a>
        <span>›</span>
        <a href="/blog" className="hover:underline">Blog</a>
        <span>›</span>
        <span className="font-semibold text-slate-900 dark:text-slate-100">{meta.label}</span>
      </nav>

      {/* Header */}
      <div className="mb-10">
        <p className="text-5xl mb-3">{meta.emoji}</p>
        <h1 className="text-3xl font-bold tracking-tight">{meta.label}</h1>
        <p className="mt-2 text-base opacity-70 max-w-xl">{meta.description}</p>
        <p className="mt-2 text-sm opacity-50">{posts.length} post{posts.length !== 1 ? 's' : ''}</p>
      </div>

      {/* Grid */}
      {posts.length === 0 ? (
        <div className="text-center py-16 opacity-60">
          <p className="text-4xl mb-3">✍️</p>
          <p className="font-semibold">No posts in this category yet.</p>
          <p className="text-sm mt-1">Check back soon — new content is on the way!</p>
          <a href="/blog" className="mt-4 inline-block underline text-emerald-600 text-sm">← Browse all posts</a>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map(p => <PostCard key={p.slug} post={p} />)}
        </div>
      )}
    </main>
  );
}
