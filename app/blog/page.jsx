import SearchBox from "@/components/SearchBox";
import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";

export const metadata = { title: "Blog" };

const CATEGORIES = [
  { value: '',         label: 'All Posts',  emoji: '📝' },
  { value: 'workouts', label: 'Workouts',   emoji: '🏋️' },
  { value: 'recipes',  label: 'Recipes',    emoji: '🥗' },
  { value: 'habits',   label: 'Habits',     emoji: '🌱' },
];

export default async function BlogIndex({ searchParams }) {
  const q       = (searchParams?.q    || '').toLowerCase().trim();
  const cat     = (searchParams?.cat  || '').toLowerCase().trim();
  const page    = Number(searchParams?.page || 1);
  const perPage = 9;

  const all = await getAllPosts();

  const filtered = all.filter(p => {
    const matchQ   = !q   || `${p.title} ${p.description} ${(p.tags || []).join(' ')}`.toLowerCase().includes(q);
    const matchCat = !cat || p.category === cat;
    return matchQ && matchCat;
  });

  const totalPages = Math.ceil(filtered.length / perPage) || 1;
  const posts      = filtered.slice((page - 1) * perPage, page * perPage);

  const buildHref = (overrides = {}) => {
    const params = new URLSearchParams();
    const qVal   = overrides.q   !== undefined ? overrides.q   : q;
    const catVal = overrides.cat !== undefined ? overrides.cat : cat;
    const pageVal = overrides.page !== undefined ? overrides.page : 1;
    if (qVal)   params.set('q',    qVal);
    if (catVal) params.set('cat',  catVal);
    if (pageVal > 1) params.set('page', pageVal);
    const s = params.toString();
    return `/blog${s ? `?${s}` : ''}`;
  };

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      {/* Search */}
      <div className="mb-6">
        <SearchBox initialQuery={q} />
      </div>

      {/* Category tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {CATEGORIES.map(c => {
          const active = c.value === cat;
          return (
            <a
              key={c.value}
              href={buildHref({ cat: c.value })}
              className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-medium border transition
                ${active
                  ? 'bg-emerald-600 text-white border-emerald-600 shadow'
                  : 'border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
            >
              <span>{c.emoji}</span> {c.label}
            </a>
          );
        })}
      </div>

      {/* Heading */}
      <h1 className="text-3xl font-bold tracking-tight mb-2">
        {cat ? CATEGORIES.find(c => c.value === cat)?.label : 'Latest Posts'}
      </h1>
      <p className="text-sm opacity-55 mb-6">
        {filtered.length} post{filtered.length !== 1 ? 's' : ''}{q ? ` for "${q}"` : ''}{cat ? ` in ${cat}` : ''}
      </p>

      {/* Grid */}
      {posts.length === 0 ? (
        <div className="text-center py-16 opacity-60">
          <p className="text-4xl mb-3">🔍</p>
          <p className="font-semibold">No posts found.</p>
          <a href="/blog" className="mt-3 inline-block underline text-emerald-600 text-sm">Clear filters</a>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map(p => <PostCard key={p.slug} post={p} />)}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-10 flex-wrap">
          {page > 1 && (
            <a href={buildHref({ page: page - 1 })} className="px-3 py-1.5 rounded-lg border hover:bg-slate-50 dark:hover:bg-slate-800 text-sm">← Prev</a>
          )}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => (
            <a
              key={n}
              href={buildHref({ page: n })}
              className={`px-3 py-1.5 rounded-lg border text-sm ${n === page ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900' : 'hover:bg-slate-50 dark:hover:bg-slate-800'}`}
            >
              {n}
            </a>
          ))}
          {page < totalPages && (
            <a href={buildHref({ page: page + 1 })} className="px-3 py-1.5 rounded-lg border hover:bg-slate-50 dark:hover:bg-slate-800 text-sm">Next →</a>
          )}
        </div>
      )}
    </main>
  );
}
